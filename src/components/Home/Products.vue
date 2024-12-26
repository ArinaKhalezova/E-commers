<template>
  <div v-if="!loading" :class="$style.products_wrap">
    <h1>NEW ARRIVALS</h1>
    <ProductCarousel :slides="newArrivalsSlides" />
    <ButtonLight link="/assortment" text="View All" :class="$style.products_btn"></ButtonLight>

    <h1>TOP SELLING</h1>
    <ProductCarousel :slides="topSellingSlides" />
    <ButtonLight link="/assortment" text="View All" :class="$style.products_btn"></ButtonLight>
  </div>
  <QSpinner v-else />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ProductCarousel from './ProductCarousel.vue'
// import { newArrivalsSlides, topSellingSlides } from '@/data/products'
import ButtonLight from './ButtonLight.vue';

const newArrivalsSlides = ref()
const topSellingSlides = ref()
const loading = ref(true)
onMounted(async () => {
  try {
    loading.value = true
    const newArrivalsSlidesResponse = await fetch('http://localhost:5173/api/newArrivalsSlides')
    if (!newArrivalsSlidesResponse.ok) {
      throw new Error('Failed to fetch products')
    }
    const newArrivalsSlidesData = await newArrivalsSlidesResponse.json()
    newArrivalsSlides.value = newArrivalsSlidesData.newArrivalsSlides

    const topSellingSlidesResponse = await fetch('http://localhost:5173/api/topSellingSlides')
    if (!topSellingSlidesResponse.ok) {
      throw new Error('Failed to fetch products')
    }
    const topSellingSlidesData = await topSellingSlidesResponse.json()
    topSellingSlides.value = topSellingSlidesData.topSellingSlides
  } catch (error) {
    console.error('Error fetching products:', error)
  }
  finally {
    loading.value = false
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
.products_btn {
  margin: 30px auto 54px;
  width: calc(100% - 32px);
}
@media (min-width: 1024px) {
  .products_wrap {
    margin: 0 100px;
  }
  h1 {
    font-size: 48px;
    margin: 70px 0 52px;
  }
  .products_btn {
    margin: 30px auto 54px;
    width: 218px;
  }
}
</style>
