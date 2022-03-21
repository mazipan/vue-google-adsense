import AdsenseComponent from './AdsenseComponent.vue'

const Adsense = {
  install: (app, options) => {
    app.component('Adsense', AdsenseComponent)
  },
}

export default Adsense
