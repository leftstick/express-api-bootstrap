module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'import/prefer-default-export': 'off',
    semi: 'off',
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'no-plusplus': 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'func-names': ['off'],
    'max-len': ['error', { code: 110, tabWidth: 2, ignoreComments: true }],
    'global-require': ['off'],
    'import/no-dynamic-require': ['off'],
    'no-use-before-define': ['off'],
    'no-param-reassign': ['error', { props: false }],
    'no-console': ['off'],
    yoda: ['off']
  }
}
