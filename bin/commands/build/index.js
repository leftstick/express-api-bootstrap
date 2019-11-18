const signale = require('signale')
const ora = require('ora')
const del = require('del')
const exec = require('child_process').exec
const { resolve } = require('path')
const { existsSync, copyFileSync } = require('fs')

module.exports = {
  cmd: 'build',
  description: 'Build source code',
  action() {
    const compiling = ora('Compiling source').start()
    const cwd = process.cwd()
    const distDir = resolve(cwd, 'dist')
    if (existsSync(distDir)) {
      del.sync(distDir)
    }
    exec(
      'npx tsc -p ./tsconfig.json',
      {
        cwd: process.cwd()
      },
      (err, stdout, sdterr) => {
        if (err) {
          return compiling.fail(stdout)
        }
        compiling.succeed('source compiled at dist/')
      }
    )
  }
}
