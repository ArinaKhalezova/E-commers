<template>
  <div :class="$style.order_wrapper">
    <h1>Order Information</h1>
    <p :class="$style.order_number">Your tracking number: 0039762F</p>
    <div :class="$style.order_information">
      <h2>Your order</h2>
      <div :class="$style.order_products">
        <div
          v-for="product in productStore.products"
          :key="product.id"
          :class="$style.products_items"
        >
          <div>
            <img :src="product.product_img" :alt="product.title" />
          </div>
          <div>
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
      <p>Улица: {{ orderingStore.deliveryAddress.street }}</p>
      <p>Квартира: {{ orderingStore.deliveryAddress.apartament }}</p>
      <p>Подъезд: {{ orderingStore.deliveryAddress.entace }}</p>
      <p>Этаж: {{ orderingStore.deliveryAddress.floor }}</p>
      <p>Комментарий: {{ orderingStore.deliveryAddress.comment }}</p>
    </div>
    <p v-else>Адрес не указан</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TProduct } from '@/data/products'
import { useProductStore } from '@/stores/productStore'
import { useOrderingStore } from '@/stores/OrderingStore'

const productStore = useProductStore()
const orderingStore = useOrderingStore();

console.log('Address:', orderingStore.deliveryAddress);

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
    color: var(--stars-color);
}
.order_wrapper h2 {
  font-family: 'Satoshi';
  font-weight: 900;
  font-size: 28px;
}
.order_wrapper h1{
    margin: 0;
}
.order_information {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.order_products {

}
.products_items {
  display: flex;
  background-color: var(--placeholder-color);
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
}
.products_items img {
  width: 100px;
}
</style>
