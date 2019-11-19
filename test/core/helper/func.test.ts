import { debounce } from '@/src/core/helper/func'

describe('debounces', () => {
  it('valid case without immediate invoke', () => {
    jest.useFakeTimers()

    const func = jest.fn()
    const debouncedFunction = debounce(func, 100)

    debouncedFunction()
    expect(func).not.toBeCalled()

    jest.runTimersToTime(50)
    expect(func).not.toBeCalled()

    jest.runTimersToTime(100)
    expect(func).toBeCalled()
    expect(func.mock.calls.length).toBe(1)
  })

  it('valid case with immediate invoke', () => {
    jest.useFakeTimers()

    const func = jest.fn()
    const debouncedFunction = debounce(func, 100, { isImmediate: true })

    debouncedFunction()
    expect(func).toBeCalled()
    expect(func.mock.calls.length).toBe(1)

    jest.runTimersToTime(50)
    expect(func.mock.calls.length).toBe(1)

    jest.runTimersToTime(100)
    expect(func.mock.calls.length).toBe(1)
  })

  it('valid case with parameter', () => {
    jest.useFakeTimers()

    const func = jest.fn()
    const debouncedFunction = debounce(func, 100)

    debouncedFunction('hello')
    expect(func).not.toBeCalled()

    jest.runTimersToTime(50)
    expect(func).not.toBeCalled()

    jest.runTimersToTime(100)
    expect(func).toBeCalledWith('hello')
    expect(func.mock.calls.length).toBe(1)
  })
})
