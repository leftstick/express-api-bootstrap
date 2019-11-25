# 内置配置

## server

- Type: `IServerConfig`
- Default: `{ port: 8080, staticDir: join(process.cwd(), 'public') }`

`express` 服务的配置项：

例子:

```typescript
import { join } from 'path'
import { IBootConfig } from 'express-api-bootstrap/types'

export default <IBootConfig>{
  server: {
    port: 9000,
    staticDir: join(__dirname, 'static')
  }
}
```

## cors

- Type: `boolean`
- Default: `true`

是否开启跨域

例子:

```typescript
import { IBootConfig } from 'express-api-bootstrap/types'

export default <IBootConfig>{
  cors: false
}
```

## requestParser

- Type: `IRequestParserConfig | false`
- Default: `{ config(app, parsers) {app.use(parsers.bodyParser.json());app.use(parsers.cookieParser());} }`

是否启用 requestParser 功能

Example:

```typescript
import { Express, IParsers } from 'express-api-bootstrap'
import { IBootConfig } from 'express-api-bootstrap/types'

export default <IBootConfig>{
  requestParser: {
    config(app: Express, parsers: IParsers) {
      app.use(parsers.bodyParser.json())
      app.use(parsers.cookieParser())
    }
  }
}
```

## api

- Type: `IApiConfig`
- Default: `{ scanDir: 'src/controllers', prefix: '/apis', successResponseResolver: (data) => ({ code: 200, data }), defaultFailureResponseResolver: (error: BizError) => ({ code: error.code, message: error.message || 'Internal error' }) }`

`controllers` 注册/使用策略。

例子:

```typescript
import { join } from 'path'
import { BizError } from 'express-api-bootstrap'
import { IBootConfig } from 'express-api-bootstrap/types'

export default <IBootConfig>{
  api: {
    scanDir: join(process.cwd(), 'src', 'controllers'),
    prefix: '/apis',
    successResponseResolver: data => {
      return { code: 200, data }
    },
    failureResponseResolver: (error: BizError) => {
      return {
        code: error.code,
        message: error.message || 'Internal error'
      }
    }
  }
}
```
