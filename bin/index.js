#!/usr/bin/env node
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

function _interopNamespace(e) {
  if (e && e.__esModule) { return e; } else {
    var n = {};
    if (e) {
      Object.keys(e).forEach(function (k) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      });
    }
    n['default'] = e;
    return n;
  }
}

var program = _interopDefault(require('commander'));
var updater = _interopDefault(require('update-notifier'));
var typedi = require('typedi');
var express = _interopDefault(require('express'));
var tslib = require('tslib');
var signale = _interopDefault(require('signale'));
var path = require('path');
var path__default = _interopDefault(path);
var glob = _interopDefault(require('glob'));
var os = _interopDefault(require('os'));

var name = "express-api-bootstrap";
var version = "3.0.0";
var description = "express-api-bootstrap makes it easy to create stand-alone, production-grade express based API servers that you can \"just run\"";
var main = "./libs/index.js";
var typings = "./libs/src/index.d.ts";
var bin = {
	boot: "./bin/index.js"
};
var husky = {
	hooks: {
		"commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
	}
};
var commitlint = {
	"extends": [
		"@commitlint/config-conventional"
	]
};
var scripts = {
	test: "jest",
	coverage: "cat ./coverage/lcov.info | coveralls",
	build: "node build",
	prepublish: "yarn build",
	postinstall: "node libs/gen"
};
var repository = {
	type: "git",
	url: "git+https://github.com/leftstick/express-api-bootstrap.git"
};
var keywords = [
	"express",
	"api",
	"bootstrap"
];
var files = [
	"bin",
	"types",
	"libs",
	"src"
];
var engines = {
	node: ">=10"
};
var author = "Howard.Zuo";
var license = "MIT";
var bugs = {
	url: "https://github.com/leftstick/express-api-bootstrap/issues"
};
var homepage = "https://github.com/leftstick/express-api-bootstrap#readme";
var dependencies = {
	"@babel/preset-typescript": "^7.7.2",
	"@babel/register": "^7.7.0",
	"@zerollup/ts-transform-paths": "^1.7.6",
	"babel-preset-umi": "^1.8.1",
	commander: "^4.0.1",
	del: "^5.1.0",
	express: "^4.17.1",
	glob: "^7.1.6",
	"lodash.template": "^4.5.0",
	signale: "^1.4.0",
	tslib: "^1.10.0",
	typedi: "^0.8.0",
	typescript: "^3.7.2",
	"update-notifier": "^3.0.1"
};
var devDependencies = {
	"@commitlint/cli": "^8.2.0",
	"@commitlint/config-conventional": "^8.2.0",
	"@rollup/plugin-json": "^4.0.0",
	"@types/express": "^4.17.2",
	"@types/jest": "^24.0.23",
	"@types/node": "^12.12.8",
	"@types/signale": "^1.2.1",
	"@types/update-notifier": "^2.5.0",
	coveralls: "^3.0.7",
	husky: "^3.0.9",
	jest: "^24.9.0",
	rollup: "^1.27.0",
	"rollup-plugin-auto-external": "^2.0.0",
	"rollup-plugin-typescript2": "^0.25.2",
	"ts-jest": "^24.1.0",
	"tsconfig-paths": "^3.9.0",
	tslint: "^5.20.1",
	"tslint-microsoft-contrib": "^6.2.0"
};
var pkg = {
	name: name,
	version: version,
	description: description,
	main: main,
	typings: typings,
	bin: bin,
	husky: husky,
	commitlint: commitlint,
	scripts: scripts,
	repository: repository,
	keywords: keywords,
	files: files,
	engines: engines,
	author: author,
	license: license,
	bugs: bugs,
	homepage: homepage,
	dependencies: dependencies,
	devDependencies: devDependencies
};

var dev = {
    cmd: 'dev',
    description: 'Launch application in debug mode',
    action() {
        process.env.NODE_ENV = 'development';
        Promise.resolve().then(function () { return realDev; });
    }
};

var commands = [dev];

// Notify update when process exits
updater({ pkg }).notify({ defer: true });
commands.forEach(cmd => {
    program
        .command(cmd.cmd)
        .description(cmd.description)
        .action(cmd.action);
});
program.parse(process.argv);

require('@babel/register')({
    presets: [
        require.resolve('@babel/preset-typescript'),
        [
            require.resolve('babel-preset-umi'),
            {
                env: { targets: { node: 10 } },
                transformRuntime: false
            }
        ]
    ],
    extensions: ['.ts', '.js'],
    babelrc: false,
    cache: false
});

