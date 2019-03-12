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
      :data-ad-format="dataAdFormat" />
    <script2 type="text/javascript" v-if="isNonPersonalizedAds">
      (adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 1;
    </script2>
    <script2 type="text/javascript" >
      (adsbygoogle = window.adsbygoogle || []).push({});
    </script2>
  </div>
</template>

<script>
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
