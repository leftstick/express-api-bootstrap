import express from 'express'
export { PluginOrderEnum } from '@/src/core/env/lifecycle'
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
