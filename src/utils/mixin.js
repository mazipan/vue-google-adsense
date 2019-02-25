import constant from './constant'

export default {
  props: {
    rootClass: {
      type: String,
      default: 'adswrapper'
    },
    insClass: {
      type: String,
      default: ''
    },
    isNonPersonalizedAds: {
      type: Boolean,
      default: false
    },
    dataAdClient: {
      type: String,
      default: ''
    },
    dataAdSlot: {
      type: String,
      default: ''
    },
    dataAdTest: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      ADS_SCRIPT: constant.ADS_SCRIPT
    }
  }
}
