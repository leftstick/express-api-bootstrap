# Introduction

`express-api-bootstrap` is a controller-based framework that supports springMVC flavor decorators, `@RestController`, `@GetMapping`. A dead simple plugin system that covers core lifecycles while from launching to application running.

`express-api-bootstrap` is a [express.js](https://expressjs.com/) based node framework. It should be used in small/medium-sized projects.

## Features

- Convention over configuration
- Type system coding experience based on [typescript](http://www.typescriptlang.org/)
- Damn easy plugin system
- [Spring MVC](https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html) like API interface
- Debug is easy via vscode
- Write/Execute unit-test is easy

## Architecture

TBD

## Getting Started

### Environmental preparation

First you should have [node.js](https://nodejs.org/) installed, and make sure the version >= `10`.


### Boilerplate

Create an empty directory for your application:

```bash
mkdir your-app && cd your-app
```

Init npm env:

```bash
npm init -y
```

Add required dependencies:

```bash
yarn add express-api-bootstrap tslib typescript
yarn add @types/jest jest ts-jest --dev
```

Init `express-api-bootstrap` required env:

```bash
npx boot init
```

Add `express-api-bootstrap` provided scripts to your `package.json`:

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

Create your first controller at `src/controllers/helloController.ts` with following code:

```typescript
import { HttpRequest, RestController, GetMapping } from 'express-api-bootstrap'

@RestController()
class HelloControler {

  @GetMapping('/hello')
  sayHello(req: HttpRequest) {
    return {
      say: `Hi, ${req.query.name}`
    }
  }

}

export default HelloControler
```

Run `yarn start` to, and you will see the first API at [http://localhost:8080/apis/hello](http://localhost:8080/apis/hello)

