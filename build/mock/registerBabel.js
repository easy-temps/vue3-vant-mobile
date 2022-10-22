const { join, isAbsolute } = require('path')
const { existsSync } = require('fs')
const { winPath } = require('./utils')
let files = null

function initFiles(cwd) {
  if (files)
    return
  files = getConfigPaths(cwd)
}
function getConfigPaths(cwd) {
  const env = process.env.UMI_ENV
  return [
    join(cwd, 'config/'),
    join(cwd, '.umirc.js'),
    join(cwd, '.umirc.ts'),
    join(cwd, '.umirc.local.js'),
    join(cwd, '.umirc.local.ts'),
    ...(env ? [join(cwd, `.umirc.${env}.js`), join(cwd, `.umirc.${env}.ts`)] : []),
  ]
}

function addBabelRegisterFiles(extraFiles, { cwd }) {
  initFiles(cwd)
  files = files.concat(...extraFiles)
}
function addBabelRegister({ cwd }) {
  initFiles(cwd)
  const only = files.map((f) => {
    const fullPath = isAbsolute(f) ? f : join(cwd, f)
    return winPath(fullPath)
  })

  let absSrcPath = join(cwd, 'src')
  if (!existsSync(absSrcPath))
    absSrcPath = cwd

  registerBabel({
    // only suport glob
    // ref: https://babeljs.io/docs/en/next/babel-core.html#configitem-type
    only,
    babelPreset: [
      require.resolve('@babel/preset-env'),
      {
        targets: { browsers: ['last 2 versions'] },
        loose: false,
        modules: 'commonjs',
        exclude: [
          'transform-typeof-symbol',
          'transform-unicode-regex',
          'transform-sticky-regex',
          'transform-new-target',
          'transform-modules-umd',
          'transform-modules-systemjs',
          'transform-modules-amd',
          'transform-literals',
        ],
      },
    ],
    babelPlugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          alias: {
            '@': absSrcPath,
          },
        },
      ],
    ],
  })
}
function configBabelRegister(files, { cwd }) {
  addBabelRegisterFiles(files, {
    cwd,
  })
  addBabelRegister({
    cwd,
  })
}
function registerBabel(opts = {}) {
  const { only, ignore, babelPreset, babelPlugins } = opts
  if (!process.env.IS_FROM_UMI_TEST) {
    require('@babel/register')({
      presets: [require.resolve('@babel/preset-typescript'), babelPreset],
      plugins: babelPlugins || [],
      only,
      ignore,
      extensions: ['.es6', '.es', '.jsx', '.js', '.mjs', '.ts', '.tsx'],
      babelrc: false,
      cache: false,
    })
  }
}

module.exports = { addBabelRegisterFiles, addBabelRegister, configBabelRegister }
