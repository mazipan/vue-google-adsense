<template>
  <div :class="rootClass">
    <script2 type="text/javascript" async :src="ADS_SCRIPT"></script2>
    <ins class="adsbygoogle"
        style="display:block; text-align:center;"
        data-ad-layout="in-article"
        data-ad-format="fluid"
        :data-ad-layout-key="dataAdLayoutKey"
        :data-ad-client="dataAdClient"
        :data-ad-slot="dataAdSlot"
        :data-ad-test="dataAdTest"></ins>
    <script2>
      (adsbygoogle = window.adsbygoogle || []).push({});
    </script2>
  </div>
</template>

<script>
import mixin from '@/utils/mixin.js'

export default {
  name: 'InArticleAdsense',
  mixins: [mixin]
}
</script>