var LifecycleEnum;
(function (LifecycleEnum) {
    LifecycleEnum["PROCESS_SHUTDOWN"] = "PROCESS_SHUTDOWN";
})(LifecycleEnum || (LifecycleEnum = {}));
var PluginOrderEnum;
(function (PluginOrderEnum) {
    PluginOrderEnum["BEFORE_API_INIT"] = "BEFORE_API_INIT";
    PluginOrderEnum["API_INIT"] = "API_INIT";
    PluginOrderEnum["AFTER_API_INIT"] = "AFTER_API_INIT";
})(PluginOrderEnum || (PluginOrderEnum = {}));
var InternalPluginOrderEnum;
(function (InternalPluginOrderEnum) {
    InternalPluginOrderEnum["FIRST_STAGE"] = "FIRST_STAGE";
    InternalPluginOrderEnum["FINAL_STAGE"] = "FINAL_STAGE";
})(InternalPluginOrderEnum || (InternalPluginOrderEnum = {}));

function cwd() {
    return process.cwd();
}
function getProjectBaseRoot() {
    if (process.env.NODE_ENV === 'development') {
        return path.resolve(cwd(), 'src');
    }
    return path.resolve(cwd(), 'dist');
}

function isNotEmpty(obj) {
    return obj !== undefined && obj !== null;
}
function isEmpty(obj) {
    return obj === undefined || obj === null;
}
function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}
function isArray(obj) {
    return isNotEmpty(obj) && Array.isArray(obj);
}

var cors = () => {
    return {
        namespace: 'cors',
        order: InternalPluginOrderEnum.FIRST_STAGE,
        configHandler(config) {
            if (isEmpty(config) || isEmpty(config.cors)) {
                return {
                    cors: true
                };
            }
            return {
                cors: config.cors
            };
        },
        pluginHandler(app, config) {
            app.use('*', (req, res, next) => {
                if (!req.get('Origin')) {
                    return next();
                }
                res.set('Access-Control-Allow-Origin', req.headers.origin);
                res.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PATCH, PUT, HEAD, TRACE, DELETE');
                res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Range');
                res.set('Access-Control-Allow-Credentials', 'true');
                if ('OPTIONS' === req.method) {
                    return res.status(200).end();
                }
                return next();
            });
        }
    };
};

const defaultSuccessResponseResolver = (data) => {
    return {
        code: 200,
        data
    };
};
const defaultFailureResponseResolver = (error) => {
    return {
        code: error.code,
        message: error.message || 'Internal error'
    };
};
var api = () => {
    return {
        namespace: 'api',
        order: PluginOrderEnum.API_INIT,
        configHandler(config) {
            const conf = {
                api: {
                    scanDir: path.resolve(getProjectBaseRoot(), 'controllers'),
                    prefix: '/apis',
                    successResponseResolver: defaultSuccessResponseResolver,
                    failureResponseResolver: defaultFailureResponseResolver
                }
            };
            if (isEmpty(config) || isEmpty(config.api)) {
                return conf;
            }
            if (isNotEmpty(config.api.prefix) && isNotEmpty(conf.api)) {
                conf.api.prefix = config.api.prefix;
            }
            if (isNotEmpty(config.api.successResponseResolver) && isNotEmpty(conf.api)) {
                conf.api.successResponseResolver = config.api.successResponseResolver;
            }
            if (isNotEmpty(config.api.failureResponseResolver) && isNotEmpty(conf.api)) {
                conf.api.failureResponseResolver = config.api.failureResponseResolver;
            }
            return conf;
        },
        pluginHandler(app, config) {
            if (isEmpty(config.api)) {
                return;
            }
            const controllerFiles = glob.sync('**/*.ts', {
                cwd: config.api.scanDir,
                absolute: true
            });
            const entry = path.resolve(__dirname, '..', 'libs', 'index.js');
            return new Promise(function (resolve) { resolve(_interopNamespace(require(entry))); })
                .then(entry => {
                entry.setExpressApp(app);
            })
                .then(() => {
                return Promise.all(controllerFiles.map(f => new Promise(function (resolve) { resolve(_interopNamespace(require(f))); })));
            });
        }
    };
};

