var webpack = require('webpack')
var path = require('path')
var npm = require("./package.json")
const CompressionPlugin = require("compression-webpack-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: {
    VueGoogleAdsense: './src/VueGoogleAdsense.js',
    Adsense: './src/ads/Adsense.js',
    InArticleAdsense: './src/ads/InArticleAdsense.js',
    InFeedAdsense: './src/ads/InFeedAdsense.js',
    AutoAdsense: './src/ads/AutoAdsense.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: '[name].min.js',
    library: 'VueGoogleAdsense',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    jsonpFunction: 'WebpackJsonp'
  },
  mode: 'production',
  optimization: {
    minimize: true
  },
  resolve: {
    extensions: ['.js', ],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devtool: '#source-map',
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader',
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader',
      }
    ]
  },
  externals: {
    "vue": "Vue"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new VueLoaderPlugin(),
    new webpack.BannerPlugin({
      banner: `VueGoogleAdsense v${npm.version} by Irfan Maulana <github.com/mazipan>`
    }),
    new CompressionPlugin({
      algorithm: 'gzip'
    })
  ]
}
