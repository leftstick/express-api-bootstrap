# Contribute

## Setup env

Install dependencies after git clone the repo.

```bash
yarn
```

Create a demo project, in which we are going to use `boot` command:

```bash
mkdir test-boot
cd test-boot

# install express-api-bootstrap
yarn add <local-address-of-express-api-bootstrap>
```

> now, `boot` is available in `test-boot`.

## build

Compile `express-api-bootstrap` source:

```bash
yarn build
```

## tests

```bash
# run all tests
yarn test

# Test specified file and watch
yarn test object.test.ts

# with code coverage
yarn test --coverage
```

### debug test

- open repo via `vscode`
- open test case, for example: `test/core/helpers/object.test.ts`
- hit `F5` to start debug this specific test
