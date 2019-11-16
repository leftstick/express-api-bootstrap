import express from 'express';
import { PluginOrderEnum } from "./core/plugin/pluginType";
import { setExpressApp } from "./plugins/api/rest";
export { PluginOrderEnum };
export { RestController, GetMapping, PostMapping, DeleteMapping, UpdateMapping, PatchMapping, setExpressApp } from "./plugins/api/rest";
export declare type HttpRequest = express.Request;
export declare type HttpResponse = express.Response;
export declare const ___internal: {
    pluginRunner: {
        firstStage(app: express.Express): Promise<void>;
        beforeApiInit(app: express.Express): Promise<void>;
        apiInit(app: express.Express): Promise<void>;
        afterApiInit(app: express.Express): Promise<void>;
        lastStage(app: express.Express): Promise<void>;
    };
    setExpressApp: typeof setExpressApp;
    ExpressToken: import("typedi").Token<express.Express>;
};
