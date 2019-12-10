# 内置配置

## server

- Type: `IServerConfig`
- Default: `{ port: 8080, staticDir: join(process.cwd(), 'public'), trustProxy: false }`

`express` 服务的配置项：

例子:

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
- Default: `{ scanDir: 'src/controllers', prefix: '/apis', successResponseResolver: (data) => ({ code: 200, data }), defaultFailureResponseResolver: (error: BizError) => ({ code: error.code, message: error.message || 'Internal error' }), rateLimit: false }`

`controllers` 的扫描、注册、管理配置

举例:

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

直传给[express-rate-limit](https://github.com/nfriedly/express-rate-limit)。 默认为 `false`。 

你可以通过传入 `IRateLimitConfig` 属性来激活 `api` 限流功能

**api.rateLimit.max**

- Type: `number`
- Default: `5`

指定时间范围 `windowMs` 内最大能处理的请求书，超过限制则框架直接返回 `429` 状态码。


默认值为 `5`。 设置为 `0` 可以禁用限制


**api.rateLimit.windowMs**

- Type: `number`
- Default: `60000`

限流时间窗口。配合 `max` 表达 `windowMs` 之内最大允许框架处理 `max` 个请求，时间范围 `windowMs` 超过 `max` 的请求则会直接返回 `429` 状态码。

默认值为 `60000` (1 分钟)。

**api.rateLimit.message**

- Type: `string`
- Default: `Too many requests, please try again later`

配合 `max` 使用，超过阈值的请求除了 `429` 状态码，还有这个 `message` 字段。

默认值为： `Too many requests, please try again later.`


**api.rateLimit.statusCode**

- Type: `number`
- Default: `429`

超过阈值时的状态码。

默认值为： `429`。


**api.rateLimit.headers**

- Type: `boolean`
- Default: `false`

是否在 `response` 中加入 limit header，(X-RateLimit-Limit) 和 (X-RateLimit-Remaining)。

默认值为： `false`。

**api.rateLimit.keyGenerator**

- Type: `(req: express.Request, res: express.Response) => string`
- Default: `(req: express.Request, res: express.Response) => req.ip + req.originalUrl`

API 标识生成器。用于定义/鉴别请求是否同一个来源。

默认值为： `req.ip + req.originalUrl`


**api.rateLimit.skip**

- Type: `(req: express.Request, res: express.Response) => boolean`
- Default: `(req: express.Request, res: express.Response) => false`

API 限流白名单，通过此方法，你可以让指定 API 调过限流控制。

默认值为：`false` (所有请求都会进入限流)。


**api.rateLimit.store**

- Type: `rateLimit.Store`
- Default: `MemoryStore`

存储器。用来保存请求信息。

默认值为： `MemoryStore`。

以下是其他可选外部存储器:

   - `MemoryStore`: (默认值) 简单实现。不能在分布式架构里使用。
   - [rate-limit-redis](https://github.com/wyattjoh/rate-limit-redis): 基于 `redis` 的存储器
   - [rate-limit-memcached](https://github.com/linyows/rate-limit-memcached): 基于 `memcached` 的存储器
   - [rate-limit-mongo](https://github.com/2do2go/rate-limit-mongo): 基于 `mongoDB` 的存储器
