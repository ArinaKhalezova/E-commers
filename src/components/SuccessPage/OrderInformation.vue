<template>
  <div :class="$style.order_wrapper">
    <h1>Your tracking number: 0039762F</h1>
    <div :class="$style.order_information">
      <h2>Your order information</h2>
      <div :class="$style.order_products">
        <div
          v-for="product in productStore.products"
          :key="product.id"
          :class="$style.products_items"
        >
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
    </div>
    <div>
      <h2>Your adress</h2>
      <div v-if="orderingStore.deliveryAddress">
        <h3>Saved Address:</h3>
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
  </div>
</template>

<script setup lang="ts">
import type { TProduct } from '@/data/products'
import { useProductStore } from '@/stores/productStore'
import { useOrderingStore } from '@/stores/OrderingStore'

const productStore = useProductStore()
const orderingStore = useOrderingStore()

console.log('Address:', orderingStore.deliveryAddress)

const props = defineProps<{
  product: TProduct
}>()
</script>

<style module>
.order_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
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
}
.products_items img {
  width: 100px;
}
.products_info h2{
font-family: 'Satoshi';
font-size: 20px;
margin-bottom: 10px;
}
</style>
