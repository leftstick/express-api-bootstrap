import express from 'express'

import { pluginRunner } from '@/src/plugins'

const app = express()

pluginRunner
  .beforeApiInit(app)
  .then(() => {
    return pluginRunner.apiInit(app)
  })
  .then(() => {
    return pluginRunner.afterApiInit(app)
  })
  .then(() => {
    pluginRunner.lastStage(app)
  })
