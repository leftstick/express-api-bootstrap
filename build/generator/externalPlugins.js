require('./registerBabelForConfig')
const { resolve, join } = require('path')
const { existsSync } = require('fs')

module.exports.retrieveExternalPluginPaths = function() {
  const cwd = process.cwd()
  let rawConfig = null
  try {
    rawConfig = require(resolve(cwd, '.bootrc.ts'))
  } catch (error) {
    return []
  }
  if (!rawConfig) {
    return []
  }
  const config = rawConfig.default || rawConfig

  const plugins = config.plugins.filter(plugin => plugin && plugin.name)

  return [
    ...plugins.map(plugin => join(cwd, plugin.name, 'type.ts')),
    ...plugins.map(plugin => join(cwd, 'node_modules', plugin.name, 'type.ts'))
  ]
    .filter(pluginPath => existsSync(pluginPath))
    .map(pluginPath => pluginPath.replace('.ts', ''))
}
