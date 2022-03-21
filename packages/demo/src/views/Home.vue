<template>
  <div class="home VueCurrencyFilter">
    <section class="container hero">
      <HeaderComponent />
    </section>

    <section class="container ads">
      <b-row align="center" justify="center" direction="column">
        <b-card w="100%" border-width="1px" rounded="lg" overflow="hidden">
          <Adsense
            style="width: 100%; min-width: 250px"
            ins-style="display:inline-block;width:728px;height:90px"
            data-ad-client="ca-pub-5442972248172818"
            data-ad-slot="7319719723"
          >
          </Adsense>
        </b-card>
      </b-row>
    </section>

    <section class="container">
      <b-card :spacing="5">
        <Box
          title="Default Adsense"
          description="A simple way to get ads on your page. Choose the size, placement and style you want to display."
          link="https://support.google.com/adsense/answer/6002575?hl=en_GB"
          demo="/"
        />

        <Box
          title="In Article Adsense"
          description="Ads that fit seamlessly in between the paragraphs of your pages for an enhanced reading experience."
          link="https://support.google.com/adsense/answer/7320112?hl=en_GB"
          demo="/in-article/"
        />

        <Box
          title="In Feed Adsense"
          description="Ads that flow naturally inside a list of articles or products on your site, offering a great user experience."
          link="https://support.google.com/adsense/answer/7171765?hl=en_GB"
          demo="/in-feed/"
        />
      </b-card>
    </section>

    <section class="container ads">
      <b-row align="center" justify="center" direction="column">
        <b-card w="100%" border-width="1px" rounded="lg" overflow="hidden">
          <InArticleAdsense style="width: 100%; min-width: 250px" data-ad-client="ca-pub-5442972248172818" data-ad-slot="7974047383" />
        </b-card>
      </b-row>
    </section>

    <footer class="footer">
      <b-row m="2" align="center" justify="center">
        <p textAlign="center">Built with ❤️ by <a href="https://mazipan.space">Irfan Maulana</a></p>
      </b-row>
    </footer>
  </div>
</template>

<script lang="js">
import HeaderComponent from '../components/Header'
import Box from '../components/Box'

export default {
  name: 'Home',
  components: {
    HeaderComponent,
    Box
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
pre:not(:last-of-type) {
  margin-bottom: 2rem;
}

.container {
  margin-top: 2em;

  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: 760px) {
    padding-left: 14rem;
    padding-right: 14rem;
  }
}
</style>
