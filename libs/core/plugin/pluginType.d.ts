import express from 'express';
export interface IPluginFactory {
    (opts: any): IPlugin;
}
export interface IPlugin {
    namespace: string;
    order: PluginOrderEnum | InternalPluginOrderEnum;
    configHandler<T>(config: T): T;
    pluginHandler<T>(app: express.Express, config: T): Promise<void> | undefined;
}
export declare enum PluginOrderEnum {
    BEFORE_API_INIT = "BEFORE_API_INIT",
    API_INIT = "API_INIT",
    AFTER_API_INIT = "AFTER_API_INIT"
}
export declare enum InternalPluginOrderEnum {
    FIRST_STAGE = "FIRST_STAGE",
    FINAL_STAGE = "FINAL_STAGE"
}
