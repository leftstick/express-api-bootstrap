# Develop Plugin

Let's try to create a log plugin as tutorial.

## Initialize Plugin

**Create plugin for your repo**

create a folder under `<rootDir>/plugins`:

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

Note that, `type.ts` will be used in `.bootrc.ts` if your plugin provides specific configuration.

## Write Plugin Function

`type.ts` is used to define the specific configuration required in your plugin.

Open `plugins/log-plugin/type.ts`, with below code boilerplate:

```typescript
import { HttpRequest } from 'express-api-bootstrap'

export interface IPluginType {
  /**
   * Log configuration.
   *
   * This plugin is enable by default
   */
  log?: ILogConfig | false
}

interface ILogConfig {
  /**
   * Log formatter
   */
  logFormatter: (req: HttpRequest) => string
}
```

Open `plugins/log-plugin/index.ts`, with below code boilerplate:

```typescript
import { Express, PluginOrderEnum, IPluginFactory, HttpRequest, HttpResponse } from 'express-api-bootstrap'
import { IPluginType } from './type'

export default <IPluginFactory>(opts => {
  return {
    // define what lifecycle you want your plugin to be executed
    order: PluginOrderEnum.BEFORE_API_INIT,
    // this func is important, by which the user can use this plugin without any config
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
    // this func is the core part of your plugin
    pluginHandler(app: Express, config: IPluginType) {
      app.use((req: HttpRequest, res: HttpResponse, next: Function) => {
        if (config.log === false) {
          return next()
        }

        // i choose console here, you can use any log system you prefered
        console.log(config.log.logFormatter(req))
        next()
      })
    }
  }
})
```

Add this plugin in your `.bootrc.ts`, as below:

```typescript
import { IBootConfig } from 'express-api-bootstrap/types'

export default <IBootConfig>{
  plugins: [
     { name: 'log-plugin' }
  ]
}
```

And at last, if you want to use this plugin with configuration intelliSense, you need to:

```bash
# re-generate express-api-bootstrap/types
npx boot init
```

> `express-api-bootstrap` will scan plugins defined in `.bootrc.ts` from `node_modules/` and `<rootDir>/Plugins/`, and re-generate proper ts type for you

After that, you are going to get intelliSense like:

<img :src="$withBase('/plugin-intelliSense.gif')" alt="plugin-intelliSense">

