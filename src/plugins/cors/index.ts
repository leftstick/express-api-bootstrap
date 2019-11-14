import express from 'express'
import { isEmpty } from '@/src/core/helper/object'
import { PluginOrderEnum } from '@/src/core/env/lifecycle'
import { IPluginType } from '@/src/plugins/cors/type'
import { IPlugin } from '@/src/plugins/plugin'

export default () => {
  return <IPlugin>{
    namespace: 'cors',
    order: PluginOrderEnum.BEFORE_API_INIT,
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
      app.use('*', (req: express.Request, res: express.Response, next: Function) => {
        if (!req.get('Origin')) {
          return next()
        }
        res.set('Access-Control-Allow-Origin', req.headers.origin)
        res.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PATCH, PUT, HEAD, TRACE, DELETE')
        res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Range')
        res.set('Access-Control-Allow-Credentials', 'true')
        if ('OPTIONS' === req.method) {
          return res.status(200).end()
        }
        return next()
      })
    }
  }
}
