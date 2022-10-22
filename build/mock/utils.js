const slash = require('slash2')

const winPath = function (path) {
  return slash(path)
}

module.exports = {
  winPath,
}
