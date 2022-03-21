<template>
  <div class="home VueCurrencyFilter">
    <section class="container hero">
      <b-row mb="4" align="center" justify="center" direction="column">
        <h1 as="h1" fontSize="5xl">In Feed Adsense</h1>
      </b-row>
    </section>

    <section class="container ads">
      <c-stack :spacing="5" is-inline :shouldWrapChildren="true" justify="center" wrap="wrap">
        <ImageCard />
        <ImageCard />
        <ImageCard />

        <c-box minW="sm" :mb="5" border-width="1px" rounded="lg" overflow="hidden">
          <InFeedAdsense
            style="height: 380px; min-width: 250px; margin: 1em 0"
            root-class="wrapper VueInFeedAdsense"
            ins-class="ins-custom"
            data-ad-layout-key="-6h+ed+1l-6o+ab"
            data-ad-client="ca-pub-5442972248172818"
            data-ad-slot="5701222588s"
          />
        </c-box>
        <ImageCard />
        <ImageCard />

        <ImageCard />
        <ImageCard />
        <ImageCard />

        <ImageCard />
        <ImageCard />
        <c-box minW="sm" :mb="5" border-width="1px" rounded="lg" overflow="hidden">
          <InFeedAdsense
            style="height: 380px; min-width: 250px; margin: 1em 0"
            root-class="wrapper VueInFeedAdsense"
            ins-class="ins-custom"
            data-ad-layout-key="-6h+ed+1l-6o+ab"
            data-ad-client="ca-pub-5442972248172818"
            data-ad-slot="5701222588s"
          />
        </c-box>
      </c-stack>
    </section>

    <section class="container">
      <c-stack :spacing="5" is-inline>
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
      </c-stack>
    </section>

    <section class="container ads">
      <b-row align="center" justify="center" direction="column">
        <c-box w="100%" border-width="1px" rounded="lg" overflow="hidden">
          <Adsense
            style="width: 100%; min-width: 250px"
            ins-style="display:inline-block;width:728px;height:90px"
            data-ad-client="ca-pub-5442972248172818"
            data-ad-slot="7319719723"
          >
          </Adsense>
        </c-box>
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
import Box from '../components/Box'
import ImageCard from '../components/ImageCard'

export default {
  name: 'InFeed',
  components: {
    Box,
    ImageCard
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
