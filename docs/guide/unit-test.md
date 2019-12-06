# Unit Test

`express-api-bootstrap` provides way to execute your unit test. Only thing you need to do is, write your own case.

See below:

<img :src="$withBase('/unit-test.gif')" alt="unit test">

## Coverage

You are going to get code coverage by adding `--coverage` right after `boot test`, such as `boot test --coverage`, see:

<img :src="$withBase('/ut-coverage.png')" alt="coverage">

## Execute specific test files

```bash
boot test waService.test.ts
```

## Debug

In case you want to debug specific unit test file, you can add below section to your `.vscode/launch.json`:

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

And then, press `F5` in the unit test file you want to debug, see below:

<img :src="$withBase('/ut-debug.gif')" alt="debug">
