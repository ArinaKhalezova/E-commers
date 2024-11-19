<template>
  <div :class="$style.order_container">
    <h1>Order Summary</h1>
    <div :class="$style.order_summary">
      <div :class="$style.summary_subtotal">
        <h2>Subtotal</h2>
        <p>$565</p>
        <!-- <p>{{ '$' + price }}</p> -->
      </div>
      <div :class="$style.summary_discount">
        <h2>Discount (-20%)</h2>
        <p>-$113</p>
        <!-- <p>{{ '-$' + price }}</p> -->
      </div>
      <div :class="$style.summary_delivery">
        <h2>Delivery Fee</h2>
        <p>$15</p>
        <!-- <p>{{ '$' + price }}</p> -->
      </div>
    </div>
    <hr :class="$style.line" />
    <div :class="$style.order_total">
      <h2>Total</h2>
      <p>$467</p>
      <!-- <p>{{ '$' + price }}</p> -->
    </div>
    <div>
      <input />
      <button></button>
    </div>
    <Button />
  </div>
</template>

<script setup lang="ts">
import Button from '../Home/Button.vue';
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
.order_summary > * {
  display: flex;
  justify-content: space-between;
}
.order_summary h2 {
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
  width: 330px;
  margin: auto;
  border: 1px solid var(--light-background-color);
}
.order_total h2 {
  font-family: 'Satoshi';
  font-size: 16px;
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
</style>
