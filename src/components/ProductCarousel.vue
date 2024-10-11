<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import ProductCard from './ProductCard.vue'

defineProps<{
  slides: {
    id: string
    product_img: string
    title: string
    rating: string
    cost: string
  }[]
}>()
</script>

<template>
  <Carousel
    :autoplay="4000"
    :items-to-show="2"
    :items-to-scroll="1"
    :wrap-around="true"
    class="wrapper"
  >
    <Slide v-for="slide in slides" :key="slide.id" class="slide">
      <ProductCard :product="slide" />
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<style scoped>
.wrapper {
  max-width: 100%;
}
</style>
