<template>
  <div :class="rootClass">
    <Script2
      type="text/javascript"
      async
      :src="ADS_SCRIPT" />
    <ins
      class="adsbygoogle"
      style="display:block; text-align:center;"
      data-ad-layout="in-article"
      data-ad-format="fluid"
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
  name: 'InArticleAdsense',
  mixins: [mixin]
}
</script>
