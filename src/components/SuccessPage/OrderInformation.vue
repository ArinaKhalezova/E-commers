<template>
  <div :class="$style.order_wrapper">
    <h1>Thank you for your order!</h1>
    <h2 :class="$style.order_wrapper_text">
      Contact email: <span style="color: green">e-commers@mail.com</span>
    </h2>

    <div :class="$style.order_information">
      <h1 style="font-size: 40px">Your order information</h1>
      <div>
        <h2>
          Tracking number:
          <span style="color: green; font-weight: 900">{{ lastOrder?.id || 'N/A' }}</span>
        </h2>
        <p>
          <span style="color: red">Please remember</span> the
          <span style="color: red">tracking number</span>, as this page will be unavailable soon.
        </p>
      </div>

      <OrderCard
        v-if="lastOrder?.items"
        title="Your order"
        :items="lastOrder.items"
        type="products"
      />

      <OrderCard
        v-if="orderingStore.deliveryAddress"
        title="Your address"
        :items="[orderingStore.deliveryAddress]"
      />

      <OrderCard
        v-if="orderingStore.deliveryRecipient"
        title="Your details"
        :items="[orderingStore.deliveryRecipient]"
      />

      <br />
      <h2>
        Total cost:
        <span style="color: green; font-weight: 900">
          {{ lastOrder ? `$${lastOrder.totalCost}` : 'N/A' }}
        </span>
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore'
import { useOrderingStore } from '@/stores/orderingStore'
import { useOrderStore } from '@/stores/orderStore'
import { computed, onMounted } from 'vue'
import OrderCard from './Card.vue'

const cartStore = useCartStore()
const orderingStore = useOrderingStore()
const orderStore = useOrderStore()

const lastOrder = computed(() => {
  const orders = orderStore.getOrders()
  return orders.length > 0 ? orders[orders.length - 1] : null
})

onMounted(async () => {
  await orderStore.fetchOrders()
})
</script>

<style module>
.order_wrapper {
  display: flex;
  flex-direction: column;
  margin: 0 20px;
}
.order_wrapper_text {
  margin: 0 auto;
  font-size: 16px;
}
.order_number {
  font-family: 'IntegralCF';
}
.order_wrapper h2 {
  font-family: 'Satoshi';
  font-weight: 900;
  font-size: 28px;
}
.order_wrapper h1 {
  margin: 0;
}
.order_information {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.order_products {
  line-height: 1.2;
}
.products_items {
  display: flex;
  gap: 20px;
  background-color: var(--placeholder-color);
  align-items: center;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  min-width: 400px;
}
.products_items img {
  width: 100px;
}
.products_info h2 {
  font-family: 'Satoshi';
  font-size: 20px;
  margin-bottom: 10px;
}
.order_address,
.order_recipient {
  font-family: 'Satoshi';
}
.address_items,
.recipient_items {
  background-color: var(--placeholder-color);
  border-radius: 20px;
  padding: 20px;
  min-width: 400px;
}
</style>
