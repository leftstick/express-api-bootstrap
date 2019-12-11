let originalCWD: string

describe('plugin check', () => {
  beforeAll(() => {
    originalCWD = process.cwd()
  })

  afterAll(() => {
    process.chdir(originalCWD)
  })

  beforeEach(() => {
    jest.restoreAllMocks()
    jest.resetModules()
  })

  it('no plugins declared in .bootrc.ts check', () => {
    const { getExternalPlugins } = require('@/src/core/plugin')
    expect(getExternalPlugins({})).toStrictEqual([])
  })

  it('invalid plugin declared in .bootrc.ts check', () => {
    const signale = require('signale')
    const { ProcessCtrl } = require('@/src/core/env')

    const signaleError = jest.spyOn(signale, 'error')
    const ProcessCtrlStop = jest.spyOn(ProcessCtrl, 'stop')

    const { getExternalPlugins } = require('@/src/core/plugin')
    const result = getExternalPlugins({ plugins: [{ age: 10 }] })
    expect(result).toStrictEqual([])
    expect(signaleError).toBeCalledWith('incorrect plugin configured')
    expect(ProcessCtrlStop).toBeCalled()
  })

  it('customized .ts plugin declared in .bootrc.ts check', () => {
    const fixtureDir = global.toFixturesDir('project_plugin')
    process.chdir(fixtureDir)

    const { getExternalPlugins } = require('@/src/core/plugin')

    const moduleFactory = jest.fn()

    jest.doMock(global.toFixturesDir('project_plugin', 'plugins', 'log_plugin'), () => {
      return {
        __esModule: true,
        default: moduleFactory
      }
    })

    const result = getExternalPlugins({ plugins: [{ name: 'log_plugin' }] })
    expect(result.length).toBe(1)
    expect(moduleFactory).toBeCalledTimes(1)
  })

  it('customized .js plugin declared in .bootrc.ts check', () => {
    const fixtureDir = global.toFixturesDir('project_plugin')
    process.chdir(fixtureDir)

    const { getExternalPlugins } = require('@/src/core/plugin')

    const moduleFactory = jest.fn()

    jest.doMock(global.toFixturesDir('project_plugin', 'plugins', 'log_plugin'), () => {
      return moduleFactory
    })

    const result = getExternalPlugins({ plugins: [{ name: 'log_plugin' }] })
    expect(result.length).toBe(1)
    expect(moduleFactory).toBeCalledTimes(1)
  })

  it('pluginrunner check', async () => {
    const fixtureDir = global.toFixturesDir('project_plugin')
    process.chdir(fixtureDir)

    const reader = require('@/src/core/env/userConfigReader')
    const { PluginRunner } = require('@/src/core/plugin')

    const getRawUserConfig = jest.spyOn(reader, 'getRawUserConfig')

    getRawUserConfig.mockReturnValue({ plugins: [{ name: 'log_plugin' }] })

    const mockConfigHandler = jest.fn()
    const mockPluginHandler = jest.fn()

    const moduleFactory = jest.fn(() => {
      return {
        order: 'FIRST_STAGE',
        configHandler: mockConfigHandler,
        pluginHandler: mockPluginHandler
      }
    })

    jest.doMock(global.toFixturesDir('project_plugin', 'plugins', 'log_plugin'), () => {
      return moduleFactory
    })

    const mockExpressApp = {
      use: jest.fn(),
      listen: jest.fn((port: number, host: string, cb: Function) => {
        cb()
      })
    }

    await PluginRunner.getInstance(mockExpressApp).run()

    expect(moduleFactory).toBeCalledTimes(1)
    expect(mockConfigHandler).toBeCalledTimes(1)
    expect(mockPluginHandler).toBeCalledTimes(1)
  })

  it('pluginrunner userconfig check', () => {
    const fixtureDir = global.toFixturesDir('project_plugin')
    process.chdir(fixtureDir)

    const reader = require('@/src/core/env/userConfigReader')
    const { PluginRunner } = require('@/src/core/plugin')

    const getRawUserConfig = jest.spyOn(reader, 'getRawUserConfig')

    getRawUserConfig.mockReturnValue({})

    const mockExpressApp = {
      use: jest.fn(),
      listen: jest.fn((port: number, host: string, cb: Function) => {
        cb()
      })
    }

    const userconfig = PluginRunner.getInstance(mockExpressApp).getUserConfig()

    expect(userconfig.cors).toBe(true)
    expect(userconfig.requestParser.config).toBeDefined()
    expect(userconfig.api.rateLimit).toBeFalsy()
    expect(userconfig.server.port).toBe(8080)
    expect(userconfig.server.trustProxy).toBe(false)
  })

  it('pluginrunner singleton check', () => {
    const fixtureDir = global.toFixturesDir('project_plugin')
    process.chdir(fixtureDir)

    const reader = require('@/src/core/env/userConfigReader')
    const { PluginRunner } = require('@/src/core/plugin')

    const getRawUserConfig = jest.spyOn(reader, 'getRawUserConfig')

    getRawUserConfig.mockReturnValue({})

    const mockExpressApp = {}

    const runnerOne = PluginRunner.getInstance(mockExpressApp)
    const runnerTwo = PluginRunner.getInstance(mockExpressApp)

    expect(runnerOne).toBe(runnerTwo)
  })
})
