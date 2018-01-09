<template>
  <div :class="rootClass">
    <script2 async :src="ADS_SCRIPT"></script2>
    <ins class="adsbygoogle"
        style="display:block"
        data-ad-format="fluid"
        :data-ad-layout-key="dataAdLayoutKey"
        :data-ad-client="dataAdClient"
        :data-ad-slot="dataAdSlot"></ins>
  </div>
</template>

<script>
export default {
  name: 'InFeedAdsense',
  props: {
    rootClass: {
      type: String,
      default: 'adswrapper VueInFeedAdsense'
    },
    dataAdClient: {
      type: String,
      default: ''
    },
    dataAdSlot: {
      type: String,
      default: ''
    },
    dataAdLayoutKey: {
      type: String,
      default: '-fg+5n+6t-e7+r'
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
