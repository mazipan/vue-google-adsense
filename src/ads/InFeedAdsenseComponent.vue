<template>
  <div :class="rootClass">
    <script2
      type="text/javascript"
      async="true"
      :src="ADS_SCRIPT" />
    <ins
      :class="insClass"
      class="adsbygoogle"
      :style="insStyle"
      :data-ad-format="dataAdFormat"
      :data-ad-layout-key="dataAdLayoutKey"
      :data-ad-client="dataAdClient"
      :data-ad-slot="dataAdSlot"
      :data-ad-test="dataAdTest"
      :data-full-width-responsive="dataFullWidthResponsive" />
    <script2
      v-if="isNonPersonalizedAds"
      type="text/javascript">
      (adsbygoogle = window.adsbygoogle || []).push({}).requestNonPersonalizedAds = 1;
    </script2>
    <script2 type="text/javascript">
      (adsbygoogle = window.adsbygoogle || []).push({});
    </script2>
  </div>
</template>

<script>
import constant from '../utils/constant'
import props from '../utils/props'
import assign from '../utils/assign'

export default {
  name: 'InFeedAdsense',
  props: assign.__assign(props, {
    dataAdFormat: {
      type: String,
      default: 'fluid'
    }
  }),
  data () {
    return {
      ADS_SCRIPT: constant.ADS_SCRIPT
    }
  }
}
</script>
