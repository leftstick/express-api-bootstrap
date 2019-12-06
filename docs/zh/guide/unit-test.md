# 测试用例

`express-api-bootstrap` 提供了简单的运行测试用例的策略（基于对 `jest` 的封装）

请看：

<img :src="$withBase('/unit-test.gif')" alt="unit test">

## 覆盖率

您可以通过添加 `--coverage` 在 `boot test` 后面来查看测试的覆盖率。例如 `boot test --coverage`，请看:

<img :src="$withBase('/ut-coverage.png')" alt="coverage">

## 运行指定的测试用例

```bash
boot test waService.test.ts
```

## 调试

如果你想调试指定的测试用例文件，讲下面配置加入你的 `.vscode/launch.json`:

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
      "name": "test specific",
      "program": "${workspaceFolder}/node_modules/.bin/boot",
      "args": ["test", "${relativeFile}"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "disableOptimisticBPs": true,
      "autoAttachChildProcesses": true
    }
  ]
}
```

然后打开你想要调试的测试用例文件，然后点击 `F5`(记住选择`test specific`) ，你就能如下这般愉快的调试了:

<img :src="$withBase('/ut-debug.gif')" alt="debug">