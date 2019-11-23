process.env.NODE_ENV = 'production'
const signale = require('signale')
const { resolve, join } = require('path')
const { existsSync } = require('fs')
const { Container } = require('typedi')
const express = require('express')
const { diffTsConfig } = require('../../helper/tsconfigTool')
const cwd = process.cwd()

module.exports = {
  cmd: 'serve',
  description: 'Launch server from generated code',
  options: [],
  action() {
    const compareResult = diffTsConfig()
    if ('NO_TSCONFIG_PROVIDED' === compareResult) {
      return signale.warn('tsconfig.json not found, use `boot init` first')
    } else if (compareResult) {
      signale.warn('tsconfig.json you provided has something different as it should be, see blow:')
      console.log(compareResult)
      return signale.warn(
        'you have to change it back first, otherwise `boot dev/build/serve` may not working as expected'
      )
    }
    require('reflect-metadata')
    require('../../../build/babel/registerBabel')({
      only: [
        filePath => {
          if (filePath === join(cwd, '.bootrc.ts')) {
            return true
          }
          if (filePath.startsWith(join(cwd, 'dist'))) {
            return true
          }
          return filePath.includes('express-api-bootstrap/types')
        }
      ]
    })
    const { ___internal } = require('../../../libs')

    const distDir = resolve(cwd, 'dist')
    if (!existsSync(distDir)) {
      return signale.error('dist not exist, please run `boot build` first')
    }

    const { pluginRunner, ExpressToken } = ___internal

    const app = express()

    Container.set(ExpressToken, app)

    pluginRunner
      .firstStage(app)
      .then(() => {
        return pluginRunner.beforeApiInit(app)
      })

      .then(() => {
        return pluginRunner.apiInit(app)
      })
      .then(() => {
        return pluginRunner.afterApiInit(app)
      })
      .then(() => {
        pluginRunner.lastStage(app)
      })
  }
}
