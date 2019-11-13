const del = require('del')
const template = require('lodash.template')
const { resolve } = require('path')
const { existsSync, mkdirSync, readFileSync, writeFileSync } = require('fs')

const ROOT_DIR = resolve(__dirname, '..', '..')
const GEN_TYPES_DIR = resolve(ROOT_DIR, 'types')

module.exports.ROOT_DIR = ROOT_DIR
module.exports.GEN_TYPES_DIR = GEN_TYPES_DIR

module.exports.ensureNewDir = function(dir) {
  if (existsSync(dir)) {
    del.sync(dir)
  }
  mkdirSync(dir)
}

module.exports.genEntry = function(pluginPaths) {
  const entryTypeSrc = resolve(ROOT_DIR, 'src', 'templates', 'index.ts.vm')
  const entryTypeDest = resolve(ROOT_DIR, 'types', 'index.ts')

  const entryTypeContent = readFileSync(entryTypeSrc, { encoding: 'utf8' })

  const compiled = template(entryTypeContent)

  const result = compiled({
    pluginPaths
  })

  writeFileSync(entryTypeDest, result, { encoding: 'utf8' })
  console.log('types/index.ts generated')
}
