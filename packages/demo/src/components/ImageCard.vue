<template>
  <c-box maxW="sm" :mb="5" border-width="1px" rounded="lg" overflow="hidden">
    <c-image :src="property.imageUrl" :alt="property.imageAlt" />
    <c-box p="6">
      <c-box d="flex" align-items="baseline">
        <c-badge rounded="full" px="2" variant-color="green"> New </c-badge>
        <c-box color="gray.500" font-weight="semibold" letter-spacing="wide" font-size="xs" text-transform="uppercase" ml="2">
          {{ property.beds }} beds &bull; {{ property.baths }} baths
        </c-box>
      </c-box>
      <c-box mt="1" font-weight="semibold" as="h4" line-height="tight" is-truncated>
        {{ property.title }}
      </c-box>
      <c-box>
        {{ property.formattedPrice }}
        <c-box as="span" color="gray.600" fontSize="sm"> / wk </c-box>
      </c-box>
      <c-box d="flex" mt="2" align-items="center">
        <c-icon v-for="(_, i) in Array(5).fill('')" name="star" :key="i" :color="i < property.rating ? 'green.500' : 'gray.300'" />
        <c-box as="span" ml="2" color="gray.600" font-size="sm"> {{ property.reviewCount }} reviews </c-box>
      </c-box>
    </c-box>
  </c-box>
</template>

<script>
export default {
  name: 'ImageCard',
  data() {
    return {
      property: {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
      },
    }
  },
}
</script>
