describe('rest check', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
    jest.resetModules()
  })

  it('setExpressApp check', () => {
    const { Container } = require('typedi')

    const mockContainerSet = jest.spyOn(Container, 'set')

    const rest = require('@/src/plugins/api/rest')

    const mockApp = { mock: true }
    rest.setExpressApp(mockApp)

    expect(mockContainerSet).toBeCalledWith(rest.ExpressToken, mockApp)
  })

  it('RestController check', () => {
    const di = require('typedi')

    const mockService = jest.spyOn(di, 'Service')

    const mockDecorator = jest.fn()
    mockService.mockReturnValue(mockDecorator)

    const rest = require('@/src/plugins/api/rest')

    const controller = rest.RestController()
    const mockTarget = { mock: true }

    controller(mockTarget)

    expect(mockService).toBeCalledWith({ id: rest.RestControllerToken, multiple: true })
    expect(mockDecorator).toBeCalledWith(mockTarget)
  })

  it('GetMapping path with successResolver check', done => {
    const di = require('typedi')
    const { PluginRunner } = require('@/src/core/plugin')

    const mockContainerGet = jest.spyOn(di.Container, 'get')
    const mockContainerGetMany = jest.spyOn(di.Container, 'getMany')
    const mockResponseJson = jest.fn()
    const mockExpressGetFunc = jest.fn((path: string, cb: any) => {
      setTimeout(() => {
        cb(
          {},
          {
            json: mockResponseJson
          }
        )
      })
    })
    const mockApp = {
      get: mockExpressGetFunc
    }
    mockContainerGet.mockReturnValue(mockApp)

    const mockTarget = { mock: true }
    const mockDescriptor = {}
    const mockControllerInstance = {
      testKey() {
        return 'result'
      }
    }
    Object.setPrototypeOf(mockControllerInstance, mockTarget)
    mockContainerGetMany.mockReturnValue([mockControllerInstance])

    const mockPluginRunner = jest.spyOn(PluginRunner, 'getInstance')
    const mockSuccessResponseResolver = jest.fn(data => data)
    const mockFailureResponseResolver = jest.fn()
    const mockPluginRunnerInstance = {
      getUserConfig() {
        return {
          api: {
            successResponseResolver: mockSuccessResponseResolver,
            failureResponseResolver: mockFailureResponseResolver,
            prefix: '/apis'
          }
        }
      }
    }
    mockPluginRunner.mockReturnValue(mockPluginRunnerInstance)

    const rest = require('@/src/plugins/api/rest')

    const decorator = rest.GetMapping('/a/b')

    decorator(mockTarget, 'testKey', mockDescriptor)

    expect(mockDescriptor['value']).toBeDefined()
    expect(mockExpressGetFunc).toBeCalledWith('/apis/a/b', expect.anything())

    setTimeout(() => {
      expect(mockResponseJson).toBeCalledWith('result')
      done()
    }, 100)
  })

  it('PostMapping path check', () => {
    const di = require('typedi')

    const mockContainerGet = jest.spyOn(di.Container, 'get')
    const mockExpressPostFunc = jest.fn()
    const mockApp = {
      post: mockExpressPostFunc
    }
    mockContainerGet.mockReturnValue(mockApp)

    const mockTarget = { mock: true }
    const mockDescriptor = {}

    const rest = require('@/src/plugins/api/rest')

    const decorator = rest.PostMapping('/a/b')

    decorator(mockTarget, 'testKey', mockDescriptor)

    expect(mockExpressPostFunc).toBeCalledWith('/apis/a/b', expect.anything())
  })

  it('DeleteMapping path check', () => {
    const di = require('typedi')

    const mockContainerGet = jest.spyOn(di.Container, 'get')
    const mockExpressDeleteFunc = jest.fn()
    const mockApp = {
      delete: mockExpressDeleteFunc
    }
    mockContainerGet.mockReturnValue(mockApp)

    const mockTarget = { mock: true }
    const mockDescriptor = {}

    const rest = require('@/src/plugins/api/rest')

    const decorator = rest.DeleteMapping('/a/b')

    decorator(mockTarget, 'testKey', mockDescriptor)

    expect(mockExpressDeleteFunc).toBeCalledWith('/apis/a/b', expect.anything())
  })

  it('PutMapping path check', () => {
    const di = require('typedi')

    const mockContainerGet = jest.spyOn(di.Container, 'get')
    const mockExpressPutFunc = jest.fn()
    const mockApp = {
      put: mockExpressPutFunc
    }
    mockContainerGet.mockReturnValue(mockApp)

    const mockTarget = { mock: true }
    const mockDescriptor = {}

    const rest = require('@/src/plugins/api/rest')

    const decorator = rest.PutMapping('/a/b')

    decorator(mockTarget, 'testKey', mockDescriptor)

    expect(mockExpressPutFunc).toBeCalledWith('/apis/a/b', expect.anything())
  })

  it('PatchMapping path check', () => {
    const di = require('typedi')

    const mockContainerGet = jest.spyOn(di.Container, 'get')
    const mockExpressPatchFunc = jest.fn()
    const mockApp = {
      patch: mockExpressPatchFunc
    }
    mockContainerGet.mockReturnValue(mockApp)

    const mockTarget = { mock: true }
    const mockDescriptor = {}

    const rest = require('@/src/plugins/api/rest')

    const decorator = rest.PatchMapping('/a/b')

    decorator(mockTarget, 'testKey', mockDescriptor)

    expect(mockExpressPatchFunc).toBeCalledWith('/apis/a/b', expect.anything())
  })

  it('GetMapping path with failureResolver check', done => {
    const signale = require('signale')
    const di = require('typedi')
    const { PluginRunner } = require('@/src/core/plugin')

    const mockSignaleError = jest.spyOn(signale, 'error')
    const mockContainerGet = jest.spyOn(di.Container, 'get')
    const mockContainerGetMany = jest.spyOn(di.Container, 'getMany')
    const mockResponseJson = jest.fn()
    const mockExpressGetFunc = jest.fn((path: string, cb: any) => {
      setTimeout(() => {
        cb(
          {},
          {
            json: mockResponseJson
          }
        )
      })
    })
    const mockApp = {
      get: mockExpressGetFunc
    }
    mockContainerGet.mockReturnValue(mockApp)

    const mockTarget = { mock: true }
    const mockDescriptor = {}
    const mockError = new Error()
    const mockControllerInstance = {
      testKey() {
        throw mockError
      }
    }
    Object.setPrototypeOf(mockControllerInstance, mockTarget)
    mockContainerGetMany.mockReturnValue([mockControllerInstance])

    const mockPluginRunner = jest.spyOn(PluginRunner, 'getInstance')
    const mockSuccessResponseResolver = jest.fn()
    const mockFailureResponseResolver = jest.fn(data => data)
    const mockPluginRunnerInstance = {
      getUserConfig() {
        return {
          api: {
            successResponseResolver: mockSuccessResponseResolver,
            failureResponseResolver: mockFailureResponseResolver,
            prefix: '/apis'
          }
        }
      }
    }
    mockPluginRunner.mockReturnValue(mockPluginRunnerInstance)

    const rest = require('@/src/plugins/api/rest')

    const decorator = rest.GetMapping('/a/b')

    decorator(mockTarget, 'testKey', mockDescriptor)

    expect(mockDescriptor['value']).toBeDefined()
    expect(mockExpressGetFunc).toBeCalledWith('/apis/a/b', expect.anything())

    setTimeout(() => {
      expect(mockSignaleError).toBeCalledWith(mockError)
      expect(mockResponseJson).toBeCalledWith(mockError)
      done()
    }, 100)
  })

  it('GetMapping path registered check', () => {
    const di = require('typedi')
    const { PluginRunner } = require('@/src/core/plugin')
    const { ProcessCtrl } = require('@/src/core/env')
    const signale = require('signale')

    const mockSignaleError = jest.spyOn(signale, 'error')
    const mockStop = jest.spyOn(ProcessCtrl, 'stop')
    const mockContainerGet = jest.spyOn(di.Container, 'get')
    const mockExpressGetFunc = jest.fn()
    const mockApp = {
      get: mockExpressGetFunc
    }
    mockContainerGet.mockReturnValue(mockApp)

    const mockTarget = { mock: true }
    const mockDescriptor = {}

    const mockPluginRunner = jest.spyOn(PluginRunner, 'getInstance')
    const mockSuccessResponseResolver = jest.fn(data => data)
    const mockFailureResponseResolver = jest.fn()
    const mockPluginRunnerInstance = {
      getUserConfig() {
        return {
          api: {
            successResponseResolver: mockSuccessResponseResolver,
            failureResponseResolver: mockFailureResponseResolver,
            prefix: '/apis'
          }
        }
      }
    }
    mockPluginRunner.mockReturnValue(mockPluginRunnerInstance)

    const rest = require('@/src/plugins/api/rest')

    const decorator = rest.GetMapping('/a/b')
    const decorator1 = rest.GetMapping('/a/b')

    decorator(mockTarget, 'testKey', mockDescriptor)
    decorator1(mockTarget, 'testKey', mockDescriptor)

    expect(mockSignaleError).toBeCalledTimes(1)
    expect(mockStop).toBeCalledTimes(1)
  })

  it('RequestQuery check', () => {
    const mockTarget = { testMethod() {} }

    const rest = require('@/src/plugins/api/rest')

    const decorator = rest.RequestQuery()

    expect(decorator(mockTarget, 'testMethod', 0)).toBeUndefined()
  })

  it('RequestBody check', () => {
    const mockTarget = { testMethod() {} }

    const rest = require('@/src/plugins/api/rest')

    const decorator = rest.RequestBody()

    expect(decorator(mockTarget, 'testMethod', 0)).toBeUndefined()
  })

  it('RequestPathVariable check', () => {
    const mockTarget = { testMethod() {} }

    const rest = require('@/src/plugins/api/rest')

    const decorator = rest.RequestPathVariable()

    expect(decorator(mockTarget, 'testMethod', 0)).toBeUndefined()
  })

  it('Request check', () => {
    const mockTarget = { testMethod() {} }

    const rest = require('@/src/plugins/api/rest')

    const decorator = rest.Request()

    expect(decorator(mockTarget, 'testMethod', 0)).toBeUndefined()
  })

  it('Response check', () => {
    const mockTarget = { testMethod() {} }

    const rest = require('@/src/plugins/api/rest')

    const decorator = rest.Response()

    expect(decorator(mockTarget, 'testMethod', 0)).toBeUndefined()
  })
})
