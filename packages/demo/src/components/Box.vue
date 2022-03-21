<template>
  <b-card :title="title">
    <b-card-text>
      {{ description }}
    </b-card-text>
    <a :href="link" rel="noreferrer noopenner" target="_blank"
      ><b-button class="mb-2 mr-2" variant="outline-success"> Learn More </b-button></a
    >
    <router-link :to="demo"><b-button class="mb-2" variant="success"> See the demo </b-button></router-link>
  </b-card>
</template>

<script lang="js">
export default {
  name: 'Home',
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
  }
}
</script>
