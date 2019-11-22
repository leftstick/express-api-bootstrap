---
sidebarDepth: 3
---

# API

## Dependency Injection

### Container

Decorator from [typedi](https://github.com/typestack/typedi#usage-with-typescript)

### Service

Decorator from [typedi](https://github.com/typestack/typedi#usage-with-typescript)

### Token

Decorator from [typedi](https://github.com/typestack/typedi#usage-with-typescript)

### Inject

Decorator from [typedi](https://github.com/typestack/typedi#usage-with-typescript)

## Request

### RestController

A decorator which used to have your class registered in di system, for example:

```typescript
import { RestController } from 'express-api-bootstrap'

@RestController()
class HelloControler {}
```

### GetMapping

A decorator which used to have your method registered as an `GET` route:

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

With above snippet, the api `curl -X GET /apis/hello` will be registered in `express` container

### PostMapping

A decorator which used to have your method registered as an `POST` route:

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

With above snippet, the api `curl -X POST /apis/users` will be registered in `express` container

### DeleteMapping

A decorator which used to have your method registered as an `DELETE` route:

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

With above snippet, the api `curl -X DELETE /apis/users` will be registered in `express` container

### PutMapping

A decorator which used to have your method registered as an `PUT` route:

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

With above snippet, the api `curl -X PUT /apis/users` will be registered in `express` container

### PatchMapping

A decorator which used to have your method registered as an `PATCH` route:

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

With above snippet, the api `curl -X PATCH /apis/users` will be registered in `express` container

### RequestQuery

A decorator which used to access query from `HttpRequest` in decent way:

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

With above snippet, query from `curl -X GET /apis/users?name=nanfeng&position=developer` will be parsed into `user: IUser` object.

> `@RequestQuery()` will parse all values as `string` even you defined it as other type.

### RequestBody

A decorator which used to access request body from `HttpRequest` in decent way:

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

With above snippet, request body from `curl -X POST /apis/users -d '{ "name": "nanfeng", "position": "tester" }'` will be parsed into `user: IUser` object.

### RequestPathVariable

A decorator which used to access request body from `HttpRequest` in decent way:

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

With above snippet, path variable from `curl -X DELETE /apis/users/123` will be parsed into `user: IUser` object.

### Request

A decorator which used to access `HttpRequest` object in decent way.

`req: HttpRequest` will be passed as first argument by default if you haven't put any decorators such as: `RequestQuery`, `RequestBody`, `RequestPathVariable`.

But if you decorate first argument with other decorator, how would you access `HttpRequest`? See below

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

A decorator which used to access `HttpResponse` object in decent way.

`res: HttpResponse` will be passed as second argument by default if you haven't put any decorators such as: `RequestQuery`, `RequestBody`, `RequestPathVariable`.

But if you decorate second argument with other decorator, how would you access `HttpRequest`? See below

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
