import { isNotEmpty, isEmpty, isArray, isPromise, isString, urlJoin } from '@/src/core/helper/object'

describe('objects', () => {
  it('string check', () => {
    expect(isString('hello')).toBeTruthy()
    expect(isString(true)).toBeFalsy()
  })

  it('array check', () => {
    expect(isArray(['hello'])).toBeTruthy()
    expect(isArray(true)).toBeFalsy()
    expect(isArray(1234)).toBeFalsy()
  })

  it('promise check', () => {
    expect(isPromise(Promise.resolve())).toBeTruthy()
    expect(isPromise(true)).toBeFalsy()
    expect(isPromise(1234)).toBeFalsy()
    expect(isPromise([])).toBeFalsy()
  })

  it('empty check', () => {
    expect(isEmpty(null)).toBeTruthy()
    expect(isEmpty(undefined)).toBeTruthy()
    expect(isEmpty(Promise.resolve())).toBeFalsy()
    expect(isEmpty([])).toBeFalsy()
  })

  it('nonempty check', () => {
    expect(isNotEmpty(Promise.resolve())).toBeTruthy()
    expect(isNotEmpty([])).toBeTruthy()
    expect(isNotEmpty(null)).toBeFalsy()
    expect(isNotEmpty(undefined)).toBeFalsy()
  })

  it('urlJoin check', () => {
    expect(urlJoin('http://', '/test.view.com/')).toBe('http://test.view.com/')
  })
})
