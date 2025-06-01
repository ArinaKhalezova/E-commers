<template>
  <div :class="$style.products_wrap">
    <h1>YOU MIGHT ALSO LIKE</h1>
    <ProductCarousel :slides="newArrivalsSlides" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ProductCarousel from '../Home/ProductCarousel.vue'

const newArrivalsSlides = ref()

onMounted(async () => {
  try {
    const newArrivalsSlidesResponse = await fetch('/api/newArrivalsSlides')
    if (!newArrivalsSlidesResponse.ok) {
      throw new Error('Failed to fetch new arrivals data')
    }
    const newArrivalsSlidesData = await newArrivalsSlidesResponse.json()
    newArrivalsSlides.value = newArrivalsSlidesData.newArrivalsSlides
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})
</script>

<style module>
h1 {
  font-family: 'IntegralCF';
  font-size: 32px;
  font-weight: 900;
  margin: 50px 0 32px;
  display: flex;
  justify-content: center;
}

@media (min-width: 1024px) {
  .products_wrap {
    margin: 0 100px;
  }

  h1 {
    font-size: 48px;
    margin: 70px 0 52px;
  }
}
</style>
