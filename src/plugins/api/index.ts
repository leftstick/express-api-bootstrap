import express from 'express'
import { isEmpty, isNotEmpty } from '@/src/core/helper/object'
import { PluginOrderEnum, InternalPluginOrderEnum } from '@/src/core/env/lifecycle'
import { IPluginType } from '@/src/plugins/api/type'
import { IPlugin } from '@/src/plugins/plugin'

const defaultSuccessResponseResolver = (data: any) => {
  return {
    code: 200,
    data
  }
}

const defaultFailureResponseResolver = (code: number, message?: string) => {
  return {
    code,
    message
  }
}

export default () => {
  return <IPlugin>{
    namespace: 'api',
    order: PluginOrderEnum.API_INIT,
    configHandler(config: IPluginType): IPluginType {
      if (isEmpty(config) || isEmpty(config.api)) {
        return {
          api: {
            prefix: '/apis',
            successResponseResolver: defaultSuccessResponseResolver,
            failureResponseResolver: defaultFailureResponseResolver
          }
        }
      }

      const conf: IPluginType = {
        api: {
          prefix: '/apis',
          successResponseResolver: defaultSuccessResponseResolver,
          failureResponseResolver: defaultFailureResponseResolver
        }
      }

      if (isNotEmpty(config.api.prefix) && isNotEmpty(conf.api)) {
        conf.api.prefix = config.api.prefix
      }

      if (isNotEmpty(config.api.successResponseResolver) && isNotEmpty(conf.api)) {
        conf.api.successResponseResolver = config.api.successResponseResolver
      }
      if (isNotEmpty(config.api.failureResponseResolver) && isNotEmpty(conf.api)) {
        conf.api.failureResponseResolver = config.api.failureResponseResolver
      }

      return conf
    },
    pluginHandler(app: express.Express, config: IPluginType) {}
  }
}
