import express from 'express'
import { isEmpty } from '@/src/core/helper/object'
import { IPluginType } from '@/src/plugins/cors/type'
import { IPlugin, PluginOrderEnum } from '@/src/types/plugin'

export default <IPlugin>{
  order: PluginOrderEnum.BEFORE_API_INIT,
  configHandler(config: IPluginType): IPluginType {
    if (isEmpty(config) || isEmpty(config.cors)) {
      return {
        cors: {
          enable: true
        }
      }
    }

    return {
      cors: {
        enable: config.cors.enable
      }
    }
  },
  pluginHandler(app: express.Express, config: IPluginType) {
    if (isEmpty(config.cors) || isEmpty(config.cors.enable)) {
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
      if ('OPTIONS' === req.method) {
        return res.status(200).end()
      }
      return next()
    })
  }
}
