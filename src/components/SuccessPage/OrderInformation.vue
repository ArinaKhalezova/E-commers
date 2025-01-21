<template>
  <div :class="$style.order_wrapper">
    <h1>Thank you for your order!</h1>
    <h2 :class="$style.order_wrapper_text">
      Contact email: <span style="color: green">e-commers@mail.com</span>
    </h2>

    <div :class="$style.order_information">
      <h1 style="font-size: 40px">Your order information</h1>
      <div>
        <h2>Your tracking number: <span style="color: green; font-weight: 900">0039762F</span></h2>
        <p>
          <span style="color: red">Please remember</span> the
          <span style="color: red">tracking number</span>, as this page will be unavailable soon.
        </p>
      </div>
      <div :class="$style.order_products">
        <div v-for="product in cartStore.products" :key="product.id" :class="$style.products_items">
          <div :class="$style.products_img">
            <img :src="product.product_img" :alt="product.title" />
          </div>
          <div :class="$style.products_info">
            <h2>{{ product.title }}</h2>
            <p>{{ 'Size: ' + product.size }}</p>
            <p>{{ 'Color: ' + product.color }}</p>
            <p>{{ 'Quantity: ' + product.quantity }}</p>
          </div>
        </div>
      </div>
      <div :class="$style.order_address">
        <h2>Your adress</h2>
        <div v-if="orderingStore.deliveryAddress" :class="$style.address_items">
          <p>Street: {{ orderingStore.deliveryAddress.street }}</p>
          <p>Apartament: {{ orderingStore.deliveryAddress.apartament }}</p>
          <p>Entrance: {{ orderingStore.deliveryAddress.entace }}</p>
          <p>Floor: {{ orderingStore.deliveryAddress.floor }}</p>
          <p>Comment: {{ orderingStore.deliveryAddress.comment }}</p>
        </div>
        <div v-else>
          <p>No address saved yet.</p>
        </div>
      </div>
      <div :class="$style.order_recipient">
        <h2>Your details</h2>
        <div v-if="orderingStore.deliveryRecipient" :class="$style.recipient_items">
          <p>Surname: {{ orderingStore.deliveryRecipient.surname }}</p>
          <p>Name: {{ orderingStore.deliveryRecipient.name }}</p>
          <p>Phone: {{ orderingStore.deliveryRecipient.phone }}</p>
          <p>Email: {{ orderingStore.deliveryRecipient.email }}</p>
        </div>
        <div v-else>
          <p>No details saved yet.</p>
        </div>
      </div>
      <br />
      <h2>
        Total cost:
        <span style="color: green; font-weight: 900">{{ '$' + cartStore.totalCostProducts }}</span>
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TProduct } from '@/data/products.types'
import { useCartStore } from '@/stores/cartStore'
import { useOrderingStore } from '@/stores/orderingStore'

const cartStore = useCartStore()
const orderingStore = useOrderingStore()

console.log('Address from store:', orderingStore.deliveryAddress)
console.log('Recipient from store:', orderingStore.deliveryRecipient)

const props = defineProps<{
  product: TProduct
}>()
</script>

<style module>
.order_wrapper {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
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
