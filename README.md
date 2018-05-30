# :dollar: Vue Google Adsense

> Vue.js Google Adsense Component with InFeed and InArticle Ads support

[![License](https://img.shields.io/github/license/mazipan/vue-google-adsense.svg?maxAge=3600)](https://github.com/mazipan/vue-google-adsense) [![version](https://img.shields.io/npm/v/vue-google-adsense.svg?maxAge=60)](https://www.npmjs.com/package/vue-google-adsense) ![downloads](https://img.shields.io/npm/dt/vue-google-adsense.svg?maxAge=3600)

:rocket: Skeleton generated with Vue-CLI using template [vuejs-template-plugin](https://github.com/mazipan/vuejs-template-plugin)

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
| data-ad-client     | String      | `empty`      | Attribute `data-ad-client` from adsense |
| data-ad-slot       | String      | `empty`      | Attribute `data-ad-slot` from adsense   |
| data-ad-layout-key | String      | `empty`      | Attribute `data-ad-layout-key` from adsense |
| data-ad-test       | String      | `empty`      | Attribute `data-ad-test` from adsense |

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

# build for production demo with minification
npm run build

# build for plugin distribution file
npm run pack

# run build and pack
npm run dist
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

Contact Me :

[![Email](https://img.shields.io/badge/mazipanneh-Email-yellow.svg?maxAge=3600)](mailto:mazipanneh@gmail.com) [![Facebook](https://img.shields.io/badge/mazipanneh-Facebook-blue.svg?maxAge=3600)](https://facebook.com/mazipanneh) [![Twitter](https://img.shields.io/badge/Maz_Ipan-Twitter-55acee.svg?maxAge=3600)](https://twitter.com/Maz_Ipan)

Copyright © 2018 Built with ❤️ by Irfan Maulana
