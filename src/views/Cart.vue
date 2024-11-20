<template>
  <div :class="$style.cart_container">
    <h1>Your Cart</h1>
    <div :class="$style.cart_items">
      <Cart />
      <OrderSummary />
    </div>
  </div>
</template>
<script setup lang="ts">
import Cart from '@/components/Cart/Cart.vue'
import OrderSummary from '@/components/Cart/OrderSummary.vue'
</script>

<style module>
.cart_container {
  margin: 0 16px 50px;
}
.cart_container h1 {
  font-size: 32px;
  display: flex;
  justify-content: left;
  margin: 6px 0 18px;
}
@media (min-width: 1024px) {
  .cart_container {
    margin: 0 100px;
  }
  .cart_items {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 40px;
  }
}
</style>
