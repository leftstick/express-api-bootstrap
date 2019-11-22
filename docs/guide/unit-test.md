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
