<template>
  <div :class="$style.cart_items">
    <div :class="$style.cart_product">
      <ProductCardCart v-for="product in cartStore" :key="product.id" :product="product" />
      <!-- {{ productStore.products }} -->
      <p :class="$style.cart_total_products">Total products: {{ cartStore.totalCountProducts }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { mockedStore } from '@/mocks/cart';
import { onMounted, ref } from 'vue';
import ProductCardCart from './ProductCard-Cart.vue'

const cartStore = ref([])
onMounted(async () => {
  try {
    const cartResponce = await fetch('/api/products')
    if (!cartResponce.ok) {
      throw new Error('Failed to fetch product data')
    }
    cartStore.value = await cartResponce.json()
  } catch (error) {
    console.error('Error fetching cart:', error)
  }
})
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
