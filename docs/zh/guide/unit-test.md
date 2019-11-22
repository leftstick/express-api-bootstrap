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
