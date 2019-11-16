import express from 'express';
import { IPlugin } from "./pluginType";
interface IPluginDef {
    module: (...args: any) => IPlugin;
    options: any;
}
export declare function getExternalPlugins(): IPlugin[];
export declare function getExternalPluginFactories(): IPluginDef[];
export declare const userConfig: {
    [index: string]: any;
};
export declare const pluginRunner: {
    firstStage(app: express.Express): Promise<void>;
    beforeApiInit(app: express.Express): Promise<void>;
    apiInit(app: express.Express): Promise<void>;
    afterApiInit(app: express.Express): Promise<void>;
    lastStage(app: express.Express): Promise<void>;
};
export {};
