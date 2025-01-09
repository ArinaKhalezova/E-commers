<template>
  <div :class="$style.product_container">
    <div :class="$style.product_content">
      <div :class="$style.product_img" @click="goToProduct(product.id)">
        <img :src="product.product_img" :alt="product.title" />
        <!-- <img :src="product.product_img" alt="Product Image" /> -->
      </div>
      <div :class="$style.product_info">
        <div :class="$style.product_header">
          <div :class="$style.product_name">
            <h2>{{ product.title }}</h2>
          </div>
          <div :class="$style.product_delete" @click="productStore.deleteProduct(product.id)">
            <img src="/public/assets/images/delete.png" alt="delete" />
          </div>
        </div>
        <div :class="$style.product_characteristics">
          <p>{{ 'Size: ' + product.size }}</p>
          <p>{{ 'Color: ' + product.color }}</p>
          <!-- <p>Size: Medium</p>
          <p>Color: White</p> -->
        </div>
        <div :class="$style.product_footer">
          <div :class="$style.product_price">
            <h3>{{ '$' + product.cost }}</h3>
          </div>
          <div :class="$style.product_counter">
            <Counter
              :count="product.quantity"
              @update:count="updateQuantity"
              :class="$style.actions_counter"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr :class="$style.product_line" />
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import type { TProduct } from '@/data/products.types'
import Counter from '../ProductPage/Counter.vue'
import { useProductStore } from '@/stores/productStore'

const productStore = useProductStore()

const props = defineProps<{
  product: TProduct
}>()

const updateQuantity = (quantity: number) => {
  productStore.updateProductQuantity(props.product.id, quantity)
}
const router = useRouter()

const goToProduct = (id: number) => {
  router.push({ name: 'productPage', params: { id } })
}
</script>

<style module>
.product_container {
  border-radius: 30px;
  padding: 14px;
}
.product_content {
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 14px;
  align-items: center;
  line-height: 1;
}
.product_img {
  cursor: pointer;
  margin: auto;
}
.product_img img {
  width: 99px;
}
.product_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product_name h2 {
  font-family: 'Satoshi';
  font-size: 16px;
  font-weight: 900;
}
.product_delete {
  cursor: pointer;
}
.product_delete img {
  width: 20px;
}
.product_characteristics {
  justify-content: start;
  font-family: 'Satoshi';
  font-size: 12px;
  padding: 4px 0;
}
.product_characteristics > * {
  padding: 2px 0;
}
.product_footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product_price h3 {
  font-family: 'Satoshi';
  font-size: 20px;
  font-weight: 900;
}
.actions_counter {
  width: 105px;
  gap: 0px;
  padding: 7.5px 13.5px;
}
.actions_counter p {
  padding: 7px 13px;
  font-size: 14px;
}
.actions_counter img {
  width: 12.5px;
}
.product_line {
  width: auto;
  margin: auto;
  border: 1px solid var(--light-background-color);
}
</style>
