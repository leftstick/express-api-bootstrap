# Debug

`express-api-bootstrap` supports debug mode via [vscode](https://code.visualstudio.com/).

Create `.vscode/launch.json` to your repo with below content:

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

And then, press `F5` to start debug your app as below:

<img :src="$withBase('/debug.gif')" alt="debug">
