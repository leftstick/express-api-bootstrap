import express from 'express'
import rateLimit from 'express-rate-limit'
import glob from 'glob'
import { resolve } from 'path'
import { isEmpty, isNotEmpty } from '@/src/core/helper/object'
import { PluginOrderEnum, IPlugin } from '@/src/core/plugin/pluginType'
import { getProjectBaseRoot } from '@/src/core/env'
import { IPluginType, IRateLimitConfig, IApiConfig } from '@/src/plugins/api/type'
import { BizError } from '@/src/plugins/api/type'

const defaultSuccessResponseResolver = (data: any) => {
  return {
    code: 200,
    data
  }
}

const defaultFailureResponseResolver = (error: BizError) => {
  return {
    code: error.code,
    message: error.message || 'Internal error'
  }
}

export default () => {
  return <IPlugin>{
    order: PluginOrderEnum.API_INIT,
    configHandler(config: IPluginType): IPluginType {
      const conf = {
        api: <IApiConfig>{
          scanDir: resolve(getProjectBaseRoot(), 'controllers'),
          prefix: '/apis',
          successResponseResolver: defaultSuccessResponseResolver,
          failureResponseResolver: defaultFailureResponseResolver,
          rateLimit: false
        }
      }

      if (isEmpty(config) || isEmpty(config.api)) {
        return <IPluginType>conf
      }

      if (config.api === false) {
        return {
          api: false
        }
      }

      if (isNotEmpty(conf.api) && isNotEmpty(config.api.scanDir)) {
        conf.api.scanDir = config.api.scanDir
      }

      if (isNotEmpty(conf.api) && isNotEmpty(config.api.prefix)) {
        conf.api.prefix = config.api.prefix
      }

      if (isNotEmpty(conf.api) && isNotEmpty(config.api.successResponseResolver)) {
        conf.api.successResponseResolver = config.api.successResponseResolver
      }
      if (isNotEmpty(conf.api) && isNotEmpty(config.api.failureResponseResolver)) {
        conf.api.failureResponseResolver = config.api.failureResponseResolver
      }
      if (isNotEmpty(conf.api) && isNotEmpty(config.api.rateLimit) && config.api.rateLimit === false) {
        conf.api.rateLimit = false
      }
      if (isNotEmpty(conf.api) && isNotEmpty(config.api.rateLimit) && config.api.rateLimit !== false) {
        conf.api.rateLimit = <IRateLimitConfig>{
          max: 5,
          windowMs: 60000,
          message: 'Too many requests, please try again later',
          statusCode: 429,
          headers: false,
          keyGenerator: (req, res) => req.ip + req.originalUrl,
          skip: (req, res) => false,
          store: undefined
        }
        if (isNotEmpty(config.api.rateLimit.max)) {
          conf.api.rateLimit.max = config.api.rateLimit.max
        }
        if (isNotEmpty(config.api.rateLimit.windowMs)) {
          conf.api.rateLimit.windowMs = config.api.rateLimit.windowMs
        }
        if (isNotEmpty(config.api.rateLimit.message)) {
          conf.api.rateLimit.message = config.api.rateLimit.message
        }
        if (isNotEmpty(config.api.rateLimit.statusCode)) {
          conf.api.rateLimit.statusCode = config.api.rateLimit.statusCode
        }
        if (isNotEmpty(config.api.rateLimit.headers)) {
          conf.api.rateLimit.headers = config.api.rateLimit.headers
        }
        if (isNotEmpty(config.api.rateLimit.keyGenerator)) {
          conf.api.rateLimit.keyGenerator = config.api.rateLimit.keyGenerator
        }
        if (isNotEmpty(config.api.rateLimit.skip)) {
          conf.api.rateLimit.skip = config.api.rateLimit.skip
        }
        if (isNotEmpty(config.api.rateLimit.store)) {
          conf.api.rateLimit.store = config.api.rateLimit.store
        }
      }

      return <IPluginType>conf
    },
    pluginHandler(app: express.Express, config: IPluginType) {
      if (isEmpty(config.api) || config.api === false) {
        return
      }

      if (config.api.rateLimit) {
        const apiLimiter = rateLimit(<rateLimit.Options>config.api.rateLimit)
        app.use(apiLimiter)
      }

      const ext = process.env.NODE_ENV === 'development' ? '.ts' : '.js'
      const controllerFiles = glob.sync(`**/*${ext}`, {
        cwd: config.api.scanDir,
        absolute: true
      })
      return Promise.all(controllerFiles.map(f => import(f)))
    }
  }
}
