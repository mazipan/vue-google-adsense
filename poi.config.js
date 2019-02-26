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
  babel: {
    jsx: 'vue'
  },
  configureWebpack(config) {
    config.plugins.push(configWB)
    return config
  }
}
