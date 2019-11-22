# 配置

## 配置文件

`express-api-bootstrap` 可以通过 `.bootrc.ts` 修改配置。该配置文件必须用 `typescript` 书写.

> 你可以不写这个配置文件，因为所有需要内容 `express-api-bootstrap` 都提供了预设值

`.bootrc.ts` 例子：

```typescript
import { join } from 'path'
import { BizError } from 'express-api-bootstrap'
import { IBootConfig } from 'express-api-bootstrap/types'

export default <IBootConfig>{
  server: {
    port: 9000,
    staticDir: join(__dirname, 'static')
  },
  api: {
    scanDir: join(__dirname, 'src', 'controllers'),
    prefix: '/apis',
    successResponseResolver: (data: any) => {
      return {
        code: 200,
        data
      }
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

具体配置项详见 [配置](/zh/config/)
