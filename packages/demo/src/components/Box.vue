<template>
  <c-box :p="5" :mb="5" :mr="5" rounded="lg" shadow="md" border-width="1px">
    <c-heading>{{ title }}</c-heading>
    <c-text :mt="4" :mb="4">{{ description }}</c-text>

    <a :href="link" rel="noreferrer noopenner" target="_blank"><c-button :mr="2" variant="outline" variant-color="green" size="md"> Learn More </c-button></a>
    <router-link :to="demo"><c-button :mr="2" variant-color="green" size="md"> See the demo </c-button></router-link>
  </c-box>
</template>

<script lang="js">
import { CText, CBox, CHeading, CButton } from '@chakra-ui/vue'

export default {
  name: 'Home',
  components: {
    CText,
    CBox,
    CHeading,
    CButton
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: '/vue-google-adsense/'
    },
    demo: {
      type: String,
      default: '/'
    },
  },
  data () {
    return {
    }
  }
}
</script>
