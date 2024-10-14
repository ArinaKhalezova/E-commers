<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import ProductCard from './ProductCard.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineProps<{
  slides: {
    id: string
    product_img: string
    title: string
    rating: string
    cost: string
  }[]
}>()

const itemsToShow = ref(2)

const updateItemsToShow = () => {
  if (window.innerWidth >= 1024) {
    itemsToShow.value = 4
  } else if (window.innerWidth > 768 && window.innerWidth < 1024) {
    itemsToShow.value = 3
  } else {
    itemsToShow.value = 2
  }
}

onMounted(() => {
  updateItemsToShow()
  window.addEventListener('resize', updateItemsToShow)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateItemsToShow)
})
</script>

<template>
  <Carousel
    :items-to-show="itemsToShow"
    :items-to-scroll="2"
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
/* .wrapper {
  max-width: 100%;
} */
 .slide {
  margin: 0 15px;
 }
</style>