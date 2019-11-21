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
      const compareResult = diff.diff(userProvidedTsConfig, requiredTsConfig)
      if (compareResult) {
        signale.warn('tsconfig.json you provided has something different as it should be, see blow:')
        const outputText = JSON.stringify(compareResult, null, 2)
          .replace(/__old/g, 'yours')
          .replace(/__new/g, 'should be')
        console.log(outputText)
        return signale.warn('you have to change it first, otherwise `boot dev/build/serve` may not working as expected')
      }

      signale.info('tsconfig.json found, nothing proceeded')
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
