require('@babel/register')({
  presets: [
    require.resolve('@babel/preset-typescript'),
    [
      require.resolve('babel-preset-umi'),
      {
        env: { targets: { node: 10 } },
        transformRuntime: false
      }
    ]
  ],
  extensions: ['.ts', '.js'],
  ignore: [
    function(filepath) {
      // console.log(filepath)
      return false
    }
  ],
  babelrc: false,
  cache: false
})
