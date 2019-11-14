import express from 'express'
import { Token, Service, Container } from 'typedi'
import { isPromise } from '@/src/core/helper/object'

export interface IRestController {}

export const ExpressToken = new Token<express.Express>('global.express')
export const RestControllerToken = new Token<IRestController>('controllers')

export function RestController() {
  return (target: any) => {
    return Service({ id: RestControllerToken, multiple: true })(target)
  }
}

export function GetMapping(path: string) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const app = Container.get(ExpressToken)
    app.get(path, (req: express.Request, res: express.Response) => {
      const result = target[propertyKey](req, res)
      if (isPromise(result)) {
        result.then(data => {
          res.json(data)
        })
        return
      }
      res.json()
    })
  }
}
