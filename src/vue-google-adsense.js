import constant from './utils/constant';

const props = {
  rootClass: {
    type: String,
    default: 'adswrapper'
  },
  insClass: {
    type: String,
    default: ''
  },
  isNonPersonalizedAds: {
    type: Boolean,
    default: false
  },
  dataAdClient: {
    type: String,
    default: ''
  },
  dataAdSlot: {
    type: String,
    default: ''
  },
  dataAdTest: {
    type: String,
    default: ''
  }
};

const Adsense = {
  install: Vue => {
    Vue.component('Adsense', {
      props,
      render: function(h) {
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
        );
      }
    });
  }
};
const InArticleAdsense = {
  install: Vue => {
    Vue.component('InArticleAdsense', {
      props,
      render: function(h) {
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
        );
      }
    });
  }
};
const InFeedAdsense = {
  install: Vue => {
    Vue.component('InFeedAdsense', {
      props: Object.assign({}, props, {
        dataAdLayoutKey: {
          type: String,
          default: '-fg+5n+6t-e7+r'
        }
      }),
      render: function(h) {
        return (
          <div class={this.rootClass}>
            <script2 type="text/javascript" async src={constant.ADS_SCRIPT} />
            <ins
              class={this.insClass + ' adsbygoogle'}
              style="display:block;"
              data-ad-format="fluid"
              data-ad-layout-key={this.dataAdLayoutKey}
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
        );
      }
    });
  }
};

export default {
  Adsense,
  InArticleAdsense,
  InFeedAdsense
};
