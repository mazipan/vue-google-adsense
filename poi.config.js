const path = require('path')
const { GenerateSW } = require('workbox-webpack-plugin')

const configWB = new GenerateSW({
  swDest: 'sw.js'
})

module.exports = {
  entry: 'src/main.js',
  output: {
    dir: 'demo',
    publicUrl: '/vue-google-adsense/',
  },
  configureWebpack(config) {
    config.plugins.push(configWB)
    return config
  }
}
