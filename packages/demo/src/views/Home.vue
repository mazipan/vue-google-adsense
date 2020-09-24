<template>
  <div class="home VueCurrencyFilter">
    <section class="container hero">
      <HeaderComponent />
    </section>

    <section class="container ads">
      <c-flex m="4" align="center" justify="center" direction="column">
        <InArticleAdsense data-ad-client="ca-pub-5442972248172818" data-ad-slot="7974047383" />
      </c-flex>
    </section>

    <section class="container">
      <c-stack :spacing="5">
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
      </c-stack>
    </section>

    <section class="container ads">
      <c-flex m="4" align="center" justify="center" direction="column">
        <InArticleAdsense data-ad-client="ca-pub-5442972248172818" data-ad-slot="7974047383" />
      </c-flex>
    </section>

    <footer class="footer">
      <c-flex m="2" align="center" justify="center">
        <c-text textAlign="center">Built with ❤️ by <a href="https://mazipan.space">Irfan Maulana</a></c-text>
      </c-flex>
    </footer>
  </div>
</template>

<script lang="js">
import { CFlex, CText, CStack } from '@chakra-ui/vue'
import HeaderComponent from '../components/Header'
import Box from '../components/Box'

export default {
  name: 'Home',
  components: {
    HeaderComponent,
    Box,
    CFlex,
    CText,
    CStack,
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
