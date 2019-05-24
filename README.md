# express-api-bootstrap

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
yarn add express express-api-bootstrap
```

### npm

```bash
npm install --save express express-api-bootstrap
```

## Import

```javascript
const { withExpressApp } = require('express-api-bootstrap')
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
const { withExpressApp } = require('express-api-bootstrap')

// create express app as usual
const app = express()

// scan API files and register as routers automatically
withExpressApp(app)({
  scanOpts: {
    pattern: '**/*.js',
    cwd: resolve(__dirname, 'apis') // where to start scanning
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

## LICENSE

[MIT License](https://raw.githubusercontent.com/leftstick/express-api-bootstrap/master/LICENSE)

[npm-url]: https://npmjs.org/package/express-api-bootstrap
[npm-image]: https://badge.fury.io/js/express-api-bootstrap.png
[david-url]: https://david-dm.org/leftstick/express-api-bootstrap.png
[dt-url]: https://img.shields.io/npm/dt/express-api-bootstrap.svg
[license-url]: https://img.shields.io/npm/l/express-api-bootstrap.svg
