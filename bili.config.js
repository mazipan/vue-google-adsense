module.exports = {
	format: ['umd'],
  input: 'src/plugin.js',
  filename: 'vuegoogleadsense.dist.js',
  moduleName: 'VueGoogleAdsense',
  plugins: [
    'vue',
  ],
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
