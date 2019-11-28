# 开发插件

让我们通过一个日志插件例子来介绍如何开发插件吧

## 初始化插件

**在项目里直接写插件**

你的项目根目录下，新建 `<rootDir>/plugins`:

```bash
# ensure <rootDir>/plugins exist
mkdir plugins

# create folder for your plugin
mkdir plugins/log-plugin

# create plugin entry
touch plugins/log-plugin/index.ts

# create plugin type
touch plugins/log-plugin/type.ts
```

注意， `type.ts` 文件的内容将来会在 `.bootrc.ts` 里被用到。因为这个机制，你自定义插件所需的配置，也可以在得到类型提示。

## 写插件

`type.ts` 是用来声明你自定义插件所需配置的类型的，必须放在插件根目录，且名字也必须叫 `type.ts`

打开 `plugins/log-plugin/type.ts`, 添加如下代码:

```typescript
import { HttpRequest } from 'express-api-bootstrap'

export interface IPluginType {
  /**
   * 日志插件所需配置
   *
   * 默认启用状态。指定 false 可以关闭
   */
  log?: ILogConfig | false
}

interface ILogConfig {
  /**
   * 日志格式化方法
   */
  logFormatter: (req: HttpRequest) => string
}
```

打开 `plugins/log-plugin/index.ts` ，添加如下代码

```typescript
import { Express, PluginOrderEnum, IPluginFactory, HttpRequest, HttpResponse } from 'express-api-bootstrap'
import { IPluginType } from './type'

export default <IPluginFactory>(opts => {
  return {
    // 指定插件运行在API注册之前
    order: PluginOrderEnum.BEFORE_API_INIT,
    // 这个函数很重要，是保证插件可以0配置启动的基础，所有内容都必须提供默认值
    configHandler(config: IPluginType) {
      const opts = {
        logFormatter: (req: HttpRequest) => {
          return `INFO: ${req.ip} => ${req.path} => query:${JSON.stringify(req.query)} => body:${JSON.stringify(
            req.body
          )}`
        }
      }

      if (config.log === undefined || config.log === null) {
        return {
          log: opts
        }
      }
      
      if (config.log === false) {
        return {
          log: false
        }
      }

      if (config.log.logFormatter) {
        opts.logFormatter = config.log.logFormatter
      }

      return {
        log: opts
      }
    },
    // 这是插件执行的核心部分
    pluginHandler(app: Express, config: IPluginType) {

      // 拦截所有请求
      app.use((req: HttpRequest, res: HttpResponse, next: Function) => {
        // 当发现 日志插件 关闭 时，不做处理
        if (config.log === false) {
          return next()
        }

        // 我这里就根据传入的 logFormatter 将日志直接console输出了，你也可以换成任意你需要的形式
        console.log(config.log.logFormatter(req))
        next()
      })
    }
  }
})
```

在 `.bootrc.ts` 里，添加你刚写好的插件：

```typescript
import { IBootConfig } from 'express-api-bootstrap/types'

export default <IBootConfig>{
  plugins: [
    {
      name: 'log-plugin'
    }
  ]
}
```

如果你需要vscode的intelliSense功能，你需要执行下如下指令:

```bash
# re-generate express-api-bootstrap/types
npx boot init
```

> `express-api-bootstrap` 会从 `.bootrc.ts` 里提取 `plugins` 选项，然后再 `node_modules/` 和 `<rootDir>/Plugins/` 下扫描对应的插件，并激活


然后但你在 `.bootrc.ts` 里写这个插件的配置时，你就能得到如下效果了

<img :src="$withBase('/plugin-intelliSense.gif')" alt="plugin-intelliSense">

