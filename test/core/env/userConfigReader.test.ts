import { getRawUserConfig } from '@/src/core/env/userConfigReader'

let originalCWD: string

describe('env check', () => {
  beforeAll(() => {
    originalCWD = process.cwd()
  })

  beforeAll(() => {
    require('../../../build/babel/registerBabel')()
  })

  afterAll(() => {
    process.chdir(originalCWD)
  })

  it('getRawUserConfig check', () => {
    process.chdir(global.toFixturesDir('simple'))

    expect(getRawUserConfig()).toStrictEqual({
      server: {
        port: 8080
      }
    })
  })

  it('getRawUserConfig no config check', () => {
    process.chdir(global.toFixturesDir('simple_no_config'))

    expect(getRawUserConfig()).toStrictEqual({})
  })

  it('getRawUserConfig js style config check', () => {
    process.chdir(global.toFixturesDir('simple_js_style_config'))

    expect(getRawUserConfig()).toStrictEqual({
      server: {
        port: 8080
      }
    })
  })
})
