<template>
  <div :class="rootClass">
    <script2 async :src="ADS_SCRIPT"></script2>
    <ins class="adsbygoogle"
        style="display:block; text-align:center;"
        data-ad-layout="in-article"
        data-ad-format="fluid"
        :data-ad-client="dataAdClient"
        :data-ad-slot="dataAdSlot"></ins>
  </div>
</template>

<script>
export default {
  name: 'InArticleAdsense',
  props: {
    rootClass: {
      type: String,
      default: 'adswrapper VueInArticleAdsense'
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
    if(window.adsbygoogle) (adsbygoogle = window.adsbygoogle || []).push({});
  }
}
</script>
