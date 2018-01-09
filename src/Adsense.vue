<template>
  <div :class="rootClass">
    <script2 async :src="ADS_SCRIPT"></script2>
    <ins class="adsbygoogle"
        style="display:block"
        :data-ad-client="dataAdClient"
        :data-ad-slot="dataAdSlot"
        data-ad-format="auto"></ins>
  </div>
</template>

<script>
export default {
  name: 'Adsense',
  props: {
    rootClass: {
      type: String,
      default: 'adswrapper VueAdsense'
    },
    dataAdClient: {
      type: String,
      default: ''
    },
    dataAdSlot: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      ADS_SCRIPT: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
    }
  },
  mounted () {
    (adsbygoogle = window.adsbygoogle || []).push({});
  }
}
</script>
