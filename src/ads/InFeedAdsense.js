import constant from '../utils/constant'
import props from '../utils/props'

const InFeedAdsense = {
  install: Vue => {
    Vue.component('InFeedAdsense', {
      props: Object.assign({}, props, {
        dataAdLayoutKey: {
          type: String,
          default: '-fg+5n+6t-e7+r'
        }
      }),
      render () {
        return (
          <div class={this.rootClass}>
            <script2 type="text/javascript" async src={constant.ADS_SCRIPT} />
            <ins
              class={'adsbygoogle ' + this.insClass}
              style="display:block;"
              data-ad-format="fluid"
              data-ad-layout-key={this.dataAdLayoutKey}
              data-ad-client={this.dataAdClient}
              data-ad-slot={this.dataAdSlot}
              data-ad-test={this.dataAdTest}
            />
            {this.isNonPersonalizedAds && (
              <script2 v-if="isNonPersonalizedAds">
                (adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 1;
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

export default InFeedAdsense
