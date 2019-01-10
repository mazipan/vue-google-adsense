<template>
  <div :class="rootClass">
    <Script2
      type="text/javascript"
      async
      :src="ADS_SCRIPT" />
    <ins
      class="adsbygoogle"
      style="display:block"
      :data-ad-client="dataAdClient"
      :data-ad-slot="dataAdSlot"
      :data-ad-test="dataAdTest"
      data-ad-format="auto" />
    <Script2>
      (adsbygoogle = window.adsbygoogle || []).push({});
    </Script2>
  </div>
</template>

<script>
import mixin from '../utils/mixin'

export default {
  name: 'Adsense',
  mixins: [mixin]
}
</script>
