export default {
  rootClass: {
    type: String,
    default: 'adswrapper',
  },
  insClass: {
    type: String,
    default: '',
  },
  insStyle: {
    type: String,
    default: 'display:block;',
  },
  dataAdClient: {
    type: String,
    default: '',
  },
  dataAdSlot: {
    type: String,
    default: '',
  },
  dataAdLayoutKey: {
    type: String,
    default: '-fg+5n+6t-e7+r',
  },
  dataAdTest: {
    type: String,
    default: '',
  },
  dataAdFormat: {
    type: String,
    default: 'auto',
  },
  isNonPersonalizedAds: {
    type: String,
    default: 'no',
  },
  dataFullWidthResponsive: {
    type: String,
    default: 'no',
  },
  dataAdRegion: {
    type: String,
    default: '',
  },
  // Read: https://support.google.com/adsense/answer/10627874
  // Issue: https://github.com/mazipan/vue-google-adsense/issues/164
  isNewAdsCode: {
    type: String,
    default: 'no',
  },
}
