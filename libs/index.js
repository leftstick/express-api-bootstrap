'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var LifecycleEnum;
(function (LifecycleEnum) {
    LifecycleEnum["PROCESS_SHUTDOWN"] = "PROCESS_SHUTDOWN";
})(LifecycleEnum || (LifecycleEnum = {}));
(function (PluginOrderEnum) {
    PluginOrderEnum["BEFORE_API_INIT"] = "BEFORE_API_INIT";
    PluginOrderEnum["API_INIT"] = "API_INIT";
    PluginOrderEnum["AFTER_API_INIT"] = "AFTER_API_INIT";
})(exports.PluginOrderEnum || (exports.PluginOrderEnum = {}));
var InternalPluginOrderEnum;
(function (InternalPluginOrderEnum) {
    InternalPluginOrderEnum["FIRST_STAGE"] = "FIRST_STAGE";
    InternalPluginOrderEnum["FINAL_STAGE"] = "FINAL_STAGE";
})(InternalPluginOrderEnum || (InternalPluginOrderEnum = {}));
