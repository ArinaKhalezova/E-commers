<template>
  <div :class="$style.cart_items">
    <div :class="$style.cart_product">
      <p>Count: {{ productStore.totalCountProducts }}</p>
      <ProductCardCart
        v-for="product in productStore.products"
        :key="product.id"
        :product="product"
      />
      <!-- {{ productStore.products }} -->
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCardCart from './ProductCard-Cart.vue'
import { useProductStore } from '@/stores/productStore'

const productStore = useProductStore()
</script>

<style module>
.cart_product {
  border: 1px solid var(--light-background-color);
  border-radius: 20px;
}
</style>
