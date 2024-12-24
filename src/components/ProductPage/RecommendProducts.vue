<template>
  <div :class="$style.products_wrap">
    <h1>YOU MIGHT ALSO LIKE</h1>
    <ProductCarousel :slides="newArrivalsSlides" />
  </div>
</template>

<script setup>
import ProductCarousel from '../Home/ProductCarousel.vue'
import { newArrivalsSlides } from '@/data/products'
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
