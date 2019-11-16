import express from 'express'
import { PluginOrderEnum } from '@/src/core/plugin/pluginType'
import { pluginRunner } from '@/src/core/plugin'
import { setExpressApp, ExpressToken } from '@/src/plugins/api/rest'

export { PluginOrderEnum }
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

export const ___internal = {
  pluginRunner,
  setExpressApp,
  ExpressToken
}
