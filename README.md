# express-api-bootstrap

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
![][david-url]
![][dt-url]
[![code style: prettier][prettier-image]][prettier-url]
![][license-url]

`express-api-bootstrap` makes it easy to create stand-alone, production-grade [express](https://expressjs.com/) based Applications that you can "just run".

## Features

- Possible to create API server with zore configuration
- [typescript](http://www.typescriptlang.org/) working experience
- Damn easy plugin system
- [Spring MVC](https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html) like API interface

## Install

```bash
yarn add express-api-bootstrap
```

## Usage

Add below config to your `package.json`

```bash
{
  "scripts": {
    "start": "boot dev",
    "build": "boot build",
    "serve": "boot serve"
  }
}
```

Create the first controller at `src/controllers/helloController.ts` with following code:

```typescript
import { HttpRequest, RestController, GetMapping } from 'express-api-bootstrap'

@RestController()
export default class HelloControler {
  @GetMapping('/hello')
  async sayHello(req: HttpRequest) {
    return {
      hi: req.query.name
    }
  }
}
```

Run `yarn start` to, and you will see the first API at [http://localhost:8080/apis/hello](http://localhost:8080/apis/hello)

## Want to contribute?

see [contributing](https://github.com/leftstick/express-api-bootstrap/blob/master/CONTRIBUTING.md)

## LICENSE

[MIT License](https://raw.githubusercontent.com/leftstick/express-api-bootstrap/master/LICENSE)

[npm-url]: https://npmjs.org/package/express-api-bootstrap
[npm-image]: https://badge.fury.io/js/express-api-bootstrap.png
[david-url]: https://david-dm.org/leftstick/express-api-bootstrap.png
[travis-image]: https://www.travis-ci.org/leftstick/express-api-bootstrap.svg?branch=master
[travis-url]: https://travis-ci.com/leftstick/express-api-bootstrap
[coverage-image]: https://coveralls.io/repos/github/leftstick/express-api-bootstrap/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/leftstick/express-api-bootstrap
[dt-url]: https://img.shields.io/npm/dt/express-api-bootstrap.svg
[license-url]: https://img.shields.io/github/license/leftstick/express-api-bootstrap
[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
[prettier-url]: https://github.com/prettier/prettier
