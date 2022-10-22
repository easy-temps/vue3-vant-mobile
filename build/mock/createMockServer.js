const { join } = require('path')
const url = require('url')
const chokidar = require('chokidar')
const signale = require('signale')
const { match } = require('path-to-regexp')
const { initMock, getMatchMock } = require('./getMockData')
const { winPath } = require('./utils')
const { configBabelRegister } = require('./registerBabel')
let watcher
function getPaths(cwd) {
  const winCwd = winPath(cwd)
  const absMockPath = winPath(join(winCwd, 'mock'))
  return {
    absMockPath,
  }
}

function parseJson(req) {
  return new Promise((resolve) => {
    let body = ''
    let jsonStr = ''
    req.on('data', (chunk) => {
      body += chunk
    })
    req.on('end', () => {
      try {
        jsonStr = JSON.parse(body)
      }
      catch (err) {
        jsonStr = ''
      }
      resolve(jsonStr)
    })
  })
}
const defaultOptions = {
  watch: true,
  cwd: process.cwd(), // 配置需要mock的url
  mockUrlList: [],
  // 是否开启mock
  enable: true,
}
function initWatchMockFiles(paths) {
  // chokidar 在 windows 下使用反斜杠组成的 glob 无法正确 watch 文件变动
  // ref: https://github.com/paulmillr/chokidar/issues/777
  const absPagesGlobPath = winPath(join('./mock', '**/*.[jt]s'))
  watcher = chokidar.watch([...['./mock'], absPagesGlobPath], {
    ignoreInitial: true,
  })
  watcher.on('all', (event, file) => {
    signale.info(`[${event}] ${file}, reload mock data`)
    cleanRequireCache(paths)
  })
  process.once('SIGINT', () => {
    watcher.close()
  })
}
function cleanRequireCache(paths) {
  Object.keys(require.cache).forEach((file) => {
    if (
      paths.some((path) => {
        return winPath(file).includes(path)
      })
    )
      delete require.cache[file]
  })
}
module.exports = function (opts) {
  const options = Object.assign({}, defaultOptions, opts)
  const { absMockPath } = getPaths(options.cwd)
  const paths = [absMockPath]
  if (options.enable) {
    // vite热更新时关闭上一个进程
    if (watcher)
      watcher.close()

    configBabelRegister(paths, {
      cwd: options.cwd,
    })
    initMock(options)
    if (options.watch)
      initWatchMockFiles(paths)
  }

  return {
    name: 'vite:mock',
    enforce: 'pre',
    configureServer({ middlewares }) {
      if (!options.enable)
        return

      const middleware = async (req, res, next) => {
        const matchMock = getMatchMock(req.url)
        if (matchMock) {
          let queryParams = {}

          if (req.url)
            // eslint-disable-next-line n/no-deprecated-api
            queryParams = url.parse(req.url, true)

          const reqUrl = queryParams.pathname
          let query = queryParams.query
          if (reqUrl) {
            const isGet = req.method && req.method.toUpperCase() === 'GET'
            if ((isGet && JSON.stringify(query) === '{}') || !isGet) {
              const urlMatch = match(url, { decode: decodeURIComponent })
              const params = urlMatch(reqUrl).params
              if (JSON.stringify(params) !== '{}')
                query = urlMatch(reqUrl).params || {}

              else
                query = queryParams.query || {}
            }
          }
          const body = await parseJson(req)
          res.setHeader('Content-Type', 'application/json;charset=utf-8')
          res.send = opt => res.end(JSON.stringify(opt))
          res.json = opt => res.end(JSON.stringify(opt))
          matchMock.handler({ url: req.url, body, query, headers: req.headers }, res)
          return
        }
        next()
      }
      middlewares.use(middleware)
    },
  }
}
