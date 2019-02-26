module.exports = {
  output: {
    format: [
      'cjs-min',
      'es-min',
      'umd-min'
    ],
    moduleName: 'VueGoogleAdsense'
  },
  input: './src/vue-google-adsense.js',
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
