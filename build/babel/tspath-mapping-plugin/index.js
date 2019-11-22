const fs = require('fs')
const { join, dirname } = require('path')
const { createMatchPath } = require('tsconfig-paths')
const { builtinModules } = require('module')

const cwd = process.cwd()
const tsConfig = require(join(cwd, 'tsconfig.json'))
const finalPaths = getTsPaths()

const matchPath = createMatchPath(join(cwd, tsConfig.compilerOptions.baseUrl || '.'), finalPaths)

module.exports = function() {
  return {
    visitor: {
      CallExpression(path, state) {
        if (path.node.callee.type === 'Identifier' && path.node.callee.name === 'require') {
          if (path.node.arguments) {
            const sourcePath = state.file.opts.filename

            path.node.arguments.forEach(arg => {
              // node builtin modules
              if (builtinModules.includes(arg.value)) {
                return
              }
              // modules installed in node_modules
              if (isNodeModules(arg.value)) {
                return
              }
              const matched = matchPath(arg.value, undefined, undefined, ['.js', '.ts'])
              if (matched) {
                const matchedPath = tryPaths(matched)
                if (matchedPath) {
                  arg.value = matchedPath
                  return
                }
              }
              arg.value = tryResolveRelativeFilePath(sourcePath, arg.value)
            })
          }
        }
      }
    }
  }
}

function isNodeModules(filePath) {
  return fs.existsSync(join(cwd, 'node_modules', filePath))
}

function tryPaths(filePath) {
  return [
    `${filePath}.js`,
    `${filePath}.ts`,
    join(filePath, 'index.js'),
    join(filePath, 'index.ts'),
    filePath
  ].find(f => fs.existsSync(f))
}

function tryResolveRelativeFilePath(sourcePath, importModulePath) {
  const sourceDir = dirname(sourcePath)
  return [
    join(sourceDir, `${importModulePath}.js`),
    join(sourceDir, `${importModulePath}.ts`),
    join(sourceDir, importModulePath, 'index.js'),
    join(sourceDir, importModulePath, 'index.ts'),
    join(sourceDir, importModulePath)
  ].find(f => fs.existsSync(f))
}

function getTsPaths() {
  const paths = tsConfig.compilerOptions.paths
  if (process.env.NODE_ENV === 'development') {
    return paths
  }
  const finalPaths = {}
  if (paths) {
    Object.keys(paths).forEach(key => {
      finalPaths[key.replace(/src/g, 'dist')] = paths[key].map(pp => pp.replace(/src/g, 'dist'))
    })
  }
  return finalPaths
}
