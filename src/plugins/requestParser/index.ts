import express from 'express'
import { isEmpty, isNotEmpty } from '@/src/core/helper/object'
import { PluginOrderEnum, IPlugin } from '@/src/core/plugin/pluginType'
import { IPluginType, IParsers } from '@/src/plugins/requestParser/type'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

export default () => {
  return <IPlugin>{
    order: PluginOrderEnum.BEFORE_API_INIT,
    configHandler(config: IPluginType): IPluginType {
      const opts = {
        config(app: express.Express, parsers: IParsers) {
          app.use(parsers.bodyParser.json())
          app.use(parsers.cookieParser())
        }
      }

      if (isEmpty(config.requestParser)) {
        return {
          requestParser: opts
        }
      }

      if (config.requestParser == false) {
        return {
          requestParser: false
        }
      }

      if (isNotEmpty(config.requestParser.config)) {
        opts.config = config.requestParser.config
      }

      return {
        requestParser: opts
      }
    },
    pluginHandler(app: express.Express, config: IPluginType) {
      if (config.requestParser === false) {
        return
      }
      config.requestParser.config(app, {
        bodyParser,
        cookieParser
      })
    }
  }
}
