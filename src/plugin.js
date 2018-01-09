import Adsense from './Adsense.vue'
import InArticleAdsense from './InArticleAdsense.vue'
import InFeedAdsense from './InFeedAdsense.vue'

const pluginAdsense = {
  install: Vue => {
    Vue.component(Adsense.name, Adsense)
  }
}
const pluginInArticleAdsense = {
  install: Vue => {
    Vue.component(InArticleAdsense.name, InArticleAdsense)
  }
}
const pluginInFeedAdsense = {
  install: Vue => {
    Vue.component(InFeedAdsense.name, InFeedAdsense)
  }
}

Adsense.install = pluginAdsense.install
InArticleAdsense.install = pluginInArticleAdsense.install
InFeedAdsense.install = pluginInFeedAdsense.install

export default {
  Adsense,
  InArticleAdsense,
  InFeedAdsense
}
