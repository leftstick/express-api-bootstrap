process.env.NODE_ENV = 'production'
const signale = require('signale')
const { resolve, join } = require('path')
const { existsSync } = require('fs')
const { Container } = require('typedi')
const express = require('express')
const cwd = process.cwd()

module.exports = {
  cmd: 'serve',
  description: 'Launch server from generated code',
  options: [],
  action() {
    if (!existsSync(resolve(cwd, 'tsconfig.json'))) {
      return signale.error("tsconfig.json doesn't exist, please use `boot init` first")
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
