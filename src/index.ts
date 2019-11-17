import express from 'express'
import { pluginRunner } from '@/src/core/plugin'
import { IPlugin, IPluginFactory, PluginOrderEnum } from '@/src/core/plugin/pluginType'
import { setExpressApp, ExpressToken } from '@/src/plugins/api/rest'

export { IPlugin, IPluginFactory, PluginOrderEnum }
export {
  RestController,
  GetMapping,
  PostMapping,
  DeleteMapping,
  UpdateMapping,
  PatchMapping,
  setExpressApp
} from '@/src/plugins/api/rest'

export type HttpRequest = express.Request
export type HttpResponse = express.Response
export type Express = express.Express

export const ___internal = {
  pluginRunner,
  setExpressApp,
  ExpressToken
}
