import { cwd, getProjectBaseRoot, ProcessCtrl, ProcessSingle } from '@/src/core/env'

let originalCWD: string

describe('env check', () => {
  beforeAll(() => {
    originalCWD = process.cwd()
  })

  afterAll(() => {
    process.chdir(originalCWD)
  })

  it('cwd check', () => {
    process.chdir(global.toFixturesDir('simple'))

    expect(cwd()).toBe(global.toFixturesDir('simple'))
  })

  it('getProjectBaseRoot check simple', () => {
    process.chdir(global.toFixturesDir('simple'))
    process.env.NODE_ENV = 'development'

    expect(getProjectBaseRoot()).toBe(global.toFixturesDir('simple', 'src'))

    process.env.NODE_ENV = 'production'

    expect(getProjectBaseRoot()).toBe(global.toFixturesDir('simple', 'dist', 'src'))
  })

  it('getProjectBaseRoot check simple no dist src', () => {
    process.chdir(global.toFixturesDir('simple_no_dist_src'))
    process.env.NODE_ENV = 'production'

    expect(getProjectBaseRoot()).toBe(global.toFixturesDir('simple_no_dist_src', 'dist'))
  })

  it('ProcessCtrl.stop check ', () => {
    process.chdir(global.toFixturesDir('simple'))

    process.send = jest.fn()

    ProcessCtrl.stop()

    expect(process.send).toBeCalledTimes(1)
    expect(process.send).toBeCalledWith({ type: ProcessSingle.STOP })

    process.send = undefined

    expect(ProcessCtrl.stop()).toBe(undefined)
  })

  it('ProcessCtrl.restart() check ', () => {
    process.chdir(global.toFixturesDir('simple'))

    process.send = jest.fn()

    ProcessCtrl.restart('aaa')

    expect(process.send).toBeCalledTimes(1)
    expect(process.send).toBeCalledWith({ type: ProcessSingle.RESTART, data: 'aaa' })

    process.send = undefined

    expect(ProcessCtrl.restart('bbb')).toBe(undefined)
  })
})