var server = () => {
    return {
        namespace: 'server',
        order: InternalPluginOrderEnum.FINAL_STAGE,
        configHandler(config) {
            if (isEmpty(config) || isEmpty(config.server)) {
                return {
                    server: {
                        port: 8080,
                        staticDir: path__default.resolve(cwd(), 'public')
                    }
                };
            }
            return {
                server: {
                    port: isEmpty(config.server.port) ? 8080 : config.server.port,
                    staticDir: isEmpty(config.server.staticDir) ? path__default.resolve(cwd(), 'public') : config.server.staticDir
                }
            };
        },
        pluginHandler(app, config) {
            if (isEmpty(config) ||
                isEmpty(config.server) ||
                isEmpty(config.server.port) ||
                isEmpty(config.server.staticDir)) {
                signale.error('No server config found');
                return;
            }
            const { port, staticDir } = config.server;
            if (isString(staticDir)) {
                app.use(express.static(staticDir));
            }
            return new Promise(resolve => {
                app.listen(port, '0.0.0.0', () => {
                    const addresses = getIpAddresses();
                    signale.success(`App running at below link${addresses.length > 1 ? 's' : ''}:`);
                    addresses.forEach(ip => {
                        signale.info(`http://${ip}:${port}`);
                        resolve();
                    });
                });
            });
        }
    };
};
function getIpAddresses() {
    const ifaces = os.networkInterfaces();
    return Object.values(ifaces)
        .reduce((p, c) => p.concat(c), [])
        .filter(iface => iface.family === 'IPv4')
        .map(iface => iface.address);
}

function getRawUserConfig() {
    try {
        // tslint:disable-next-line: non-literal-require
        const mod = require(path.join(cwd(), '.bootrc.ts'));
        return mod.default || mod;
    }
    catch (error) {
        signale.warn('.bootrc.ts not found, preset config used');
        return {};
    }
}

const rawConfig = getRawUserConfig();
const internalPlugins = [cors(), api(), server()];
function getExternalPlugins() {
    const factories = getExternalPluginFactories();
    return factories.map(factory => {
        return factory.module(factory.options);
    });
}
function getExternalPluginFactories() {
    if (!isArray(rawConfig.plugins)) {
        return [];
    }
    if (hasIncorrectPlugin(rawConfig.plugins)) {
        signale.error('incorrect plugin configured');
        // stop process
        return [];
    }
    return getExternalPluginModules(rawConfig.plugins);
}
function hasIncorrectPlugin(plugins) {
    return plugins.some(plugin => isEmpty(plugin) || isEmpty(plugin.name));
}
function getExternalPluginModules(plugins) {
    const modulePaths = [
        ...plugins.map(plugin => ({ mp: path.join(cwd(), plugin.name), options: plugin.options })),
        ...plugins.map(plugin => ({ mp: path.join(cwd(), 'node_modules', plugin.name), options: plugin.options }))
    ];
    return modulePaths
        .map(mp => {
        try {
            // tslint:disable-next-line: non-literal-require
            const mod = require(mp.mp);
            return {
                module: mod.default || mod,
                options: mp.options
            };
        }
        catch (error) {
            return null;
        }
    })
        .filter((mod) => !!mod);
}
const plugins = [...internalPlugins, ...getExternalPlugins()];
const userConfig = plugins.reduce((p, c) => {
    return Object.assign(Object.assign({}, p), c.configHandler(p));
}, Object.assign({}, rawConfig));
function execPlugins(order, app) {
    return tslib.__awaiter(this, void 0, void 0, function* () {
        const getPlugins = plugins.filter(p => p.order === order);
        yield Promise.all(getPlugins.map(p => p.pluginHandler(app, Object.assign({}, userConfig)) || Promise.resolve()));
        return undefined;
    });
}
const pluginRunner = {
    firstStage(app) {
        return tslib.__awaiter(this, void 0, void 0, function* () {
            return execPlugins(InternalPluginOrderEnum.FIRST_STAGE, app);
        });
    },
    beforeApiInit(app) {
        return tslib.__awaiter(this, void 0, void 0, function* () {
            return execPlugins(PluginOrderEnum.BEFORE_API_INIT, app);
        });
    },
    apiInit(app) {
        return tslib.__awaiter(this, void 0, void 0, function* () {
            return execPlugins(PluginOrderEnum.API_INIT, app);
        });
    },
    afterApiInit(app) {
        return tslib.__awaiter(this, void 0, void 0, function* () {
            return execPlugins(PluginOrderEnum.AFTER_API_INIT, app);
        });
    },
    lastStage(app) {
        return tslib.__awaiter(this, void 0, void 0, function* () {
            return execPlugins(InternalPluginOrderEnum.FINAL_STAGE, app);
        });
    }
};

const ExpressToken = new typedi.Token('global.express');
const RestControllerToken = new typedi.Token('controllers');

const app = express();
typedi.Container.set(ExpressToken, app);
pluginRunner
    .firstStage(app)
    .then(() => {
    return pluginRunner.beforeApiInit(app);
})
    .then(() => {
    return pluginRunner.apiInit(app);
})
    .then(() => {
    return pluginRunner.afterApiInit(app);
})
    .then(() => {
    pluginRunner.lastStage(app);
});

var realDev = /*#__PURE__*/Object.freeze({
  __proto__: null
});
