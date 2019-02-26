module.exports = {
  output: {
    format: [
      'cjs-min',
      'umd-min'
    ],
    moduleName: 'VueGoogleAdsense'
  },
  input: [
    './src/VueGoogleAdsense.js',
    './src/ads/Adsense.js',
    './src/ads/InArticleAdsense.js',
    './src/ads/InFeedAdsense.js'
  ],
  externals: ['vue', 'vue-script2'],
  plugins: {
    vue: {
      normalizer: false,
      css: false,
      template: {
        isProduction: true,
        compilerOptions: {
          preserveWhitespace: false
        }
      }
    }
  }
};
