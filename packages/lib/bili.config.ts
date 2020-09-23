import { Config } from 'bili'

const config: Config = {
  input: [
    'src/VueGoogleAdsense.ts',
    'src/ads/Adsense.ts',
    'src/ads/AutoAdsense.ts',
    'src/ads/InArticleAdsense.ts',
    'src/ads/InFeedAdsense.ts'
  ],
  plugins: {
    vue: true
  }
}

export default config
