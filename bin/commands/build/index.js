const signale = require('signale')
const ora = require('ora')
const del = require('del')
const spawn = require('child_process').spawn
const { resolve } = require('path')
const { existsSync } = require('fs')

module.exports = {
  cmd: 'build',
  description: 'Build source code',
  options: [],
  action() {
    const compiling = ora('Compiling source').start()
    const cwd = process.cwd()
    const distDir = resolve(cwd, 'dist')
    if (existsSync(distDir)) {
      del.sync(distDir)
    }
    const child = spawn('npx', ['tsc', '-p', './tsconfig.json'], {
      cwd,
      stdio: 'inherit'
    })

    child.on('close', code => {
      if (code === 0) {
        return compiling.succeed('Source compiled at dist/')
      }
      compiling.fail(`Failed to compile source with exit code: ${code}`)
    })
  }
}
