# 简介

`express-api-bootstrap` 是一个围绕 `controller` 展开， 并且提供了 类似 `springMVC` 风格的装饰器的框架。 并且伴随着超简单实用的插件系统，可以覆盖到框架的几个核心的生命周期。

`express-api-bootstrap` 也是一个基于 [express.js](https://expressjs.com/) 的 [node.js](https://nodejs.org/)框架。主要面向中小型项目的快速开发。

## 特色

- 约定优于配置
- 基于 [typescript](http://www.typescriptlang.org/) 的类型系统的编程体验
- 超爽的插件系统
- [Spring MVC](https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html) 风格装饰器
- 轻轻松松就能 调试
- 测试用例编写也很容易

## 架构

待完善

## 准备动手

### 环境准备

首先你得装好 [node.js](https://nodejs.org/) ，并且确认其版本号 >= `10`。

### 脚手架

创建一个空项目：

```bash
mkdir your-app && cd your-app
```

初始化`npm`

```bash
npm init -y
```

添加必要依赖

```bash
yarn add express-api-bootstrap tslib typescript
yarn add @types/jest jest ts-jest --dev
```

初始化 `express-api-bootstrap` 所需环境：

```bash
npx boot init
```

添加 `express-api-bootstrap` 提供的脚本到 `package.json`:

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

写第一个`controller`， `src/controllers/helloController.ts`:

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

运行 `yarn start` ，你就得到了第一个 API [http://localhost:8080/apis/hello](http://localhost:8080/apis/hello)
