export declare function isNotEmpty<T>(obj: T | undefined | null): obj is T;
export declare function isEmpty(obj: any | undefined | null): obj is undefined | null;
export declare function isString(obj: any): obj is string;
export declare function isPromise<T>(obj: any): obj is Promise<T>;
export declare function isArray<T>(obj: any | undefined | null): obj is T[];
