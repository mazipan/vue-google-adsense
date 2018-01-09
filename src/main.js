import Vue from 'vue'
import App from './App.vue'
import Ads from './plugin.js'

Vue.use(require('vue-script2'))

Vue.use(Ads.VueAdsense)
Vue.use(Ads.VueInArticleAdsense)
Vue.use(Ads.VueInFeedAdsense)

new Vue({
  el: '#app',
  render: h => h(App)
})
