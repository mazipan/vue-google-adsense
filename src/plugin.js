import Adsense from './Adsense.vue'
import InArticleAdsense from './InArticleAdsense.vue'
import InFeedAdsense from './InFeedAdsense.vue'

const plugin = function(component){
  return function (Vue) {
    Vue.component(component.name, component)
  }
}

Adsense.install = plugin(Adsense)
InArticleAdsense.install = plugin(InArticleAdsense)
InFeedAdsense.install = plugin(InFeedAdsense)

export default {
  Adsense,
  InArticleAdsense,
  InFeedAdsense
}
