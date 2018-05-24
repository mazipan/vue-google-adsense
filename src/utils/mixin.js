import constant from '@/utils/constant.js'

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
