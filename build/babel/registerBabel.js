const exclude = [
  'transform-typeof-symbol',
  'transform-unicode-regex',
  'transform-sticky-regex',
  'transform-new-target',
  'transform-modules-umd',
  'transform-modules-systemjs',
  'transform-modules-amd',
  'transform-literals'
]

module.exports = function(opts = {}) {
  const options = {
    presets: [
      require.resolve('@babel/preset-typescript'),
      [
        require.resolve('@babel/preset-env'),
        {
          targets: { node: 10 },
          loose: false,
          modules: 'commonjs',
          exclude
        }
      ]
    ],
    plugins: [
      require.resolve('@babel/plugin-syntax-dynamic-import'),
      require.resolve('@babel/plugin-proposal-optional-catch-binding'),
      [require.resolve('@babel/plugin-proposal-decorators'), { legacy: true }],
      [require.resolve('@babel/plugin-proposal-class-properties'), { loose: true }],
      require.resolve('babel-plugin-parameter-decorator'),

      require.resolve('@babel/plugin-proposal-export-namespace-from'),
      require.resolve('@babel/plugin-proposal-export-default-from'),
      [require.resolve('@babel/plugin-proposal-nullish-coalescing-operator'), { loose: false }],
      [require.resolve('@babel/plugin-proposal-optional-chaining'), { loose: false }],
      [
        require.resolve('@babel/plugin-proposal-pipeline-operator'),
        {
          proposal: 'minimal'
        }
      ],
      require.resolve('@babel/plugin-proposal-do-expressions'),
      require.resolve('@babel/plugin-proposal-function-bind'),
      require.resolve('babel-plugin-macros'),
      require.resolve('./tspath-mapping-plugin')
    ],
    extensions: opts.extensions ? opts.extensions : ['.ts', '.js'],
    babelrc: false,
    cache: false
  }

  if (opts.only) {
    options.only = opts.only
  }
  require('@babel/register')(options)
}
