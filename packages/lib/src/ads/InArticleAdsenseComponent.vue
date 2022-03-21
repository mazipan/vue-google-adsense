<template>
  <div :class="rootClass">
    <template v-if="isNewAdsCode === 'yes'">
      <scriptx type="text/javascript" async="true" :src="`${ADS_SCRIPT}?client=${dataAdClient}`" crossorigin="anonymous" />
    </template>
    <template v-if="isNewAdsCode === 'no'">
      <scriptx type="text/javascript" async="true" :src="ADS_SCRIPT" />
    </template>

    <ins
      :class="insClass"
      class="adsbygoogle"
      :style="insStyle"
      data-ad-layout="in-article"
      :data-ad-format="dataAdFormat"
      :data-ad-client="dataAdClient"
      :data-ad-slot="dataAdSlot"
      :data-ad-test="dataAdTest"
      :data-ad-region="dataAdRegion"
      :data-full-width-responsive="dataFullWidthResponsive === 'yes'"
    />
    <template v-if="isNonPersonalizedAds === 'yes'">
      <scriptx type="text/javascript">
        (adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 1; (adsbygoogle = window.adsbygoogle || []).push({});
      </scriptx>
    </template>
    <template v-if="isNonPersonalizedAds === 'no'">
      <scriptx type="text/javascript"> (adsbygoogle = window.adsbygoogle || []).push({}); </scriptx>
    </template>
  </div>
</template>

<script>
import constant from '../utils/constant'
import props from '../utils/props'
import assign from '../utils/assign'

export default {
  name: 'InArticleAdsense',
  props: assign(props, {
    dataAdFormat: {
      type: String,
      default: 'fluid',
    },
  }),
  data() {
    return {
      ADS_SCRIPT: constant.ADS_SCRIPT,
    }
  },
}
</script>
