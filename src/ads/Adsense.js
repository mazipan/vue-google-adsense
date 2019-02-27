import constant from '../utils/constant'
import props from '../utils/props'

const Adsense = {
  install: Vue => {
    Vue.component('Adsense', {
      props,
      render() {
        return (
          <div class={this.rootClass}>
            <script2 type="text/javascript" async src={constant.ADS_SCRIPT} />
            <ins
              class={this.insClass + ' adsbygoogle'}
              style="display:block"
              data-ad-client={this.dataAdClient}
              data-ad-slot={this.dataAdSlot}
              data-ad-test={this.dataAdTest}
              data-ad-format="auto"
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

export default Adsense
