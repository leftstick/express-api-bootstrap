---
home: true
heroText: express-api-bootstrap
tagline: 超快速创建API服务
actionText: 快速开始 →
actionLink: /zh/guide/
features:
  - title: 简明
    details: API不多，复杂度不高。任何你看到的API，都能得到你理解的内容。 完善的类型系统还可以依托于vscode给您提供良好的编程体验
  - title: 约定
    details: 所有配置都是可选的。只想关注业务逻辑，快速开发原型服务，不再是梦
  - title: 完整
    details: 开发模式下可自动按需编译; 发布模式编译; 轻松调试; 轻松编写测试用例;
footer: MIT Licensed | Copyright © 2019-present Howard.Zuo
---

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
![][david-url]
![][dt-url]
[![code style: prettier][prettier-image]][prettier-url]
![][license-url]

`express-api-bootstrap` 受启发于[springboot](https://spring.io/projects/spring-boot/)，基于[express](https://expressjs.com/)实现。使开发 API service 更轻松。你要做的，就是关注业务，然后运行。剩下的，我们为您搞定

## 快速开始

1分15秒创建你的第一个API服务

<img :src="$withBase('/quickdemo.gif')" alt="demo">

### 环境搭建

```bash
# 创建新项目目录
mkdir test-boot-app
cd test-boot-app

# 无交互模式生成一个基本的package.json
npm init -y

# 用 yarn 添加依赖
yarn add express-api-bootstrap

# 用 npm 添加依赖
npm i express-api-bootstrap --save

# 初始化 express-api-bootstrap 所需环境
npx boot init
```

打开 `package.json`，添加/修改如下片段：

```bash
{
  "scripts": {
    "start": "boot dev",
    "build": "boot build",
    "serve": "boot serve",
    "test": "boot test"
  }
}
```

创建文件： `src/controllers/helloController.ts`，编写如下内容：

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

执行 `yarn start` ，然后你的第一个 API [http://localhost:8080/apis/hello](http://localhost:8080/apis/hello) 就完成了

## 如何贡献？

看 [贡献代码](/zh/guide#contribute)

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
