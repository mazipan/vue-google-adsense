# 💰 Vue Google Adsense

![License](https://img.shields.io/github/license/mazipan/vue-google-adsense.svg?maxAge=3600) [![Size on Bundlephobia](https://badgen.net/bundlephobia/minzip/vue-google-adsense)](https://bundlephobia.com/result?p=vue-google-adsense) [![install size](https://packagephobia.com/badge?p=vue-google-adsense)](https://packagephobia.com/result?p=vue-google-adsense) [![Build and Deploy](https://github.com/mazipan/vue-google-adsense/actions/workflows/deploy.yml/badge.svg)](https://github.com/mazipan/vue-google-adsense/actions/workflows/deploy.yml) [![version](https://img.shields.io/npm/v/vue-google-adsense.svg?maxAge=60)](https://www.npmjs.com/package/vue-google-adsense) ![downloads](https://img.shields.io/npm/dt/vue-google-adsense.svg?maxAge=3600) [![All Contributors](https://img.shields.io/github/contributors/mazipan/vue-google-adsense)](#contributors)

> Vue.js Google Adsense Component with InFeed and InArticle Ads support

## 🎉 Demo

https://mazipan.github.io/vue-google-adsense/

## :question: What is In Feed and In Article Ads?

At least there is three (3) type ads in Google Adsense :

- **Responsive Ads**: A simple way to get ads on your page. Choose the size, placement and style you want to display. [Learn more](https://support.google.com/adsense/answer/6002575?hl=en_GB)

- **In Article Ads**: Ads that fit seamlessly in between the paragraphs of your pages for an enhanced reading experience. [Learn more](https://support.google.com/adsense/answer/7320112?hl=en_GB)

- **In Feed Ads**: Ads that flow naturally inside a list of articles or products on your site, offering a great user experience. [Learn more](https://support.google.com/adsense/answer/7171765?hl=en_GB)

## 🚀 Getting started

### Installation

Need dependencies [vue-script2](https://github.com/taoeffect/vue-script2), you need to install :

```javascript
npm install vue-script2 vue-google-adsense --save
```

### Use in `main.js`

```javascript
import Ads from 'vue-google-adsense'

Vue.use(require('vue-script2'))

Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)
```

### Use partial import

Import only `AdsType` you need

```javascript
import Adsense from 'vue-google-adsense/dist/Adsense.min.js'
import InArticleAdsense from 'vue-google-adsense/dist/InArticleAdsense.min.js'
import InFeedAdsense from 'vue-google-adsense/dist/InFeedAdsense.min.js'

Vue.use(require('vue-script2'))

Vue.use(Adsense)
Vue.use(InArticleAdsense)
Vue.use(InFeedAdsense)
```

### Usage in Nuxt.js

Create file `plugins/vue-google-adsense.js`, with code :

 ```javascript
import Vue from 'vue'
import Ads from 'vue-google-adsense'

Vue.use(require('vue-script2'))

Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)
```

Then update your `nuxt.config.js`, with code :

```javascript
module.exports = {
  plugins: [
    { src: '~/plugins/vue-google-adsense', ssr: false }
  ]
}
```

### Usage in Gridsome

Insert these code in `src/main.js`:

 ```javascript
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  if (isClient) {
	Vue.use(require('vue-script2'));
	Vue.use(require('vue-google-adsense/dist/Adsense.min.js'));
	Vue.use(require('vue-google-adsense/dist/InArticleAdsense.min.js'));
	Vue.use(require('vue-google-adsense/dist/InFeedAdsense.min.js'));
  }
}
```

### Template

VueAdsense Template :

```html
<Adsense
    data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
    data-ad-slot="1234567890">
</Adsense>
```

VueInArticleAdsense Template :

```html
<InArticleAdsense
    data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
    data-ad-slot="1234567890">
</InArticleAdsense>
```

VueInFeedAdsense Template :

```html
<InFeedAdsense
    data-ad-layout-key="-fg+5n+6t-e7+r"
    data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
    data-ad-slot="1234567890">
</InFeedAdsense>
```
### Auto Ads Usage

```js
import Vue from 'vue'
import Ads from 'vue-google-adsense'

Vue.use(require('vue-script2'))

Vue.use(Ads.AutoAdsense, { adClient: 'YOUR_GOOGLE_AD_CLIENT', isNewAdsCode: true })
```

## :gift: Available Props

| Attribute          | Type        |Default       | Description                          	  |
|------------------- |------------ |--------------|---------------------------------------	|
| `root-class`         | String      | `adswrapper` | Class for fill in wrapper block          |
| `ins-class`          | String      | `empty`      | Class for fill in `ins` tag              |
| `ins-style`          | String      | `display:block;` | Style for fill in `ins` tag          |
| `data-ad-client`     | String      | `empty`      | Attribute `data-ad-client` from adsense |
| `data-ad-slot`       | String      | `empty`      | Attribute `data-ad-slot` from adsense   |
| `data-ad-layout-key` | String      | `empty`      | Attribute `data-ad-layout-key` from adsense |
| `data-ad-test`       | String      | `empty`      | Attribute `data-ad-test` from adsense |
| `data-ad-format`     | String      | `auto` for Adsense Ads<br> `fluid` for InFeed and InArticle Ads | Attribute `data-ad-format` from adsense <br> Possible values are `auto`, `horizontal`, `vertical`, `rectangle` or `fluid` |
| `data-full-width-responsive` | String (`yes` or `no`) | `no`  | Attribute `data-full-width-responsive` from adsense |
| `is-non-personalized-ads` | String (`yes` or `no`) | `no`      | Props for request `non-personalized` ads, [read more](https://support.google.com/adsense/answer/9042142?hl=en&ref_topic=7670012) |
| `is-new-ads-code` | String (`yes` or `no`) | `no`      | Use new Adsense code (per 19 july 2021), [read more](https://support.google.com/adsense/answer/10627874) |
| `data-ad-region` | String | `empty`      | See PR [#163](https://github.com/mazipan/vue-google-adsense/pull/163) |

## :metal: Who is using this library

Already used in production for these project :

+ [Blog-2.0](https://github.com/mazipan/blog-2.0)
+ [Explore-Github](https:///mazipan.github.io/explore-github)
+ [Fire Jak](https://mazipan.github.io/FireJak)
+ [Rumah Sakit Jakarta](https://mazipan.github.io/RumahSakitJakarta)
+ [ChuckNorris](https://mazipan.github.io/chucknorris)
+ [Nuxt blog - Surmon.me](https://github.com/surmon-china/surmon.me)
+ Etc... // You can add the list here via pull request

## 🏃 Development

We are using [pnpm](https://pnpm.js.org/), please read the [Installation](https://pnpm.js.org/en/installation) section first.

``` bash
# install dependencies
pnpm install

# serve with demo page
pnpm run dev:demo

# build for production
pnpm run build:demo
pnpm run build:lib
```

## Support me

- 👉 🇮🇩 [Trakteer](https://trakteer.id/mazipan?utm_source=github)
- 👉 🌍 [BuyMeACoffe](https://www.buymeacoffee.com/mazipan?utm_source=github)
- 👉 🌍 [Paypal](https://www.paypal.me/mazipan?utm_source=github)
- 👉 🌍 [Ko-Fi](https://ko-fi.com/mazipan)

---

Copyright © 2018 Built with ❤️ by Irfan Maulana
