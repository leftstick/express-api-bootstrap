import { PluginOrderEnum } from '@/src/core/plugin/pluginType'

describe('requestParser check', () => {
  it('plugin order check', () => {
    const parser = require('@/src/plugins/requestParser')
    const plugin = parser.default()

    expect(plugin.order).toBe(PluginOrderEnum.BEFORE_API_INIT)
  })

  it('requestParser no config check', () => {
    const parser = require('@/src/plugins/requestParser')
    const plugin = parser.default()

    const val = plugin.configHandler({})

    const mockExpressUse = jest.fn()
    const mockExpressApp = {
      use: mockExpressUse
    }
    const mockJsonParser = jest.fn()
    const mockCookieParser = jest.fn()

    val.requestParser.config(mockExpressApp, { bodyParser: { json: mockJsonParser }, cookieParser: mockCookieParser })

    expect(mockExpressUse).toBeCalledTimes(2)
    expect(mockJsonParser).toBeCalledTimes(1)
    expect(mockCookieParser).toBeCalledTimes(1)
  })

  it('requestParser disable check', () => {
    const parser = require('@/src/plugins/requestParser')
    const plugin = parser.default()

    const mockExpressApp = {}

    const val = plugin.configHandler({ requestParser: false })
    const result = plugin.pluginHandler(mockExpressApp, { requestParser: false })

    expect(val.requestParser).toBeFalsy()
    expect(result).toBeUndefined()
  })

  it('requestParser enable check', () => {
    const parser = require('@/src/plugins/requestParser')
    const plugin = parser.default()

    const mockConfig = jest.fn()

    const val = plugin.configHandler({
      requestParser: {
        config: mockConfig
      }
    })

    expect(val.requestParser.config).toBe(mockConfig)
  })

  it('requestParser enable without config check', () => {
    const parser = require('@/src/plugins/requestParser')
    const plugin = parser.default()

    const val = plugin.configHandler({
      requestParser: {}
    })
    const mockExpressUse = jest.fn()
    const mockExpressApp = {
      use: mockExpressUse
    }
    const mockJsonParser = jest.fn()
    const mockCookieParser = jest.fn()

    val.requestParser.config(mockExpressApp, { bodyParser: { json: mockJsonParser }, cookieParser: mockCookieParser })

    expect(mockExpressUse).toBeCalledTimes(2)
    expect(mockJsonParser).toBeCalledTimes(1)
    expect(mockCookieParser).toBeCalledTimes(1)
  })
})
