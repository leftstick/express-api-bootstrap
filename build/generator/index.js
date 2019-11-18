const { GEN_TYPES_DIR, genEntry, ensureNewDir } = require('./tool')
const { retrieveInternalPluginPaths } = require('./internalPlugins')
const { retrieveExternalPluginPaths } = require('./externalPlugins')

ensureNewDir(GEN_TYPES_DIR)

const internalPluginPaths = retrieveInternalPluginPaths()
const externalPluginPaths = retrieveExternalPluginPaths()

genEntry(internalPluginPaths, externalPluginPaths)
