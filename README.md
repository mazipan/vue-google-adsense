# 💰 Vue Google Adsense

![License](https://img.shields.io/github/license/mazipan/vue-google-adsense.svg?maxAge=3600) ![minified](https://badgen.net/bundlephobia/minzip/vue-google-adsense) [![Travis](https://img.shields.io/travis/mazipan/vue-google-adsense.svg)](https://travis-ci.org/mazipan/vue-google-adsense) [![version](https://img.shields.io/npm/v/vue-google-adsense.svg?maxAge=60)](https://www.npmjs.com/package/vue-google-adsense) ![downloads](https://img.shields.io/npm/dt/vue-google-adsense.svg?maxAge=3600) [![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors) [![Greenkeeper badge](https://badges.greenkeeper.io/mazipan/vue-google-adsense.svg)](https://greenkeeper.io/)

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

## :gift: Available Props

| Attribute          | Type        |Default       | Description                          	  |
|------------------- |------------ |--------------|---------------------------------------	|
| root-class         | String      | `adswrapper` | Class for fill in wrapper block          |
| ins-class          | String      | `empty`      | Class for fill in `ins` tag              |
| data-ad-client     | String      | `empty`      | Attribute `data-ad-client` from adsense |
| data-ad-slot       | String      | `empty`      | Attribute `data-ad-slot` from adsense   |
| data-ad-layout-key | String      | `empty`      | Attribute `data-ad-layout-key` from adsense |
| data-ad-test       | String      | `empty`      | Attribute `data-ad-test` from adsense |
| data-ad-format     | String      | `auto`, `fluid` for InFeed and InArticle Ads | Attribute `data-ad-format` from adsense |
| data-full-width-responsive | Boolean | `false`  | Attribute `data-full-width-responsive` from adsense |
| is-non-personalized-ads | Boolean| `false`      | Props for request `non-personalized` ads, [read more](https://support.google.com/adsense/answer/9042142?hl=en&ref_topic=7670012) |

## :metal: Who is using this library

Already used in production for these project :

+ [Explore-Github](https:///mazipan.github.io/explore-github)
+ [Fire Jak](https://mazipan.github.io/FireJak)
+ [Rumah Sakit Jakarta](https://mazipan.github.io/RumahSakitJakarta)
+ [ChuckNorris](https://mazipan.github.io/chucknorris)

## 🏃 Development

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production
npm run build
```

---

Copyright © 2018 Built with ❤️ by Irfan Maulana

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/all-contributors/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://www.mazipan.xyz/"><img src="https://avatars0.githubusercontent.com/u/7221389?v=4" width="100px;" alt="Irfan Maulana"/><br /><sub><b>Irfan Maulana</b></sub></a><br /><a href="https://github.com/mazipan/vue-google-adsense/commits?author=mazipan" title="Code">💻</a></td><td align="center"><a href="https://github.com/codynguyen"><img src="https://avatars3.githubusercontent.com/u/252787?v=4" width="100px;" alt="Cody Nguyen"/><br /><sub><b>Cody Nguyen</b></sub></a><br /><a href="https://github.com/mazipan/vue-google-adsense/commits?author=codynguyen" title="Code">💻</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
