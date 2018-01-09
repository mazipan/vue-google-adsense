<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>

    <h2>VueAdsense</h2>
    <Adsense
        root-class="wrapper VueAdsense"
        data-ad-client="ca-pub-5442972248172818"
        data-ad-slot="1487770485">
    </Adsense>

    <h2>VueInArticleAdsense</h2>
    <InArticleAdsense
        root-class="wrapper VueInArticleAdsense"
        data-ad-client="ca-pub-5442972248172818"
        data-ad-slot="7974047383">
    </InArticleAdsense>

    <h2>VueInFeedAdsense</h2>
    <InFeedAdsense
        root-class="wrapper VueInFeedAdsense"
        data-ad-layout-key="-fg+5n+6t-e7+r"
        data-ad-client="ca-pub-5442972248172818"
        data-ad-slot="2105028631">
    </InFeedAdsense>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Vue Google Adsense'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
