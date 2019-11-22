# 调试

`express-api-bootstrap` 支持使用 [vscode](https://code.visualstudio.com/) 调试代码。

在项目里创建 `.vscode/launch.json`：

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "boot debug",
      "program": "${workspaceFolder}/node_modules/.bin/boot",
      "args": ["dev"],
      "cwd": "${workspaceFolder}",
      "console": "integratedTerminal",
      "autoAttachChildProcesses": true
    }
  ]
}
```

然后，点 `F5` 就可以开始调试了：

<img :src="$withBase('/debug.gif')" alt="debug">
