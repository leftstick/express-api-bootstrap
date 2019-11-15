import '@/src/core/env/registerBabelDev'
import { Container } from 'typedi'
import express from 'express'

import { pluginRunner } from '@/src/plugins'
import { ExpressToken } from '@/src/plugins/api/rest'

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
