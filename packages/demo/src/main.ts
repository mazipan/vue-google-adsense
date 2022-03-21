// Import Vue and libs
import { createApp } from 'vue'

// Create Vue App
import App from './App.vue'

// ScriptX
import ScriptX from 'vue-scriptx'

// Ads
import Ads from 'vue-google-adsense'

import './registerServiceWorker'

// Router
import router from './router'

// Themes
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
const app = createApp(App)
app.use(ScriptX)
app.use(Ads.Adsense)
app.use(Ads.InArticleAdsense)
app.use(Ads.InFeedAdsense)
app.use(router)
app.use(BootstrapVue3)

// Start App
app.mount('#app')
