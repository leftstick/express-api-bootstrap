const signale = require('signale')
const { resolve } = require('path')
const { existsSync, copyFileSync } = require('fs')

module.exports = {
  cmd: 'init',
  description: 'Init repo with required stuff',
  action() {
    const tsConfigPath = resolve(process.cwd(), 'tsconfig.json')
    if (existsSync(tsConfigPath)) {
      return signale.info('tsconfig.json found, nothing proceeded')
    }

    signale.warn('tsconfig.json not found, will be created')
    copyFileSync(resolve(__dirname, 'tsconfig.json.vm'), tsConfigPath)
    signale.success('tsconfig.json generated')
  }
}
