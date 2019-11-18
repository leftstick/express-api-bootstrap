const fs = require('fs')
const { join, dirname } = require('path')
const { createMatchPath } = require('tsconfig-paths')

const cwd = process.cwd()
const tsConfig = require(join(cwd, 'tsconfig.json'))

const paths = tsConfig.compilerOptions.paths
const finalPaths = {}
if (paths) {
  Object.keys(paths).forEach(key => {
    finalPaths[key.replace(/src/g, 'dist')] = paths[key].map(pp => pp.replace(/src/g, 'dist'))
  })
}
const matchPath = createMatchPath(join(cwd, tsConfig.compilerOptions.baseUrl || '.'), finalPaths)

module.exports = function() {
  return {
    visitor: {
      CallExpression(path, state) {
        if (path.node.callee.type === 'Identifier' && path.node.callee.name === 'require') {
          if (path.node.arguments) {
            const sourcePath = state.file.opts.filename

            path.node.arguments.forEach(arg => {
              if (isNodeModules(arg.value)) {
                return
              }
              const matched = matchPath(arg.value, undefined, undefined, ['.js'])
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
  return [`${filePath}.js`, join(filePath, 'index.js'), filePath].find(f => fs.existsSync(f))
}

function tryResolveRelativeFilePath(sourcePath, importModulePath) {
  const sourceDir = dirname(sourcePath)
  return [
    join(sourceDir, `${importModulePath}.js`),
    join(sourceDir, importModulePath, 'index.js'),
    join(sourceDir, importModulePath)
  ].find(f => fs.existsSync(f))
}
