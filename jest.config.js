const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig.json')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  testPathIgnorePatterns: ['node_modules', 'test/fixtures'],
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  setupFiles: ['./test/helpers.ts']
}
