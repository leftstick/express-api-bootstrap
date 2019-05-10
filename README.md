# express-api-loader

[![NPM version][npm-image]][npm-url]
![][david-url]
![][dt-url]
![][license-url]

Enhance API writing experience in declarative way with [Express.js](http://expressjs.com/).

We'd like to provide a new way as below:

```javascript
/**
 * @method get
 * @api /users/:id
 */
module.exports.getUsers = function(req) {
  const { url, originalUrl, params } = req

  return {
    url,
    originalUrl,
    id: params.id
  }
}
```

It's declarative, so all you need is giving a proper annotation, `@method` - for http method definition; `@api` - for API path. And nothing else.

You don't have to worry about how [router](http://expressjs.com/en/4x/api.html#router) organized any more.

## Install

### yarn

```bash
yarn add express-api-loader
```

### npm

```bash
npm install --save express-api-loader
```

## Import

```javascript
const { withExpressApp } = require('express-api-loader')
```

## Quick Start

Let's say you want write an API at `apis/users/user.js`, code as below:

```javascript
/**
 * @method get
 * @api /users/:id
 */
module.exports.getUsers = function(req) {
  const { url, originalUrl, params } = req

  return {
    url,
    originalUrl,
    id: params.id
  }
}
```

How can we get it up and running as APIs? see:

```javascript
const express = require('express')
const { resolve } = require('path')
const { withExpressApp } = require('express-api-loader')

// create express app as usual
const app = express()

// scan API files and register as routers automatically
withExpressApp(app)({
  scanOpts: {
    cwd: resolve(__dirname, 'apis'), // where to start scanning
    pattern: '**/*.js', // which file will be loaded as API declaration
    ignore: ['**/_*.js'] // which file will be ignored from scanning
  },
  apiPrefix: '/apis' // will be prepended in every api path
})

app.listen(9876, () => {
  console.log('server running at 9876')
})
```

try

```bash
curl http://localhost:9876/apis/users/123?name=hello
```

to see the result.

## Methods

### withExpressApp(app: express.Express): (function(RegisterOptions) : void)

```javascript
/**
 * @typedef {object} Logger - options for logger
 * @property {Function} debug log debug info
 * @property {Function} info log normal info
 * @property {Function} warn log warning info
 * @property {Function} error log error info
 * @property {Function} fatal log fatal info
 */

/**
 * @typedef {object} ScanOptions - options for scanning
 * @property {string} pattern Pattern to be matched
 * @property {string} cwd The current working directory in which to search. Defaults to process.cwd()
 * @property {string} ignore Add a pattern or an array of glob patterns to exclude matches. Defaults to ['\*\*\/\_\*.js', '\*\*\/\_\*\/\*.js']
 */

/**
 * @typedef {object} ScannedModule - module scanned
 * @property {string} filePath path of module
 * @property {object} moduleInstance object
 * @property {string} code code text of module
 * @property {object} ast ast
 */

/**
 * @typedef {object} ResponseHandler - handler
 * @property {function(any):({errorCode: number, data: any})=} onNormalResponse
 * @property {function(ResponseError):({errorCode: number, message: string})=} onErrorResponse
 */

/**
 * @typedef {object} RegisterOptions - options of register function
 * @property {ScanOptions} scanOpts
 * @property {string} apiPrefix - prefix will be prepended in every registered api
 * @property {boolean} enableCors - whether to enable cors
 * @property {Logger} logger - setup custom logger
 * @property {function(bodyParser): any} requestParser - setup custom requestParser. 'app.use(bodyParser.json())' by default
 * @property {ResponseHandler} responseHandler - setup custom response handler
```

## Properties

### logger

Log information

### ResponseError

You have to use this custom error implementation while throwing error within `@api`

## LICENSE

[MIT License](https://raw.githubusercontent.com/leftstick/express-api-loader/master/LICENSE)

[npm-url]: https://npmjs.org/package/express-api-loader
[npm-image]: https://badge.fury.io/js/express-api-loader.png
[david-url]: https://david-dm.org/leftstick/express-api-loader.png
[dt-url]: https://img.shields.io/npm/dt/express-api-loader.svg
[license-url]: https://img.shields.io/npm/l/express-api-loader.svg
