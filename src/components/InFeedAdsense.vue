<template>
  <div :class="rootClass">
    <script2
      type="text/javascript"
      async
      :src="ADS_SCRIPT" />
    <ins
      class="adsbygoogle"
      :class="insClass"
      style="display:block"
      data-ad-format="fluid"
      :data-ad-layout-key="dataAdLayoutKey"
      :data-ad-client="dataAdClient"
      :data-ad-slot="dataAdSlot"
      :data-ad-test="dataAdTest" />
    <script2 v-if="isNonPersonalizedAds">
      (adsbygoogle=window.adsbygoogle||[]).requestNonPersonalizedAds=1;
    </script2>
    <script2>
      (adsbygoogle = window.adsbygoogle || []).push({});
    </script2>
  </div>
</template>

<script>
import mixin from '../utils/mixin'

export default {
  name: 'InFeedAdsense',
  mixins: [mixin],
  props: {
    dataAdLayoutKey: {
      type: String,
      default: '-fg+5n+6t-e7+r'
    }
  }
}
</script>
