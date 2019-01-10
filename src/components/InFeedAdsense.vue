<template>
  <div :class="rootClass">
    <Script2
      type="text/javascript"
      async
      :src="ADS_SCRIPT" />
    <ins
      class="adsbygoogle"
      style="display:block"
      data-ad-format="fluid"
      :data-ad-layout-key="dataAdLayoutKey"
      :data-ad-client="dataAdClient"
      :data-ad-slot="dataAdSlot"
      :data-ad-test="dataAdTest" />
    <Script2>
      (adsbygoogle = window.adsbygoogle || []).push({});
    </Script2>
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
