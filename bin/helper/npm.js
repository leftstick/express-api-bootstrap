const { existsSync } = require('fs')
const { resolve, dirname } = require('path')

module.exports.findBinDir = function(binName) {
  let lastBasePath = __dirname
  let binPath = resolve(lastBasePath, 'node_modules', '.bin', binName)
  let depth = 0
  while (!existsSync(binPath)) {
    if (depth === 10) {
      return null
    }
    lastBasePath = dirname(lastBasePath)
    binPath = resolve(lastBasePath, 'node_modules', '.bin', binName)
    depth++
  }

  return binPath
}
