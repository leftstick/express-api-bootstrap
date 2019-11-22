# Directory and Convention

The directory structure of an application is as follows:

```
.
├── dist/                           // build output directory
└── src/                            // source directory, mandatory
    ├── controllers/                // .ts files in this directory will be scanned as API controller automatically
        └── helloController.ts
├── test/                           // .test.ts files in this directory will be scanned as unit test cases
    └── hello.test.ts
├── .bootrc.ts                      // configuration file, optional
└── package.json
```

## Typescript Grammar

Configuration files, source code are registered in real time via `@babel/register`, which means ES6, typescript grammar is available for you.
