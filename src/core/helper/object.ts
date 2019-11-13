export function isNotEmpty<T>(obj: T | undefined | null): obj is T {
  return obj !== undefined && obj !== null
}

export function isEmpty(obj: any | undefined | null): obj is undefined | null {
  return obj === undefined || obj === null
}

export function isArray<T>(obj: any | undefined | null): obj is T[] {
  return isNotEmpty(obj) && Array.isArray(obj)
}
