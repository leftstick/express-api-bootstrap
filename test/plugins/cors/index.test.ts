import { InternalPluginOrderEnum } from '@/src/core/plugin/pluginType'

describe('cors check', () => {
  it('plugin order check', () => {
    const cors = require('@/src/plugins/cors')

    expect(cors.default().order).toBe(InternalPluginOrderEnum.FIRST_STAGE)
  })

  it('plugin no config check', () => {
    const cors = require('@/src/plugins/cors')
    const plugin = cors.default()

    const val = plugin.configHandler({})

    expect(val).toStrictEqual({ cors: true })
  })

  it('plugin with value check', () => {
    const cors = require('@/src/plugins/cors')
    const plugin = cors.default()

    const val = plugin.configHandler({ cors: false })

    expect(val).toStrictEqual({ cors: false })
  })

  it('pluginHandler cors disable check', () => {
    const cors = require('@/src/plugins/cors')
    const plugin = cors.default()

    const mockUse = jest.fn()

    const mockExpressApp = {
      use: mockUse
    }

    plugin.pluginHandler(mockExpressApp, { cors: false })

    expect(mockUse).not.toBeCalled()
  })

  it('pluginHandler enable with no Origin check', done => {
    const cors = require('@/src/plugins/cors')
    const plugin = cors.default()

    const mockRequestGet = jest.fn(() => undefined)
    const mockResponseSet = jest.fn()
    const mockNext = jest.fn()
    const mockRequest = {
      get: mockRequestGet
    }
    const mockResponse = {
      set: mockResponseSet
    }

    const mockUse = jest.fn((path: string, cb: any) => {
      setTimeout(() => {
        cb(mockRequest, mockResponse, mockNext)
      })
    })

    const mockExpressApp = {
      use: mockUse
    }

    plugin.pluginHandler(mockExpressApp, { cors: true })

    setTimeout(() => {
      expect(mockResponseSet).not.toBeCalled()
      expect(mockNext).toBeCalled()
      done()
    }, 100)
  })

  it('pluginHandler enable with proper header set check', done => {
    const cors = require('@/src/plugins/cors')
    const plugin = cors.default()

    const mockRequestGet = jest.fn(() => 'origin')
    const mockRequest = {
      get: mockRequestGet,
      method: 'GET',
      headers: {
        origin: 'origin'
      }
    }
    const mockResponseSet = jest.fn()
    const mockResponse = {
      set: mockResponseSet
    }
    const mockNext = jest.fn()

    const mockUse = jest.fn((path: string, cb: any) => {
      setTimeout(() => {
        cb(mockRequest, mockResponse, mockNext)
      })
    })

    const mockExpressApp = {
      use: mockUse
    }

    plugin.pluginHandler(mockExpressApp, { cors: true })

    setTimeout(() => {
      expect(mockUse).toBeCalled()
      expect(mockResponseSet).toBeCalledWith(
        'Access-Control-Allow-Methods',
        'POST, GET, OPTIONS, PATCH, PUT, HEAD, TRACE, DELETE'
      )
      expect(mockNext).toBeCalledTimes(1)
      done()
    }, 100)
  })

  it('pluginHandler enable with OPTIONS method check', done => {
    const cors = require('@/src/plugins/cors')
    const plugin = cors.default()

    const mockRequestGet = jest.fn(() => 'origin')
    const mockRequest = {
      get: mockRequestGet,
      method: 'OPTIONS',
      headers: {
        origin: 'origin'
      }
    }
    const mockResponseSet = jest.fn()
    const mockResponseEnd = jest.fn()
    const mockResponseStatus = jest.fn(() => ({ end: mockResponseEnd }))
    const mockResponse = {
      set: mockResponseSet,
      status: mockResponseStatus
    }
    const mockNext = jest.fn()

    const mockUse = jest.fn((path: string, cb: any) => {
      setTimeout(() => {
        cb(mockRequest, mockResponse, mockNext)
      })
    })

    const mockExpressApp = {
      use: mockUse
    }

    plugin.pluginHandler(mockExpressApp, { cors: true })

    setTimeout(() => {
      expect(mockUse).toBeCalled()
      expect(mockResponseSet).toBeCalledWith(
        'Access-Control-Allow-Methods',
        'POST, GET, OPTIONS, PATCH, PUT, HEAD, TRACE, DELETE'
      )
      expect(mockResponseStatus).toBeCalledWith(200)
      expect(mockResponseEnd).toBeCalled()
      expect(mockNext).not.toBeCalledTimes(1)
      done()
    }, 100)
  })
})
