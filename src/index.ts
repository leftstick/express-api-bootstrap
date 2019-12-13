import express from 'express'
import { Service, Container, Token, Inject } from 'typedi'
import { PluginRunner } from '@/src/core/plugin'
import { IPlugin, IPluginFactory, PluginOrderEnum } from '@/src/core/plugin/pluginType'
import {
  RestController,
  GetMapping,
  PostMapping,
  DeleteMapping,
  PutMapping,
  PatchMapping,
  RequestQuery,
  RequestBody,
  RequestPathVariable,
  Request,
  Response,
  setExpressApp,
  ExpressToken
} from '@/src/plugins/api/rest'
import { BizError } from '@/src/plugins/api/type'
import { IParsers } from '@/src/plugins/requestParser/type'
import { ProcessSingle } from '@/src/core/env'

export { Service, Container, Token, Inject }
export { IPlugin, IPluginFactory, PluginOrderEnum, IParsers }
export {
  RestController,
  GetMapping,
  PostMapping,
  DeleteMapping,
  PutMapping,
  PatchMapping,
  RequestQuery,
  RequestBody,
  RequestPathVariable,
  Request,
  Response,
  BizError
}

export type HttpRequest = express.Request
export type HttpResponse = express.Response
export type Express = express.Express

export const ___internal = {
  PluginRunner,
  setExpressApp,
  ExpressToken,
  ProcessSingle
}
