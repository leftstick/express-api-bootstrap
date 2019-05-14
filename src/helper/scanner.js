const glob = require('glob')

/**
 * @typedef {object} ScanOptions - options for scanning
 * @property {string} pattern Pattern to be matched. Defaults to '\*\*\/\*.js'
 * @property {string} cwd The current working directory in which to search. Defaults to process.cwd()
 * @property {string} ignore Add a pattern or an array of glob patterns to exclude matches. Defaults to ['\*\*\/\_\*.js', '\*\*\/\_\*\/\*.js']
 */

/**
 * @param {ScanOptions} opts
 */
module.exports.scanAPIs = function(opts) {
  return glob.sync(opts.pattern, {
    absolute: true,
    cwd: opts.cwd || process.cwd(),
    ignore: opts.ignore || ['**/_*.js', '**/_*/*.js']
  })
}
