const signale = require('signale')
const del = require('del')
const exec = require('child_process').exec
const { resolve } = require('path')
const { existsSync, copyFileSync } = require('fs')

module.exports = {
  cmd: 'build',
  description: 'Build source code',
  action() {
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
      err => {
        if (err) {
          return signale.error(err)
        }
        signale.success('source compiled at dist/')
      }
    )
  }
}
