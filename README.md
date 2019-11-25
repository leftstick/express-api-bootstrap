# express-api-bootstrap

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
![][david-url]
![][dt-url]
[![code style: prettier][prettier-image]][prettier-url]
![][license-url]

`express-api-bootstrap` makes it easy to create stand-alone, production-grade [express](https://expressjs.com/) based Applications that you can `just run`.

## Quick Start

```bash
# create a new directory for your app
mkdir test-boot-app
cd test-boot-app

# Generate package.json without any question
npm init -y

# add required dependencies use yarn
yarn add express-api-bootstrap

# add required dependencies use npm
npm i express-api-bootstrap tslib typescript
npm i @types/jest @types/node jest ts-jest --save-dev

# init express-api-bootstrap required env
npx boot init
```

Open and modify `package.json` with following section:

```json
{
  "scripts": {
    "start": "boot dev",
    "build": "boot build",
    "serve": "boot serve",
    "test": "boot test"
  }
}
```

Create the first controller at `src/controllers/helloController.ts` with following code:

```typescript
import { HttpRequest, RestController, GetMapping } from 'express-api-bootstrap'

@RestController()
class HelloControler {
  @GetMapping('/hello')
  async sayHello(req: HttpRequest) {
    return {
      hi: req.query.name
    }
  }
}

export default HelloControler
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
