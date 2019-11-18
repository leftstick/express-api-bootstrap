import express from 'express'
import signale from 'signale'
import { Token, Service, Container } from 'typedi'
import { userConfig } from '@/src/core/plugin'
import { ProcessCtrl } from '@/src/core/env'
import { urlJoin, isEmpty } from '@/src/core/helper/object'

const PATH_SETS = {
  get: new Set(),
  post: new Set(),
  delete: new Set(),
  update: new Set(),
  patch: new Set()
}

const INSTANCES = new Map()

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
  // tslint:disable-next-line: no-function-expression
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    if (PATH_SETS[httpMethod].has(path)) {
      signale.error(`${httpMethod} ${path} was registered multiple times, please verify your code first`)
      ProcessCtrl.stop()
    }

    const app = Container.get(ExpressToken)
    const { successResponseResolver, failureResponseResolver, prefix } = userConfig.api

    app[httpMethod](urlJoin(prefix, path), async (req: express.Request, res: express.Response) => {
      try {
        let instance = INSTANCES.get(target)
        if (isEmpty(instance)) {
          instance = Container.getMany(RestControllerToken).find(c => Object.getPrototypeOf(c) === target)
          INSTANCES.set(target, instance)
        }

        const result = await instance[propertyKey](req, res)
        res.json(successResponseResolver(result))
      } catch (error) {
        signale.error(error)
        res.json(failureResponseResolver(error))
      }
    })
  }
}
