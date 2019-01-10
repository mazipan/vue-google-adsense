import Vue from 'vue'
import App from './App.vue'
import Ads from './plugin.js'

Vue.use(require('vue-script2'))

Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)

/* global process */
if (process.env.NODE_ENV === 'production') {
  require('./pwa')
} else {
  Vue.config.devtools = true
}

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: h => h(App)
})
