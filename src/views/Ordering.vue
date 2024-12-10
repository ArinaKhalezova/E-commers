<template>
  <div :class="$style.ordering_container">
    <h1 :class="$style.ordering_title">Ordering</h1>
    <div :class="$style.ordering_items">
      <OrderingInfo />
      <OrderSummary />
    </div>
  </div>
</template>

<script setup lang="ts">
import OrderSummary from '@/components/Cart/OrderSummary.vue';
import OrderingInfo from '@/components/Ordering/OrderingInfo.vue'
</script>

<style module>
.ordering_container {
  margin: 0 16px 40px;
}
.ordering_container h1 {
  justify-content: start;
}
.ordering_title {
  margin: 20px 0;
}
@media (min-width: 1024px) {
  .ordering_container {
    margin: 0 100px -50px;
  }
  .ordering_items {
    display:grid;
    grid-template-columns: 3fr 1fr;
    gap: 40px;
  }
}
</style>
