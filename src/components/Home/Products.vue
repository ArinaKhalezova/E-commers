<template>
  <div :class="$style.products_wrap">
    <h1>NEW ARRIVALS</h1>
    <ProductCarousel :slides="newArrivalsSlides" />
    <ButtonLight link="/assortment" text="View All" :class="$style.products_btn"></ButtonLight>

    <h1>TOP SELLING</h1>
    <ProductCarousel :slides="topSellingSlides" />
    <ButtonLight link="/assortment" text="View All" :class="$style.products_btn"></ButtonLight>
  </div>
</template>

<script setup lang="ts">
import ProductCarousel from './ProductCarousel.vue'
import { newArrivalsSlides, topSellingSlides } from '@/data/products'
import ButtonLight from './ButtonLight.vue';
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
