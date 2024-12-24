<template>
  <div :class="$style.order_container">
    <h1>Order Summary</h1>
    <div :class="$style.order_summary">
      <div :class="$style.summary_subtotal">
        <h2>Subtotal</h2>
        <p>{{ '$' + productStore.subtotalCostProducts }}</p>
      </div>
      <div :class="$style.summary_discount">
        <h2>{{ 'Discount (' + productStore.discount + '%)' }}</h2>
        <p>{{ '-' + productStore.saleCost + '$' }}</p>
      </div>
      <div :class="$style.summary_delivery">
        <h2>Delivery Fee</h2>
        <p>{{ '$' + productStore.deliveryCostProducts }}</p>
      </div>
    </div>
    <hr :class="$style.line" />
    <div :class="$style.order_total">
      <h2>Total</h2>
      <p>{{ '$' + productStore.totalCostProducts }}</p>
    </div>
    <div :class="$style.order_promocode">
      <input
        type="text"
        placeholder="Add promo code"
        name="promocode"
        required
        v-model="productStore.promo"
        :class="$style.promocode_input"
      />
      <ButtonDark text="Apply" :class="$style.promocode_btn" light @click="productStore.applyPromoCode"/>
    </div>
    <ButtonDark link="/ordering" text="Go to Checkout" :class="$style.order_btn" />
  </div>
</template>

<script setup lang="ts">
import ButtonDark from '../Home/ButtonDark.vue'
import { useProductStore } from '@/stores/productStore'

const productStore = useProductStore()
</script>

<style module>
.order_container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--light-background-color);
  border-radius: 20px;
}
.order_container h1 {
  font-family: 'Satoshi';
  font-size: 20px;
  font-weight: 900;
  justify-content: left;
  margin: 0;
}
.order_summary {
  display: grid;
  gap: 20px;
}
.order_summary > * {
  display: flex;
  justify-content: space-between;
}
.order_summary h2 {
  color: var(--subtitle-color);
  font-family: 'Satoshi';
  font-size: 16px;
  font-weight: 100;
}
.order_summary p {
  font-family: 'Satoshi';
  font-size: 16px;
  font-weight: 900;
}
.line {
  width: 100%;
  margin: 20px auto;
  border: 1px solid var(--light-background-color);
}
.order_total {
  margin-bottom: 16px;
}
.order_total h2 {
  font-family: 'Satoshi';
  font-size: 20px;
}
.order_total p {
  font-family: 'Satoshi';
  font-size: 20px;
  font-weight: 900;
}
.order_total {
  display: flex;
  justify-content: space-between;
}

.promocode_input {
  font-family: 'Satoshi';
  background-color: var(--placeholder);
  border-radius: 20px;
  padding: 13px 48px;
  border: none;
  outline: none;
}
.order_promocode {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10px;
  align-items: center;
}

.order_btn {
  margin-top: 16px;
  width: auto;
}
</style>
