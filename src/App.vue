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
          <br><br>
          <a href="https://www.npmjs.com/package/vue-google-adsense" target="_blank" rel="noopener noreferer">
            <img alt="NPM Version" src="https://img.shields.io/npm/v/vue-google-adsense.svg">
          </a>
          <a href="https://github.com/mazipan/vue-google-adsense" target="_blank" rel="noopener noreferer">
            <img alt="GitHub Stars" src="https://img.shields.io/github/stars/mazipan/vue-google-adsense.svg?style=social">
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
              <b>A simple way to get ads on your page.
                Choose the size, placement and style you want to display.</b>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://support.google.com/adsense/answer/6002575?hl=en_GB">
                Learn more
              </a>
            </p>
            <br><br><br>

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
              <b>Ads that fit seamlessly in between the paragraphs of your pages for an enhanced reading experience.</b>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://support.google.com/adsense/answer/7320112?hl=en_GB">
                Learn more
              </a>
            </p>
            <br><br><br>

            <article class="tile notification is-success">
              <div class="content">
                <p class="title">
                  Tall tile
                </p>
                <p class="subtitle">
                  With even more content
                </p>
                <div class="content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>

                  <InArticleAdsense
                    style="height: 200px;"
                    root-class="wrapper VueInArticleAdsense"
                    ins-class="ins-custom"
                    data-ad-client="ca-pub-5442972248172818"
                    data-ad-slot="7974047383" />

                  <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
                  <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                </div>
              </div>
            </article>
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
              <b>Ads that flow naturally inside a list of articles or products on your site, offering a great user experience.</b>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://support.google.com/adsense/answer/7171765?hl=en_GB">
                Learn more
              </a>
            </p>
            <br><br><br>

            <div class="card">
              <div class="card-content">
                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                  <br>
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-content">
                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                  <br>
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-content">
                <div class="content">
                  <InFeedAdsense
                    style="height: 300px;margin: 1em 0;"
                    root-class="wrapper VueInFeedAdsense"
                    ins-class="ins-custom"
                    data-ad-layout-key="-fg+5n+6t-e7+r"
                    data-ad-client="ca-pub-5442972248172818"
                    data-ad-slot="2105028631" />
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-content">
                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                  <br>
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-content">
                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#">#css</a> <a href="#">#responsive</a>
                  <br>
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>
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

<style lang="scss">
@import "~bulma-dracula/src/bulma-dracula.scss";

.wrapper{
  width: 100%;
}
</style>

<style lang="scss" scoped>
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
.card{
  color: #282a36 !important;
}
</style>
