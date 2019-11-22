# Configuration

## Configuration File

`express-api-bootstrap` can be configured via `.bootrc.ts`. It must be written in the `typescript`.

> You can just ignore it, since everything required by `express-api-bootstrap` have conventional value.


`.bootrc.ts` Example:

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

For details, see [Configuration](/config/)