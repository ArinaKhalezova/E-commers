<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
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
  if (window.innerWidth >= 1260) {
    itemsToShow.value = 4
  } 
  else if (window.innerWidth >= 1024 && window.innerWidth < 1260) {
    itemsToShow.value = 3
  }
  else if (window.innerWidth >= 620 && window.innerWidth < 1024) {
    itemsToShow.value = 3
  } 
  else if (window.innerWidth > 460 && window.innerWidth < 620) {
    itemsToShow.value = 2
  }
  else {
    itemsToShow.value = 1
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
  </Carousel>
</template>

<style module>
.slide {
  margin: 0 15px;
}

@media (min-width: 1024px) {
  element.style {
    width: 50%;
  }
  
}
</style>
