<template>
  <div :class="rootClass">
    <script2
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
    <script2>
      (adsbygoogle = window.adsbygoogle || []).push({});
    </script2>
  </div>
</template>

<script>
import mixin from '../utils/mixin'

export default {
  name: 'InArticleAdsense',
  mixins: [mixin]
}
</script>
