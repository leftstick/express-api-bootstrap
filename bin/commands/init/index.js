const signale = require('signale')
const { resolve } = require('path')
const diff = require('json-diff')
const { readFileSync, existsSync, copyFileSync } = require('fs')

module.exports = {
  cmd: 'init',
  description: 'Init repo with required stuff',
  action() {
    const userProvidedTsConfigPath = resolve(process.cwd(), 'tsconfig.json')
    const requiredTsConfigPath = resolve(__dirname, 'tsconfig.json.vm')
    if (existsSync(userProvidedTsConfigPath)) {
      const userProvidedTsConfig = require(userProvidedTsConfigPath)
      const requiredTsConfig = JSON.parse(readFileSync(requiredTsConfigPath, { encoding: 'utf8' }))
      const compareResult = diff.diff(requiredTsConfig, userProvidedTsConfig)
      if (compareResult) {
        const clearCompareResult = remove__Added(compareResult)
        if (clearCompareResult) {
          signale.warn('tsconfig.json you provided has something different as it should be, see blow:')
          const outputText = JSON.stringify(clearCompareResult, null, 2)
            .replace(/__old/g, 'should be')
            .replace(/__new/g, 'yours')
            .replace(/__deleted/g, ' | you missed')
          console.log(outputText)
          return signale.warn(
            'you have to change it first, otherwise `boot dev/build/serve` may not working as expected'
          )
        }
      }

      signale.info('valid tsconfig.json found, do nothing for it')
    } else {
      signale.warn('tsconfig.json not found, will be created')
      copyFileSync(resolve(__dirname, 'tsconfig.json.vm'), userProvidedTsConfigPath)
      signale.success('tsconfig.json generated')
    }

    try {
      require('../../../build/generator')
    } catch (error) {
      console.log(error)
    }
  }
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
