<template>
  <div :class="$style.cart_items">
    <div :class="$style.cart_product">
      <div v-for="product in topSellingSlides" :key="product.id" :class="$style.product_item">
        <ProductCardCart :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCardCart from './ProductCard-Cart.vue'
import { topSellingSlides } from '@/data/products'
</script>

<style module>
.cart_product {
  border: 1px solid var(--light-background-color);
  border-radius: 20px;
}
</style>
