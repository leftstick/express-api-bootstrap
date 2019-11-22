# 目录及约定

固定目录结构如下：

```
.
├── dist/                           // 固定输出目录，不可修改
└── src/                            // 源码目录，不可修改
    ├── controllers/                // 在这个目录下的所有 .ts 文件会被当做Controller自动扫描进入容器
        └── helloController.ts
├── test/                           // 在这个目录下的所有 .test.ts 文件会被当做测试用例执行
    └── hello.test.ts
├── .bootrc.ts                      // 配置文件，可选
└── package.json
```

## Typescript 语法

配置文件，源码都会在运行时由 `@babel/register` 加载转换，所以您可以敞开了写 `typescript` 或者 `ES6`
