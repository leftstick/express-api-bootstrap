const glob = require('glob')
const { resolve } = require('path')
const { readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync, unlinkSync } = require('fs')
const del = require('del')
const template = require('lodash.template')

const rootDir = resolve(__dirname, '..')
const genDir = resolve(rootDir, 'src', 'types', 'generates')

function ensureNewDir(dir) {
  if (existsSync(dir)) {
    del.sync(dir)
  }
  mkdirSync(dir)
}

ensureNewDir(genDir)

function retrieveInternalPluginPaths() {
  const cwd = resolve(rootDir, 'src/plugins')
  const destPluginsDir = resolve(rootDir, 'src/types/generates/plugins')
  const result = glob.sync('*/type.ts', {
    cwd
  })

  ensureNewDir(destPluginsDir)

  return result.map(r => {
    const destReltivePath = r.replace('/', '_')
    copyFileSync(resolve(cwd, r), resolve(destPluginsDir, destReltivePath))
    return `./plugins/${destReltivePath.replace('.ts', '')}`
  })
}

function genBootConfig(pluginPaths) {
  const bootrcTypeSrc = resolve(rootDir, 'src', 'templates', 'bootrc.ts.vm')
  const bootrcTypeDest = resolve(rootDir, 'src', 'types', 'generates', 'bootrc.ts')

  const bootrcTypeContent = readFileSync(bootrcTypeSrc, { encoding: 'utf8' })

  const compiled = template(bootrcTypeContent)

  const result = compiled({
    pluginPaths
  })

  writeFileSync(bootrcTypeDest, result, { encoding: 'utf8' })
  console.log('src/types/generates/bootrc.ts generated')
}

function genIndexType() {
  const indexTypeSrc = resolve(rootDir, 'src', 'templates', 'index.ts.vm')
  const indexTypeDest = resolve(rootDir, 'src', 'types', 'index.ts')

  if (existsSync(indexTypeDest)) {
    del.sync(indexTypeDest)
  }

  const indexTypeContent = readFileSync(indexTypeSrc, { encoding: 'utf8' })

  const compiled = template(indexTypeContent)

  const rawTypePaths = [
    ...glob.sync('generates/*.ts', {
      cwd: resolve(rootDir, 'src', 'types')
    }),
    ...glob.sync('*.ts', {
      cwd: resolve(rootDir, 'src', 'types')
    })
  ]

  const result = compiled({
    typePaths: rawTypePaths.map(fp => fp.replace('.ts', '')).map(fp => `./${fp}`)
  })

  writeFileSync(indexTypeDest, result, { encoding: 'utf8' })
  console.log('src/types/index.ts generated')
}

const pluginPaths = retrieveInternalPluginPaths()

genBootConfig(pluginPaths)

genIndexType()
