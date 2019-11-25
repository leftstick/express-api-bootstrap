import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

export interface IPluginType {
  /**
   * requestParser config.
   *
   * Enable by default
   */
  requestParser: IRequestParserConfig | false
}

interface IRequestParserConfig {
  /**
   *
   *
   *
   * @param parsers
   */
  config(app: express.Express, parsers: IParsers): void
}

export interface IParsers {
  bodyParser: {
    json: (options?: bodyParser.OptionsJson) => any
    raw: (options?: bodyParser.Options) => any
    text: (options?: bodyParser.OptionsText) => any
    urlencoded: (options?: bodyParser.OptionsUrlencoded) => any
  }
  cookieParser: (secret?: string | string[], options?: cookieParser.CookieParseOptions) => express.RequestHandler
}
