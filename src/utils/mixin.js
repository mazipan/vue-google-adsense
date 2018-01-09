import constant from '@/utils/constant.js'
// import init from '@/utils/init.js'

export default {
  props: {
    rootClass: {
      type: String,
      default: 'adswrapper'
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
      ADS_SCRIPT: constant.ADS_SCRIPT
    }
  },
  mounted () {
    // init.initAds()
  }
}
