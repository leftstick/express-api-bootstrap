# Contribute

## Setup env

Install dependencies after git clone the repo.

```bash
yarn
```

Link `express-api-bootstrap` globally.

```bash
yarn link
```

> now, `boot` is available at your working system.

## watch build

Monitor file changes and transform with `rollup`.

```bash
yarn build --watch
```

## tests

```bash
# run all tests
yarn test

# Test specified file and watch
yarn test cal.test.ts

# with code coverage
yarn test --coverage
```

### debug test

- open repo via `vscode`
- open test case, for example: `test/helpers/cal.test.ts`
- hit `F5` to start debug this specific test
