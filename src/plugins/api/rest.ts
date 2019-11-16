import express from 'express'
import signale from 'signale'
import { Token, Service, Container } from 'typedi'
import { userConfig } from '@/src/core/plugin'

const PATH_SETS = {
  get: new Set(),
  post: new Set(),
  delete: new Set(),
  update: new Set(),
  patch: new Set()
}

export interface IRestController {}

export const ExpressToken = new Token<express.Express>('global.express')
export const RestControllerToken = new Token<IRestController>('controllers')

export function setExpressApp(app: express.Express) {
  Container.set(ExpressToken, app)
}

export function RestController() {
  return (target: any) => {
    return Service({ id: RestControllerToken, multiple: true })(target)
  }
}

export function GetMapping(path: string) {
  return execMapping(path, 'get')
}

export function PostMapping(path: string) {
  return execMapping(path, 'post')
}

export function DeleteMapping(path: string) {
  return execMapping(path, 'delete')
}

export function UpdateMapping(path: string) {
  return execMapping(path, 'update')
}

export function PatchMapping(path: string) {
  return execMapping(path, 'patch')
}

type HTTP_METHOD = 'get' | 'post' | 'delete' | 'update' | 'patch'

function execMapping(path: string, httpMethod: HTTP_METHOD) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    if (PATH_SETS[httpMethod].has(path)) {
      signale.error(`${httpMethod} ${path} was registered multiple times, please verify your code first`)
    }

    const app = Container.get(ExpressToken)
    app[httpMethod](path, async (req: express.Request, res: express.Response) => {
      const { successResponseResolver, failureResponseResolver } = userConfig.api

      try {
        const result = await target[propertyKey](req, res)
        res.json(successResponseResolver(result))
      } catch (error) {
        res.json(failureResponseResolver(error))
      }
    })
  }
}
