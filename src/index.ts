import express from 'express'
import { Service, Container, Token, Inject } from 'typedi'
import { pluginRunner } from '@/src/core/plugin'
import { IPlugin, IPluginFactory, PluginOrderEnum } from '@/src/core/plugin/pluginType'
import {
  RestController,
  GetMapping,
  PostMapping,
  DeleteMapping,
  UpdateMapping,
  PatchMapping,
  RequestQuery,
  RequestBody,
  RequestPathVariable,
  Request,
  Response,
  setExpressApp,
  ExpressToken
} from '@/src/plugins/api/rest'
import { ProcessSingle } from '@/src/core/env'

export { Service, Container, Token, Inject }
export { IPlugin, IPluginFactory, PluginOrderEnum }
export {
  RestController,
  GetMapping,
  PostMapping,
  DeleteMapping,
  UpdateMapping,
  PatchMapping,
  RequestQuery,
  RequestBody,
  RequestPathVariable,
  Request,
  Response
}

export type HttpRequest = express.Request
export type HttpResponse = express.Response
export type Express = express.Express

export const ___internal = {
  pluginRunner,
  setExpressApp,
  ExpressToken,
  ProcessSingle
}
