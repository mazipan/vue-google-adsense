<template>
  <div class="hero">

    <c-flex mb="4" textAlign="center" align="center" justify="center" direction="column">
      <c-text as="h1" fontSize="5xl">Vue Google Adsense</c-text>
      <c-text as="h3" fontSize="3xl">Vue.js Google Adsense Component with InFeed and InArticle Ads support</c-text>
    </c-flex>

    <c-flex mb="2" align="center" justify="center" direction="column">
      <a href="https://github.com/mazipan/vue-google-adsense">
        <c-button variant-color="green">Github Repo</c-button>
      </a>
    </c-flex>

    <c-flex align="center" justify="center">
      <a
        href="https://www.npmjs.com/package/vue-google-adsense"
        target="_blank"
        rel="noopener noreferer"
        style="margin-right: 0.5rem;"
      >
        <img alt="NPM Version" src="https://img.shields.io/npm/v/vue-google-adsense.svg" />
      </a>
      <a
        href="https://github.com/mazipan/vue-google-adsense"
        target="_blank"
        rel="noopener noreferer"
      >
        <img
          alt="GitHub Stars"
          src="https://img.shields.io/github/stars/mazipan/vue-google-adsense.svg?style=social"
        />
      </a>
    </c-flex>
  </div>
</template>

<script>
import { CFlex, CText, CButton } from '@chakra-ui/vue'

export default {
  name: 'Header',
  components: {
    CFlex,
    CText,
    CButton
  }
}
</script>
