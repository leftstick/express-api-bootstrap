---
sidebarDepth: 3
---

# API

## 依赖注入

### Container

从 [typedi](https://github.com/typestack/typedi#usage-with-typescript) 导出的装饰器

### Service

从 [typedi](https://github.com/typestack/typedi#usage-with-typescript) 导出的装饰器

### Token

从 [typedi](https://github.com/typestack/typedi#usage-with-typescript) 导出的装饰器

### Inject

从 [typedi](https://github.com/typestack/typedi#usage-with-typescript) 导出的装饰器

## Request

### RestController

装饰器，类似 springMVC 里的 RestController, 例子:

```typescript
import { RestController } from 'express-api-bootstrap'

@RestController()
class HelloControler {}
```

### GetMapping

装饰器，把指定方法注册成为一个 `GET` 路由：

```typescript
import { RestController, GetMapping } from 'express-api-bootstrap'

@RestController()
class HelloControler {
  @GetMapping('/hello')
  say() {
    return 'hello world'
  }
}
```

通过上述代码，api `curl -X GET /apis/hello` 会被自动注册到 `express` 容器里

### PostMapping

装饰器，把指定方法注册成为一个 `POST` 路由：

```typescript
import { RestController, PostMapping, HttpRequest } from 'express-api-bootstrap'

@RestController()
class HelloControler {
  @PostMapping('/users')
  createUser(req: HttpRequest) {
    return {
      text: 'created',
      body: req.body
    }
  }
}
```

通过上述代码，api `curl -X POST /apis/users -d '{ "name": "nanfeng" }'` 会被自动注册到 `express` 容器里

### DeleteMapping

装饰器，把指定方法注册成为一个 `DELETE` 路由：

```typescript
import { RestController, DeleteMapping, HttpRequest } from 'express-api-bootstrap'

@RestController()
class HelloControler {
  @DeleteMapping('/users/:id')
  removeUser(req: HttpRequest) {
    return {
      text: `id = ${req.params.id} is removed`
    }
  }
}
```

通过上述代码，api `curl -X DELETE /apis/users/:id` 会被自动注册到 `express` 容器里

### PutMapping

装饰器，把指定方法注册成为一个 `PUT` 路由：

```typescript
import { RestController, PutMapping, HttpRequest } from 'express-api-bootstrap'

@RestController()
class HelloControler {
  @PutMapping('/users/:id')
  removeUser(req: HttpRequest) {
    return {
      text: `id = ${req.params.id} is updated`,
      body: req.body
    }
  }
}
```

通过上述代码，api `curl -X PUT /apis/users/:id -d '{ "name": "nanfeng" }'` 会被自动注册到 `express` 容器里

### PatchMapping

装饰器，把指定方法注册成为一个 `PATCH` 路由：

```typescript
import { RestController, PatchMapping, HttpRequest } from 'express-api-bootstrap'

@RestController()
class HelloControler {
  @PatchMapping('/users/:id')
  removeUser(req: HttpRequest) {
    return {
      text: `id = ${req.params.id} is updated with partial info`,
      name: req.body.name
    }
  }
}
```

通过上述代码，api `curl -X PATCH /apis/users/:id -d '{ "name": "nanfeng" }'` 会被自动注册到 `express` 容器里

### RequestQuery

装饰器，可以从 `HttpRequest` 里优雅取出 query：

```typescript
import { RestController, GetMapping, RequestQuery } from 'express-api-bootstrap'

@RestController()
class HelloControler {
  @GetMapping('/users')
  fetchUser(@RequestQuery() user: IUser) {
    return {
      text: `user fetched`,
      name: user.name,
      position: user.position
    }
  }
}

interface IUser {
  name?: string
  position?: string
}
```

通过上述代码，`curl -X GET /apis/users?name=nanfeng&position=developer` 里的 query 会被自动 解析成 `user: IUser` 对象

> `@RequestQuery()` 会被所有值 解析成 `string`，无论你的类型定义里指定了什么类型

### RequestBody

装饰器，可以从 `HttpRequest` 里优雅取出 request body：

```typescript
import { RestController, PostMapping, RequestBody } from 'express-api-bootstrap'

@RestController()
class HelloControler {
  @PostMapping('/users')
  createUser(@RequestBody() user: IUser) {
    return {
      text: `user created`,
      name: user.name,
      position: user.position
    }
  }
}

interface IUser {
  name?: string
  position?: string
}
```

通过上述代码，`curl -X POST /apis/users -d '{ "name": "nanfeng", "position": "tester" }'` 里的 request body 会被自动解析成 `user: IUser` 对象。

### RequestPathVariable

装饰器，可以从 `HttpRequest` 里优雅取出 path variable：

```typescript
import { RestController, DeleteMapping, RequestPathVariable } from 'express-api-bootstrap'

@RestController()
class HelloControler {
  @DeleteMapping('/users/:id')
  removeUser(@RequestPathVariable() user: IUser) {
    return {
      text: `user ${user.id} removed`
    }
  }
}

interface IUser {
  id?: string
}
```

通过上述代码，`curl -X DELETE /apis/users/123` 里的 path variable 会被自动解析成 `user: IUser` 对象。

### Request

装饰器，优雅获取 `HttpRequest` 对象

`req: HttpRequest` 默认会以第一个参数被传入 controller 方法，除非你在第一个参数上使用其他装饰器，例如： `RequestQuery`, `RequestBody`, `RequestPathVariable`。

那么，如果第一个参数已经被其他装饰器占用，如何获取 `HttpRequest` 呢？ 请看：

```typescript
import { RestController, GetMapping, RequestQuery, Request, HttpRequest } from 'express-api-bootstrap'

@RestController()
class HelloControler {
  @GetMapping('/users')
  fetchUser(@RequestQuery() user: IUser, @Request() req: HttpRequest) {
    return {
      text: `query by name = ${user.name}`,
      value: `${req.query.name} should be the same as ${user.name}`
    }
  }
}

interface IUser {
  name?: string
}
```

### Response

装饰器，优雅获取 `HttpResponse` 对象：

`res: HttpResponse` 默认会以第二个参数被传入 controller 方法，除非你在第二个参数上使用其他装饰器，例如： `RequestQuery`, `RequestBody`, `RequestPathVariable`。

那么，如果第二个参数已经被其他装饰器占用，如何获取 `HttpResponse` 呢？ 请看：

```typescript
import { RestController, GetMapping, Response, HttpResponse } from 'express-api-bootstrap'

@RestController()
class HelloControler {
  @GetMapping('/users')
  fetchUser(@Response() res: HttpResponse) {
    return {
      value: res.status.toString()
    }
  }
}
```
