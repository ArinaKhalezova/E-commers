<script setup lang="ts">
import ProductCarousel from './ProductCarousel.vue'
import { newArrivalsSlides, topSellingSlides } from '@/data/products'
import Button from './Button.vue'
</script>

<template>
  <div :class="$style.products_wrap">
    <h1>NEW ARRIVALS</h1>
    <ProductCarousel :slides="newArrivalsSlides" />
    <Button></Button>

    <h1>TOP SELLING</h1>
    <ProductCarousel :slides="topSellingSlides" />
    <Button></Button>
  </div>
</template>

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
