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
      [require.resolve('@babel/plugin-proposal-decorators'), { legacy: true }],
      [require.resolve('@babel/plugin-proposal-class-properties'), { loose: true }],
      require.resolve('babel-plugin-parameter-decorator'),

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
