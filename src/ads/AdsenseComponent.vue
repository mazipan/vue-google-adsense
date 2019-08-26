<template>
  <div :class="rootClass">
    <script2
      type="text/javascript"
      async="true"
      :src="ADS_SCRIPT" />
    <ins
      :class="insClass"
      class="adsbygoogle"
      style="display:block;"
      :data-ad-client="dataAdClient"
      :data-ad-slot="dataAdSlot"
      :data-ad-test="dataAdTest"
      :data-ad-format="dataAdFormat"
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

      // (adsbygoogle = window.adsbygoogle || []).push({
      //   google_ad_client: "{{ dataAdClient }}",
      //   enable_page_level_ads: true
      // }).requestNonPersonalizedAds = 1;
import constant from '../utils/constant'
import props from '../utils/props'

export default {
  name: 'Adsense',
  props,
  data () {
    return {
      ADS_SCRIPT: constant.ADS_SCRIPT
    }
  }
}
</script>
