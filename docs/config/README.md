# Builtin

## server

- Type: `IServerConfig`
- Default: `{ port: 8080, staticDir: join(process.cwd(), 'public') }`

Config for `express` server

Example:

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

Whether to enable cross-origin resource sharing

Example:

```typescript
import { IBootConfig } from 'express-api-bootstrap/types'

export default <IBootConfig>{
  cors: false
}
```

## api

- Type: `IApiConfig`
- Default: `{ scanDir: 'src/controllers', prefix: '/apis', successResponseResolver: (data) => ({ code: 200, data }), defaultFailureResponseResolver: (error: BizError) => ({ code: error.code, message: error.message || 'Internal error' }) }`

Configuration for api scanning/registration process

Example:

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
