import constant from '../utils/constant'
import props from '../utils/props'

const InArticleAdsense = {
  install: Vue => {
    Vue.component('InArticleAdsense', {
      props,
      render() {
        return (
          <div class={this.rootClass}>
            <script2 type="text/javascript" async src={constant.ADS_SCRIPT} />
            <ins
              class={this.insClass + ' adsbygoogle'}
              style="display:block; text-align:center;"
              data-ad-layout="in-article"
              data-ad-format="fluid"
              data-ad-client={this.dataAdClient}
              data-ad-slot={this.dataAdSlot}
              data-ad-test={this.dataAdTest}
            />
            {this.isNonPersonalizedAds && (
              <script2 v-if="isNonPersonalizedAds">
                (adsbygoogle=window.adsbygoogle||[]).requestNonPersonalizedAds=1;
              </script2>
            )}
            <script2>
              (adsbygoogle = window.adsbygoogle || []).push({});
            </script2>
          </div>
        )
      }
    })
  }
}

export default InArticleAdsense
