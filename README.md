# vue-google-adsense

[![License](https://img.shields.io/github/license/mazipan/vue-google-adsense.svg?maxAge=3600)](https://github.com/mazipan/vue-google-adsense) [![version](https://img.shields.io/npm/v/vue-google-adsense.svg?maxAge=60)](https://www.npmjs.com/package/vue-google-adsense) ![downloads](https://img.shields.io/npm/dt/vue-google-adsense.svg?maxAge=3600)

> Vue.js Google Adsense Component with InFeed and InArticle Ads support

:rocket: Skeleton generated with Vue-CLI using template [vuejs-template-plugin](https://github.com/mazipan/vuejs-template-plugin)

## Demo

https://mazipan.github.io/vue-google-adsense/

## How to use

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

## Available Props

| Attribute          | Type        |Default       | Description                          	  |
|------------------- |------------ |--------------|---------------------------------------	|
| root-class         | String      | `adswrapper` | Class for fill in wrapper block          |
| data-ad-client     | String      | `empty`      | Attribute `data-ad-client` from adsense |
| data-ad-slot       | String      | `empty`      | Attribute `data-ad-slot` from adsense   |
| data-ad-layout-key | String      | `empty`      | Attribute `data-ad-layout-key` from adsense |

## Development

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
