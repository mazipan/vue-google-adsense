module.exports = {
  output: {
    format: [
      'cjs-min',
      'umd-min'
    ],
    moduleName: 'VueGoogleAdsense'
  },
  input: './src/vue-google-adsense.js',
  externals: ['vue'],
  plugins: {
    vue: {
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
