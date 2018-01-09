<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>

    <section class="hero is-primary is-medium">
      <div class="hero-body">
          <div class="container has-text-centered">
            <figure class="image is-128x128" style="margin: auto;">
                <img src="./assets/logo.png">
            </figure>
            <h1 class="title">
                {{ title }}
            </h1>
            <h2 class="subtitle">
                {{ subtitle }}
            </h2>
            <a href="https://github.com/mazipan/vue-google-adsense"
              class="button is-primary is-inverted is-outlined">
            Fork in Github
            </a>
          </div>
      </div>
    </section>

    <div class="container is-fluid" style="margin-top: 20px;">
      <section class="columns is-centered item">
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
      <section>
    </div>

  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      title: "Welcome to Vue Google Adsense",
      subtitle:
        "Vue.js Google Adsense Component with InFeed and InArticle Ads support"
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
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
