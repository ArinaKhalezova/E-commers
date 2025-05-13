<template>
  <div :class="$style.cart_items">
    <div :class="$style.cart_product">
      <ProductCardCart v-for="product in cartStore.products" :key="product.id" :product="product" />
      <p :class="$style.cart_total_products">Total products: {{ cartStore.totalCountProducts }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCardCart from './ProductCard-Cart.vue'
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()
cartStore.fetchProducts()
</script>

<style module>
.cart_product {
  border: 1px solid var(--light-background-color);
  border-radius: 20px;
}

.cart_total_products {
  font-family: 'Satoshi';
  font-size: 16px;
  font-weight: 900;
  margin: 16px;
}
</style>
