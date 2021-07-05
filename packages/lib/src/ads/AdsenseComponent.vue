<template>
  <div :class="rootClass">
    <script2 type="text/javascript" async="true" :src="ADS_SCRIPT" />
    <ins
      :class="insClass"
      class="adsbygoogle"
      :style="insStyle"
      :data-ad-client="dataAdClient"
      :data-ad-slot="dataAdSlot"
      :data-ad-test="dataAdTest"
      :data-ad-format="dataAdFormat"
      :data-ad-region="dataAdRegion"
      :data-full-width-responsive="dataFullWidthResponsive === 'yes'"
    />
    <template v-if="isNonPersonalizedAds === 'yes'">
      <script2 type="text/javascript">
        (adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 1; (adsbygoogle = window.adsbygoogle || []).push({});
      </script2>
    </template>
    <template v-if="isNonPersonalizedAds === 'no'">
      <script2 type="text/javascript"> (adsbygoogle = window.adsbygoogle || []).push({}); </script2>
    </template>
  </div>
</template>

<script>
import constant from '../utils/constant'
import props from '../utils/props'

export default {
  name: 'Adsense',
  props,
  data() {
    return {
      ADS_SCRIPT: constant.ADS_SCRIPT,
    }
  },
}
</script>
