---
sidebarDepth: 4
---

# API

## Methods

### withExpressApp

`(app: express.Express): { (options: RegisterOptions): void }`

**Usage**

```javascript
const express = require('express')
const { resolve } = require('path')
const { withExpressApp } = require('express-api-bootstrap')

const app = express()

withExpressApp(app)({
  scanOpts: {
    cwd: resolve(__dirname, 'apis'),
    pattern: '**/*.js',
    ignore: ['**/_*.js']
  },
  apiPrefix: '/apis',
  logger: {
    info: console.dir
  },
  enableCors: false,
  requestParser(bodyParser) {
    app.use(bodyParser.json())
  },
  responseHandler: {
    onNormalResponse(data) {
      return {
        data,
        success: true
      }
    },
    onErrorResponse(err) {
      return {
        errorCode: err.code,
        message: err.message
      }
    }
  }
})
```

## Properties

### logger

`{ debug(...args: any[]): void; info(...args: any[]): void; warn(...args: any[]): void; error(...args: any[]): void; fatal(...args: any[]): void; }`

**Usage**

```javascript
const { logger } = require('express-api-bootstrap')

logger.info('hello world')
```

### ResponseError

`{ new (message: string, code: number) }`

**Usage**

```javascript
const { ResponseError } = require('express-api-bootstrap')

throw new ResponseError('unknown issue', 1000856)
```

## RegisterOptions

### scanOpts

**pattern** - `string`： Pattern to be matched

**cwd** - `string`： The current working directory in which to search. Defaults to process.cwd()

**ignore** - `string`： Add a pattern or an array of glob patterns to exclude matches. Defaults to ['\*\*\/\_\*.js', '\*\*\/\_\*\/\*.js']

### apiPrefix

`string`

prefix will be prepended in every registered api

### enableCors

`boolean`

whether to enable cors

### logger

`{ debug(...args: any[]): void; info(...args: any[]): void; warn(...args: any[]): void; error(...args: any[]): void; fatal(...args: any[]): void; }`

setup custom logger

### requestParser

`{ (bodyParser: BodyParser): void }`

setup custom requestParser. 'app.use(bodyParser.json())' by default

### responseHandler

`{ onNormalResponse: { (data: any): any }, onErrorResponse: { (err: ResponseError): any } }`
