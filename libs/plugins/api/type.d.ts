export declare class BizError extends Error {
    code: number;
    constructor(code: number, message: string);
}
export interface IPluginType {
    /**
     * configuration for api
     */
    api?: IApiConfig;
}
interface IApiConfig {
    /**
     * Directory where APIs should be placed.
     *
     * Default is: src/controllers
     */
    scanDir?: string;
    /**
     * prefix for all APIs. Default is: /apis
     */
    prefix?: string;
    /**
     * Resolver for success response.
     *
     * Should be used for customized success response structure
     */
    successResponseResolver?: (data: any) => any;
    /**
     * Resolver for failure response.
     *
     * Should be used for customized failure response structure
     */
    failureResponseResolver?: (error?: Error) => any;
}
export {};
