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
module.exports.getUsers = function(req, res) {
  const { url, originalUrl, params } = req

  res.json({
    url,
    originalUrl,
    id: params.id
  })
}
```

It's declarative, all you need for API writing is giving a proper annotation, `@method` - for http method definition; `@api` - for API path. And nothing else.

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

Let's say you have `apis/users/user.js` as below:

```javascript
/**
 * @method get
 * @api /users/:id
 */
module.exports.getUsers = async function(req, res) {
  const { url, originalUrl, params } = req

  res.json({
    url,
    originalUrl,
    id: params.id
  })
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

### withCors(app: express.Express)

Enable `Cross-Origin Resource Sharing`

### withExpressApp(app: express.Express)

Setup scan options for API initialization

### withLogger(opts)

Provide specific `logger` implementation. `console.log/warn/error` is used by default

### withRequestHandler(app: express.Express, customHandler: (function(bodyParser): any))

Setup request middlewares as needed. `app.use(bodyParser.json())` by default

### withResponseHandler(opts: {onNormalResponse: function, onErrorResponse: function})

Setup response transformer for normal/error case individually while fast `return {value}` with `@api`

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
