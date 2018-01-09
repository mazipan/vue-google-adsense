import Vue from 'vue'
import App from './App.vue'
import Ads from './plugin.js'

Vue.use(require('vue-script2'))

Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)

new Vue({
  el: '#app',
  render: h => h(App)
})
