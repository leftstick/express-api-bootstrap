const glob = require('glob')
const { resolve } = require('path')
const { copyFileSync } = require('fs')
const { ROOT_DIR, GEN_TYPES_DIR, ensureNewDir } = require('./tool')

module.exports.retrieveInternalPluginPaths = function() {
  const cwd = resolve(ROOT_DIR, 'src/plugins')
  const destPluginsDir = resolve(GEN_TYPES_DIR, 'internalplugins')
  const result = glob.sync('*/type.ts', {
    cwd
  })

  ensureNewDir(destPluginsDir)

  return result.map(r => {
    const destReltivePath = r.replace('/', '_')
    copyFileSync(resolve(cwd, r), resolve(destPluginsDir, destReltivePath))
    return `./internalplugins/${destReltivePath.replace('.ts', '')}`
  })
}
