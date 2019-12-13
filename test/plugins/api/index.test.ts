import { resolve } from 'path'
import { getProjectBaseRoot } from '@/src/core/env'
import { PluginOrderEnum } from '@/src/core/plugin/pluginType'

describe('env check', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  it('plugin order check', () => {
    const api = require('@/src/plugins/api')

    expect(api.default().order).toBe(PluginOrderEnum.API_INIT)
  })

  it('default value without api defined check', () => {
    const api = require('@/src/plugins/api')
    const plugin = api.default()
    const val = plugin.configHandler({})
    expect(val.api.scanDir).toBe(resolve(getProjectBaseRoot(), 'controllers'))
    expect(val.api.prefix).toBe('/apis')
    expect(val.api.successResponseResolver('hello')).toStrictEqual({
      code: 200,
      data: 'hello'
    })
    expect(val.api.failureResponseResolver({ code: 300, message: 'error' })).toStrictEqual({
      code: 300,
      message: 'error'
    })
    expect(val.api.rateLimit).toBeFalsy()
  })

  it('default value with api disable check', () => {
    const api = require('@/src/plugins/api')
    const plugin = api.default()
    const val = plugin.configHandler({
      api: false
    })
    expect(val.api).toBeFalsy()
  })

  it('default value with scanDir check', () => {
    const api = require('@/src/plugins/api')
    const plugin = api.default()
    const val = plugin.configHandler({
      api: {
        scanDir: '/a/b/c'
      }
    })
    expect(val.api.scanDir).toBe('/a/b/c')
    expect(val.api.prefix).toBe('/apis')
    expect(val.api.successResponseResolver('hello')).toStrictEqual({
      code: 200,
      data: 'hello'
    })
    expect(val.api.failureResponseResolver({ code: 300, message: 'error' })).toStrictEqual({
      code: 300,
      message: 'error'
    })
    expect(val.api.rateLimit).toBeFalsy()
  })

  it('default value with prefix check', () => {
    const api = require('@/src/plugins/api')
    const plugin = api.default()
    const val = plugin.configHandler({
      api: {
        prefix: '/hi'
      }
    })
    expect(val.api.scanDir).toBe(resolve(getProjectBaseRoot(), 'controllers'))
    expect(val.api.prefix).toBe('/hi')
    expect(val.api.successResponseResolver('hello')).toStrictEqual({
      code: 200,
      data: 'hello'
    })
    expect(val.api.failureResponseResolver({ code: 300, message: 'error' })).toStrictEqual({
      code: 300,
      message: 'error'
    })
    expect(val.api.rateLimit).toBeFalsy()
  })

  it('default value with successResponseResolver check', () => {
    const api = require('@/src/plugins/api')
    const plugin = api.default()
    const val = plugin.configHandler({
      api: {
        successResponseResolver: (data: any) => data
      }
    })
    expect(val.api.scanDir).toBe(resolve(getProjectBaseRoot(), 'controllers'))
    expect(val.api.prefix).toBe('/apis')
    expect(val.api.successResponseResolver('hello')).toBe('hello')
    expect(val.api.failureResponseResolver({ code: 300, message: 'error' })).toStrictEqual({
      code: 300,
      message: 'error'
    })
    expect(val.api.rateLimit).toBeFalsy()
  })

  it('default value with default failureResponseResolver check', () => {
    const api = require('@/src/plugins/api')
    const plugin = api.default()
    const val = plugin.configHandler({
      api: {}
    })
    expect(val.api.scanDir).toBe(resolve(getProjectBaseRoot(), 'controllers'))
    expect(val.api.prefix).toBe('/apis')
    expect(val.api.successResponseResolver('hello')).toStrictEqual({
      code: 200,
      data: 'hello'
    })
    expect(val.api.failureResponseResolver({ code: 300 })).toStrictEqual({
      code: 300,
      message: 'Internal error'
    })
    expect(val.api.rateLimit).toBeFalsy()
  })

  it('default value with failureResponseResolver check', () => {
    const api = require('@/src/plugins/api')
    const plugin = api.default()
    const val = plugin.configHandler({
      api: {
        failureResponseResolver: (data: any) => data
      }
    })
    expect(val.api.scanDir).toBe(resolve(getProjectBaseRoot(), 'controllers'))
    expect(val.api.prefix).toBe('/apis')
    expect(val.api.successResponseResolver('hello')).toStrictEqual({
      code: 200,
      data: 'hello'
    })
    expect(val.api.failureResponseResolver('error')).toBe('error')
    expect(val.api.rateLimit).toBeFalsy()
  })

  it('default value with rateLimit = false check', () => {
    const api = require('@/src/plugins/api')
    const plugin = api.default()
    const val = plugin.configHandler({
      api: {
        rateLimit: false
      }
    })
    expect(val.api.scanDir).toBe(resolve(getProjectBaseRoot(), 'controllers'))
    expect(val.api.prefix).toBe('/apis')
    expect(val.api.successResponseResolver('hello')).toStrictEqual({
      code: 200,
      data: 'hello'
    })
    expect(val.api.failureResponseResolver({ code: 300, message: 'error' })).toStrictEqual({
      code: 300,
      message: 'error'
    })
    expect(val.api.rateLimit).toBeFalsy()
  })

  it('default value with rateLimit with default value check', () => {
    const api = require('@/src/plugins/api')
    const plugin = api.default()
    const val = plugin.configHandler({
      api: {
        rateLimit: {}
      }
    })
    expect(val.api.scanDir).toBe(resolve(getProjectBaseRoot(), 'controllers'))
    expect(val.api.prefix).toBe('/apis')
    expect(val.api.successResponseResolver('hello')).toStrictEqual({
      code: 200,
      data: 'hello'
    })
    expect(val.api.failureResponseResolver({ code: 300, message: 'error' })).toStrictEqual({
      code: 300,
      message: 'error'
    })
    expect(val.api.rateLimit.max).toBe(5)
    expect(val.api.rateLimit.windowMs).toBe(60000)
    expect(val.api.rateLimit.message).toBe('Too many requests, please try again later')
    expect(val.api.rateLimit.statusCode).toBe(429)
    expect(val.api.rateLimit.headers).toBeFalsy()
    expect(val.api.rateLimit.keyGenerator({ ip: '0.0.0.0', originalUrl: '/a/b/c' })).toBe('0.0.0.0/a/b/c')
    expect(val.api.rateLimit.skip()).toBeFalsy()
    expect(val.api.rateLimit.store).toBeUndefined()
  })

  it('default value with rateLimit with max value check', () => {
    const api = require('@/src/plugins/api')
    const plugin = api.default()
    const val = plugin.configHandler({
      api: {
        rateLimit: { max: 10 }
      }
    })
    expect(val.api.scanDir).toBe(resolve(getProjectBaseRoot(), 'controllers'))
    expect(val.api.prefix).toBe('/apis')
    expect(val.api.successResponseResolver('hello')).toStrictEqual({
      code: 200,
      data: 'hello'
    })
    expect(val.api.failureResponseResolver({ code: 300, message: 'error' })).toStrictEqual({
      code: 300,
      message: 'error'
    })
    expect(val.api.rateLimit.max).toBe(10)
    expect(val.api.rateLimit.windowMs).toBe(60000)
    expect(val.api.rateLimit.message).toBe('Too many requests, please try again later')
    expect(val.api.rateLimit.statusCode).toBe(429)
    expect(val.api.rateLimit.headers).toBeFalsy()
    expect(val.api.rateLimit.keyGenerator({ ip: '0.0.0.0', originalUrl: '/a/b/c' })).toBe('0.0.0.0/a/b/c')
    expect(val.api.rateLimit.skip()).toBeFalsy()
    expect(val.api.rateLimit.store).toBeUndefined()
  })

  it('default value with rateLimit with windowMs value check', () => {
    const api = require('@/src/plugins/api')
    const plugin = api.default()
    const val = plugin.configHandler({
      api: {
        rateLimit: { windowMs: 10000 }
      }
    })
    expect(val.api.scanDir).toBe(resolve(getProjectBaseRoot(), 'controllers'))
    expect(val.api.prefix).toBe('/apis')
    expect(val.api.successResponseResolver('hello')).toStrictEqual({
      code: 200,
      data: 'hello'
    })
    expect(val.api.failureResponseResolver({ code: 300, message: 'error' })).toStrictEqual({
      code: 300,
      message: 'error'
    })
    expect(val.api.rateLimit.max).toBe(5)
    expect(val.api.rateLimit.windowMs).toBe(10000)
    expect(val.api.rateLimit.message).toBe('Too many requests, please try again later')
    expect(val.api.rateLimit.statusCode).toBe(429)
    expect(val.api.rateLimit.headers).toBeFalsy()
    expect(val.api.rateLimit.keyGenerator({ ip: '0.0.0.0', originalUrl: '/a/b/c' })).toBe('0.0.0.0/a/b/c')
    expect(val.api.rateLimit.skip()).toBeFalsy()
    expect(val.api.rateLimit.store).toBeUndefined()
  })

  it('default value with rateLimit with message value check', () => {
    const api = require('@/src/plugins/api')
    const plugin = api.default()
    const val = plugin.configHandler({
      api: {
        rateLimit: { message: 'hello' }
      }
    })
    expect(val.api.scanDir).toBe(resolve(getProjectBaseRoot(), 'controllers'))
    expect(val.api.prefix).toBe('/apis')
    expect(val.api.successResponseResolver('hello')).toStrictEqual({
      code: 200,
      data: 'hello'
    })
    expect(val.api.failureResponseResolver({ code: 300, message: 'error' })).toStrictEqual({
      code: 300,
      message: 'error'
    })
    expect(val.api.rateLimit.max).toBe(5)
    expect(val.api.rateLimit.windowMs).toBe(60000)
    expect(val.api.rateLimit.message).toBe('hello')
    expect(val.api.rateLimit.statusCode).toBe(429)
    expect(val.api.rateLimit.headers).toBeFalsy()
    expect(val.api.rateLimit.keyGenerator({ ip: '0.0.0.0', originalUrl: '/a/b/c' })).toBe('0.0.0.0/a/b/c')
    expect(val.api.rateLimit.skip()).toBeFalsy()
    expect(val.api.rateLimit.store).toBeUndefined()
  })

  it('default value with rateLimit with statusCode value check', () => {
    const api = require('@/src/plugins/api')
    const plugin = api.default()
    const val = plugin.configHandler({
      api: {
        rateLimit: { statusCode: 500 }
      }
    })
    expect(val.api.scanDir).toBe(resolve(getProjectBaseRoot(), 'controllers'))
    expect(val.api.prefix).toBe('/apis')
    expect(val.api.successResponseResolver('hello')).toStrictEqual({
      code: 200,
      data: 'hello'
    })
    expect(val.api.failureResponseResolver({ code: 300, message: 'error' })).toStrictEqual({
      code: 300,
      message: 'error'
    })
    expect(val.api.rateLimit.max).toBe(5)
    expect(val.api.rateLimit.windowMs).toBe(60000)
    expect(val.api.rateLimit.message).toBe('Too many requests, please try again later')
    expect(val.api.rateLimit.statusCode).toBe(500)
    expect(val.api.rateLimit.headers).toBeFalsy()
    expect(val.api.rateLimit.keyGenerator({ ip: '0.0.0.0', originalUrl: '/a/b/c' })).toBe('0.0.0.0/a/b/c')
    expect(val.api.rateLimit.skip()).toBeFalsy()
    expect(val.api.rateLimit.store).toBeUndefined()
  })

  it('default value with rateLimit with headers value check', () => {
    const api = require('@/src/plugins/api')
    const plugin = api.default()
    const val = plugin.configHandler({
      api: {
        rateLimit: { headers: true }
      }
    })
    expect(val.api.scanDir).toBe(resolve(getProjectBaseRoot(), 'controllers'))
    expect(val.api.prefix).toBe('/apis')
    expect(val.api.successResponseResolver('hello')).toStrictEqual({
      code: 200,
      data: 'hello'
    })
    expect(val.api.failureResponseResolver({ code: 300, message: 'error' })).toStrictEqual({
      code: 300,
      message: 'error'
    })
    expect(val.api.rateLimit.max).toBe(5)
    expect(val.api.rateLimit.windowMs).toBe(60000)
    expect(val.api.rateLimit.message).toBe('Too many requests, please try again later')
    expect(val.api.rateLimit.statusCode).toBe(429)
    expect(val.api.rateLimit.headers).toBeTruthy()
    expect(val.api.rateLimit.keyGenerator({ ip: '0.0.0.0', originalUrl: '/a/b/c' })).toBe('0.0.0.0/a/b/c')
    expect(val.api.rateLimit.skip()).toBeFalsy()
    expect(val.api.rateLimit.store).toBeUndefined()
  })

  it('default value with rateLimit with keyGenerator value check', () => {
    const api = require('@/src/plugins/api')
    const plugin = api.default()
    const val = plugin.configHandler({
      api: {
        rateLimit: { keyGenerator: (req: any) => req.ip }
      }
    })
    expect(val.api.scanDir).toBe(resolve(getProjectBaseRoot(), 'controllers'))
    expect(val.api.prefix).toBe('/apis')
    expect(val.api.successResponseResolver('hello')).toStrictEqual({
      code: 200,
      data: 'hello'
    })
    expect(val.api.failureResponseResolver({ code: 300, message: 'error' })).toStrictEqual({
      code: 300,
      message: 'error'
    })
    expect(val.api.rateLimit.max).toBe(5)
    expect(val.api.rateLimit.windowMs).toBe(60000)
    expect(val.api.rateLimit.message).toBe('Too many requests, please try again later')
    expect(val.api.rateLimit.statusCode).toBe(429)
    expect(val.api.rateLimit.headers).toBeFalsy()
    expect(val.api.rateLimit.keyGenerator({ ip: '0.0.0.0', originalUrl: '/a/b/c' })).toBe('0.0.0.0')
    expect(val.api.rateLimit.skip()).toBeFalsy()
    expect(val.api.rateLimit.store).toBeUndefined()
  })

  it('default value with rateLimit with skip value check', () => {
    const api = require('@/src/plugins/api')
    const plugin = api.default()
    const val = plugin.configHandler({
      api: {
        rateLimit: { skip: (req: any) => true }
      }
    })
    expect(val.api.scanDir).toBe(resolve(getProjectBaseRoot(), 'controllers'))
    expect(val.api.prefix).toBe('/apis')
    expect(val.api.successResponseResolver('hello')).toStrictEqual({
      code: 200,
      data: 'hello'
    })
    expect(val.api.failureResponseResolver({ code: 300, message: 'error' })).toStrictEqual({
      code: 300,
      message: 'error'
    })
    expect(val.api.rateLimit.max).toBe(5)
    expect(val.api.rateLimit.windowMs).toBe(60000)
    expect(val.api.rateLimit.message).toBe('Too many requests, please try again later')
    expect(val.api.rateLimit.statusCode).toBe(429)
    expect(val.api.rateLimit.headers).toBeFalsy()
    expect(val.api.rateLimit.keyGenerator({ ip: '0.0.0.0', originalUrl: '/a/b/c' })).toBe('0.0.0.0/a/b/c')
    expect(val.api.rateLimit.skip()).toBeTruthy()
    expect(val.api.rateLimit.store).toBeUndefined()
  })

  it('default value with rateLimit with store value check', () => {
    const api = require('@/src/plugins/api')
    const plugin = api.default()
    const val = plugin.configHandler({
      api: {
        rateLimit: { store: { name: 'hello' } }
      }
    })
    expect(val.api.scanDir).toBe(resolve(getProjectBaseRoot(), 'controllers'))
    expect(val.api.prefix).toBe('/apis')
    expect(val.api.successResponseResolver('hello')).toStrictEqual({
      code: 200,
      data: 'hello'
    })
    expect(val.api.failureResponseResolver({ code: 300, message: 'error' })).toStrictEqual({
      code: 300,
      message: 'error'
    })
    expect(val.api.rateLimit.max).toBe(5)
    expect(val.api.rateLimit.windowMs).toBe(60000)
    expect(val.api.rateLimit.message).toBe('Too many requests, please try again later')
    expect(val.api.rateLimit.statusCode).toBe(429)
    expect(val.api.rateLimit.headers).toBeFalsy()
    expect(val.api.rateLimit.keyGenerator({ ip: '0.0.0.0', originalUrl: '/a/b/c' })).toBe('0.0.0.0/a/b/c')
    expect(val.api.rateLimit.skip()).toBeFalsy()
    expect(val.api.rateLimit.store).toStrictEqual({ name: 'hello' })
  })

  it('pluginHandler api disable check', () => {
    const api = require('@/src/plugins/api')
    const plugin = api.default()

    const appUse = jest.fn()

    const val = plugin.pluginHandler(
      {
        use: appUse
      },
      {
        api: false
      }
    )

    expect(val).toBeUndefined()
  })

  it('pluginHandler api enable check', () => {
    jest.mock('express-rate-limit')
    const rateLimit = require('express-rate-limit')
    const glob = require('glob')

    const mockLimiter = { name: 'hello' }
    rateLimit.mockImplementation(() => mockLimiter)

    const mockSync = jest.spyOn(glob, 'sync')

    mockSync.mockReturnValue([])

    const api = require('@/src/plugins/api')

    const plugin = api.default()

    const appUse = jest.fn()

    plugin.pluginHandler(
      {
        use: appUse
      },
      {
        api: {
          rateLimit: 'mock'
        }
      }
    )

    expect(appUse).toBeCalledWith(mockLimiter)
  })

  it('pluginHandler api enable NODE_ENV = development check', () => {
    const env = process.env.NODE_ENV
    process.env.NODE_ENV = 'development'

    const glob = require('glob')

    const mockSync = jest.spyOn(glob, 'sync')

    mockSync.mockReturnValue([])

    const api = require('@/src/plugins/api')

    const plugin = api.default()

    const appUse = jest.fn()

    plugin.pluginHandler(
      {
        use: appUse
      },
      {
        api: {
          rateLimit: 'mock'
        }
      }
    )

    expect(mockSync).toBeCalledWith('**/*.ts', expect.anything())

    process.env.NODE_ENV = env
  })
})
