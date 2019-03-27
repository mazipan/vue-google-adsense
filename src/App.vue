<template>
  <div id="app">
    <section class="hero is-primary is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <figure
            class="image is-128x128"
            style="margin: auto;">
            <img src="https://vuejs.org/images/logo.png">
          </figure>
          <h1 class="title">
            {{ title }}
          </h1>
          <h2 class="subtitle">
            {{ subtitle }}
          </h2>
          <a
            href="https://github.com/mazipan/vue-google-adsense"
            class="button is-primary is-inverted is-outlined">
            Fork in Github
          </a>
        </div>
      </div>
    </section>

    <div
      class="container is-fluid"
      style="margin-top:2em; margin-bottom:2em;">
      <section class="item">
        <article class="message is-primary">
          <div class="message-header">
            <p>Default Adsense</p>
          </div>
          <div class="message-body">
            <p>
              A simple way to get ads on your page.
              Choose the size, placement and style you want to display.
              <a
                rel="noreferrer"
                target="_blank"
                href="https://support.google.com/adsense/answer/6002575?hl=en_GB">
                Learn more
              </a>
            </p>

            <Adsense
              style="height: 450px;"
              root-class="wrapper VueAdsense"
              ins-class="ins-custom"
              data-ad-client="ca-pub-5442972248172818"
              data-ad-slot="1487770485" />
          </div>
        </article>
      </section>

      <section class="item">
        <article class="message is-info">
          <div class="message-header">
            <p>In Article Adsense</p>
          </div>
          <div class="message-body">
            <p>
              Ads that fit seamlessly in between the paragraphs of your pages for an enhanced reading experience.
              <a
                rel="noreferrer"
                target="_blank"
                href="https://support.google.com/adsense/answer/7320112?hl=en_GB">
                Learn more
              </a>
            </p>

            <InArticleAdsense
              style="height: 200px;"
              root-class="wrapper VueInArticleAdsense"
              ins-class="ins-custom"
              data-ad-client="ca-pub-5442972248172818"
              data-ad-slot="7974047383" />
          </div>
        </article>
      </section>

      <section class="item">
        <article class="message is-dark">
          <div class="message-header">
            <p>In Feed Adsense</p>
          </div>
          <div class="message-body">
            <p>
              Ads that flow naturally inside a list of articles or products on your site, offering a great user experience.
              <a
                rel="noreferrer"
                target="_blank"
                href="https://support.google.com/adsense/answer/7171765?hl=en_GB">
                Learn more
              </a>
            </p>

            <InFeedAdsense
              style="height: 300px;"
              root-class="wrapper VueInFeedAdsense"
              ins-class="ins-custom"
              data-ad-layout-key="-fg+5n+6t-e7+r"
              data-ad-client="ca-pub-5442972248172818"
              data-ad-slot="2105028631" />
          </div>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      title: 'Vue Google Adsense',
      subtitle:
        'Vue.js Google Adsense Component with InFeed and InArticle Ads support'
    }
  }
}
</script>

<style>
.wrapper{
  width: 100%;
}
</style>

<style lang="css" scoped>
.hero.is-primary {
  background: #4776e6;
  background: -webkit-linear-gradient(left, #8e54e9, #4776e6);
  background: -moz-linear-gradient(left, #8e54e9, #4776e6);
  background: -o-linear-gradient(left, #8e54e9, #4776e6);
  background: linear-gradient(90deg, #8e54e9, #4776e6);
}
h1{
  margin-bottom: 1.5em;
  font-size: 1.8rem;
}
h2{
  text-align: center;
  font-size: 1.4rem;
}
.item{
    padding: 1em;
    width: 100%;
    display: block;
    text-align: center;
    margin: 0 auto;
}
</style>
