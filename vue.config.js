const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)
module.exports = {
  lintOnSave: true,
  chainWebpack(config) {
    config.resolve.symlinks(true)
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
  },
}
