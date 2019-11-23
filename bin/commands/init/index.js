const signale = require('signale')

const { diffTsConfig, copyTsConfig } = require('../../helper/tsconfigTool')

module.exports = {
  cmd: 'init',
  description: 'Init repo with required stuff',
  options: [],
  action() {
    const compareResult = diffTsConfig()
    if ('NO_TSCONFIG_PROVIDED' === compareResult) {
      signale.warn('tsconfig.json not found, will be created')
      copyTsConfig(userProvidedTsConfigPath)
      signale.success('tsconfig.json generated')
    } else if (compareResult) {
      signale.warn('tsconfig.json you provided has something different as it should be, see blow:')
      console.log(compareResult)
      return signale.warn(
        'you have to change it back first, otherwise `boot dev/build/serve` may not working as expected'
      )
    } else {
      signale.info('valid tsconfig.json found, do nothing for it')
    }

    try {
      require('../../../build/generator')
    } catch (error) {
      console.log(error)
    }
  }
}
