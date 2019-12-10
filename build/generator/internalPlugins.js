const glob = require('glob')
const { ROOT_DIR } = require('./tool')

module.exports.retrieveInternalPluginPaths = function() {
  const result = glob.sync('libs/src/plugins/*/type.d.ts', {
    cwd: ROOT_DIR
  })

  return result.map(r => {
    return `../${r.replace('.d.ts', '')}`
  })
}
