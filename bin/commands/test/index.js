const signale = require('signale')
const exec = require('child_process').exec
const { resolve } = require('path')
const { existsSync, copyFileSync } = require('fs')

const cwd = process.cwd()

module.exports = {
  cmd: 'test [regexForTestFiles]',
  description: 'Execute unit tests in your test/ folder',
  options: [
    {
      flags: '--coverage',
      description: 'print code coverage',
      defaultValue: false
    }
  ],
  action(regexForTestFiles, cmd) {
    const testDir = resolve(cwd, 'test')
    if (!existsSync(testDir)) {
      return signale.warn('test folder not exist')
    }
    const userProvidedTsConfigPath = resolve(process.cwd(), 'tsconfig.json')

    if (!existsSync(userProvidedTsConfigPath)) {
      return signale.warn(
        'tsconfig.json not found, please run `boot init` first to have proper typescript config setup'
      )
    }
    const userProvidedJestConfig = resolve(process.cwd(), 'jest.config.js')

    if (!existsSync(userProvidedJestConfig)) {
      signale.warn('jest.config.js not found, will be created')
      copyFileSync(resolve(__dirname, 'jest.config.js.vm'), userProvidedJestConfig)
      signale.success('jest.config.js generated')
    }
    const childProcess = exec(`npx jest ${regexForTestFiles || ''} ${cmd.coverage ? '--coverage' : ''} --color`, {
      cwd
    })
    childProcess.stdout.pipe(process.stdin)
    childProcess.stderr.pipe(process.stdin)
  }
}
