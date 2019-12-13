import express from 'express'
import rateLimit from 'express-rate-limit'

export class BizError extends Error {
  code: number

  constructor(code: number, message: string) {
    super(message)
    this.code = code
  }
}

export interface IPluginType {
  /**
   * configuration for api
   */
  api?: IApiConfig | false
}

export interface IApiConfig {
  /**
   * Directory where APIs should be placed.
   *
   * Default is: src/controllers
   */
  scanDir?: string
  /**
   * prefix for all APIs. Default is: /apis
   */
  prefix?: string
  /**
   * Resolver for success response.
   *
   * Should be used for customized success response structure
   */
  successResponseResolver?: (data: any) => any
  /**
   * Resolver for failure response.
   *
   * Should be used for customized failure response structure
   */
  failureResponseResolver?: (error?: BizError) => any

  /**
   * Configuration pass to express-rate-limit
   *
   * Defaults to false. Enable rateLimite by passing IRateLimitConfig option
   */
  rateLimit?: IRateLimitConfig | false
}

export interface IRateLimitConfig {
  /**
   * Max number of connections during windowMs milliseconds before sending a 429 response.
   *
   * May be a number, or a function that returns a number or a promise. If max is a function, it will be called with req and res params.
   *
   * Defaults to 5. Set to 0 to disable.
   */
  max?: number

  /**
   * How long in milliseconds to keep records of requests in memory.
   *
   * Defaults to 60000 (1 minute).
   */
  windowMs?: number

  /**
   * Error message sent to user when max is exceeded.
   *
   * May be a String, JSON object, or any other value that Express's res.send supports.
   *
   * Defaults to 'Too many requests, please try again later.'
   */
  message?: string | Object

  /**
   * HTTP status code returned when max is exceeded.
   *
   * Defaults to 429.
   *
   */
  statusCode?: number

  /**
   * Enable headers for request limit (X-RateLimit-Limit) and current usage (X-RateLimit-Remaining) on all responses and time to wait before retrying (Retry-After) when max is exceeded.
   *
   * Default to false.
   */
  headers?: boolean

  /**
   * Function used to generate keys.
   *
   * Defaults to req.ip + req.originalUrl:
   */
  keyGenerator: (req: express.Request, res: express.Response) => string

  /**
   * Function used to skip (whitelist) requests. Returning true from the function will skip limiting for that request.
   *
   * Defaults to always false (count all requests):
   */
  skip: (req: express.Request, res: express.Response) => boolean

  /**
   * The storage to use when persisting rate limit attempts.
   *
   * By default, the MemoryStore is used.
   *
   * Available data stores are:
   *
   *   - MemoryStore: (default) Simple in-memory option. Does not share state when app has multiple processes or servers.
   *   - [rate-limit-redis](https://github.com/wyattjoh/rate-limit-redis): A Redis-backed store, more suitable for large or demanding deployments.
   *   - [rate-limit-memcached](https://github.com/linyows/rate-limit-memcached): A Memcached-backed store.
   *   - [rate-limit-mongo](https://github.com/2do2go/rate-limit-mongo): A MongoDB-backed store.
   */
  store: rateLimit.Store | undefined
}
