import express from 'express'
import { isEmpty, isNotEmpty } from '@/src/core/helper/object'
import { InternalPluginOrderEnum, IPlugin } from '@/src/core/plugin/pluginType'
import { IPluginType } from '@/src/plugins/cors/type'

export default () => {
  return <IPlugin>{
    order: InternalPluginOrderEnum.FIRST_STAGE,
    configHandler(config: IPluginType): IPluginType {
      if (isEmpty(config) || isEmpty(config.cors)) {
        return {
          cors: true
        }
      }

      return {
        cors: config.cors
      }
    },
    pluginHandler(app: express.Express, config: IPluginType) {
      if (isNotEmpty(config) && !config.cors) {
        return
      }

      app.use('*', (req: express.Request, res: express.Response, next: Function) => {
        if (!req.get('Origin')) {
          return next()
        }
        res.set('Access-Control-Allow-Origin', req.headers.origin)
        res.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PATCH, PUT, HEAD, TRACE, DELETE')
        res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Range')
        res.set('Access-Control-Allow-Credentials', 'true')
        if ('OPTIONS' === req.method.toUpperCase()) {
          return res.status(200).end()
        }
        return next()
      })
    }
  }
}
