const diff = require('json-diff')
const { resolve } = require('path')
const { readFileSync, existsSync, copyFileSync } = require('fs')

const requiredTsConfigPath = resolve(__dirname, 'tsconfig.json.vm')

module.exports.diffTsConfig = function() {
  const userProvidedTsConfigPath = resolve(process.cwd(), 'tsconfig.json')

  if (!existsSync(userProvidedTsConfigPath)) {
    return 'NO_TSCONFIG_PROVIDED'
  }

  const userProvidedTsConfig = require(userProvidedTsConfigPath)
  const requiredTsConfig = JSON.parse(readFileSync(requiredTsConfigPath, { encoding: 'utf8' }))
  const compareResult = diff.diff(requiredTsConfig, userProvidedTsConfig)
  if (!compareResult) {
    return null
  }

  const clearCompareResult = remove__Added(compareResult)
  if (!clearCompareResult) {
    return null
  }
  const outputText = JSON.stringify(clearCompareResult, null, 2)
    .replace(/__old/g, 'should be')
    .replace(/__new/g, 'yours')
    .replace(/__deleted/g, ' | you missed')
  return outputText
}

function remove__Added(compareResult) {
  const keys = Object.keys(compareResult)
  if (!keys.length) {
    return null
  }
  const withAddedKeys = keys.filter(key => key.endsWith('__added'))
  withAddedKeys.forEach(key => {
    delete compareResult[key]
  })
  const restKeys = Object.keys(compareResult)
  if (!restKeys.length) {
    return null
  }

  restKeys.forEach(key => {
    const val = compareResult[key]
    if (Object.prototype.toString.call(val) == '[object Object]') {
      const newVal = remove__Added(val)
      if (!newVal) {
        delete compareResult[key]
      }
    }
  })
  const lastKeys = Object.keys(compareResult)
  if (!lastKeys.length) {
    return null
  }
  return compareResult
}

module.exports.copyTsConfig = function(dest) {
  copyFileSync(requiredTsConfigPath, dest)
}
