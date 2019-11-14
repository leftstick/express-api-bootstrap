export function isNotEmpty<T>(obj: T | undefined | null): obj is T {
  return obj !== undefined && obj !== null
}

export function isEmpty(obj: any | undefined | null): obj is undefined | null {
  return obj === undefined || obj === null
}

export function isString(obj: any): obj is string {
  return Object.prototype.toString.call(obj) === '[object String]'
}

export function isPromise<T>(obj: any): obj is Promise<T> {
  return Object.prototype.toString.call(obj) === '[object Promise]'
}

export function isArray<T>(obj: any | undefined | null): obj is T[] {
  return isNotEmpty(obj) && Array.isArray(obj)
}
