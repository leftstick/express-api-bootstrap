const { GEN_TYPES_DIR, genEntry, ensureNewDir } = require('./tool')
const { retrieveInternalPluginPaths } = require('./internalPlugins')

ensureNewDir(GEN_TYPES_DIR)

const pluginPaths = retrieveInternalPluginPaths()

genEntry(pluginPaths)
