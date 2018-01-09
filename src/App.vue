<template>
  <div id="app">
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
        <h2>Default Adsense</h2>
        <Adsense
            root-class="wrapper VueAdsense"
            data-ad-client="ca-pub-5442972248172818"
            data-ad-slot="1487770485">
        </Adsense>
      <section>

      <section class="columns is-centered item">
        <h2>In Article Adsense</h2>
        <InArticleAdsense
            root-class="wrapper VueInArticleAdsense"
            data-ad-client="ca-pub-5442972248172818"
            data-ad-slot="7974047383">
        </InArticleAdsense>
      <section>

      <section class="columns is-centered item">
        <h2>In Feed Adsense</h2>
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
      title: "Vue Google Adsense",
      subtitle:
        "Vue.js Google Adsense Component with InFeed and InArticle Ads support"
    };
  }
};
</script>

<style lang="css" scoped>
.hero.is-primary {
  background: #4776e6;
  background: -webkit-linear-gradient(left, #8e54e9, #4776e6);
  background: -moz-linear-gradient(left, #8e54e9, #4776e6);
  background: -o-linear-gradient(left, #8e54e9, #4776e6);
  background: linear-gradient(90deg, #8e54e9, #4776e6);
}
</style>

