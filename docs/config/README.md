# Builtin

## server

- Type: `IServerConfig`
- Default: `{ port: 8080, staticDir: join(process.cwd(), 'public'), trustProxy: false }`

Config for `express` server

Example:

```typescript
import { join } from 'path'
import { IBootConfig } from 'express-api-bootstrap/types'

export default <IBootConfig>{
  server: {
    port: 9000,
    staticDir: join(__dirname, 'static'),
    trustProxy: true
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

## requestParser

- Type: `IRequestParserConfig | false`
- Default: `{ config(app, parsers) {app.use(parsers.bodyParser.json());app.use(parsers.cookieParser());} }`

Whether to enable requestParser feature

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
- Default: `{ scanDir: 'src/controllers', prefix: '/apis', successResponseResolver: (data) => ({ code: 200, data }), defaultFailureResponseResolver: (error: BizError) => ({ code: error.code, message: error.message || 'Internal error' }), rateLimit: false }`

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

### api.rateLimit

- Type: `IRateLimitConfig | false`
- Default: `false`

Configuration pass to [express-rate-limit](https://github.com/nfriedly/express-rate-limit). Defaults to false. Enable rateLimite by passing IRateLimitConfig option.

**api.rateLimit.max**

- Type: `number`
- Default: `5`

Max number of connections during windowMs milliseconds before sending a 429 response.

Defaults to 5. Set to 0 to disable.

**api.rateLimit.windowMs**

- Type: `number`
- Default: `60000`

How long in milliseconds to keep records of requests in memory.

Defaults to 60000 (1 minute).

**api.rateLimit.message**

- Type: `string`
- Default: `Too many requests, please try again later`

Error message sent to user when max is exceeded.

May be a String, JSON object, or any other value that Express's res.send supports.

Defaults to 'Too many requests, please try again later.'

**api.rateLimit.statusCode**

- Type: `number`
- Default: `429`

HTTP status code returned when max is exceeded.

Defaults to 429.

**api.rateLimit.headers**

- Type: `boolean`
- Default: `false`

Enable headers for request limit (X-RateLimit-Limit) and current usage (X-RateLimit-Remaining) on all responses and time to wait before retrying (Retry-After) when max is exceeded.

Default to false.

**api.rateLimit.keyGenerator**

- Type: `(req: express.Request, res: express.Response) => string`
- Default: `(req: express.Request, res: express.Response) => req.ip + req.originalUrl`

Function used to generate keys.

Defaults to req.ip + req.originalUrl

**api.rateLimit.skip**

- Type: `(req: express.Request, res: express.Response) => boolean`
- Default: `(req: express.Request, res: express.Response) => false`

Function used to skip (whitelist) requests. Returning true from the function will skip limiting for that request.

Defaults to always false (count all requests).

**api.rateLimit.store**

- Type: `rateLimit.Store`
- Default: `MemoryStore`

The storage to use when persisting rate limit attempts.

By default, the MemoryStore is used.

Available data stores are:

- MemoryStore: (default) Simple in-memory option. Does not share state when app has multiple processes or servers.
- [rate-limit-redis](https://github.com/wyattjoh/rate-limit-redis): A Redis-backed store, more suitable for large or demanding deployments.
- [rate-limit-memcached](https://github.com/linyows/rate-limit-memcached): A Memcached-backed store.
- [rate-limit-mongo](https://github.com/2do2go/rate-limit-mongo): A MongoDB-backed store.
