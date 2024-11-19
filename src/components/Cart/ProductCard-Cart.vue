<template>
  <div :class="$style.product_container" @click="goToProduct(product.id)">
    <div :class="$style.product_img">
      <img :src="product.product_img" alt="Product Image" />
    </div>
    <div :class="$style.product_info">
      <h2>{{ product.title }}</h2>
      <div :class="$style.product_characteristics">
        <p>Size: Medium</p>
        <p>Color: White</p>
        <!-- <p>{{ 'Size:' + product.size }}</p>
        <p>{{ 'Color:' + product.color }}</p> -->
      </div>
      <h3>{{ '$' + product.cost }}</h3>
    </div>
  </div>
  <hr :class="$style.product_line" />
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import type { TProduct } from '@/data/products'

const props = defineProps<{
  product: TProduct
}>()

const router = useRouter()

const goToProduct = (id: number) => {
  router.push({ name: 'productPage', params: { id } })
}
</script>

<style module>
.product_container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 14px;
  padding: 14px;
}
.product_img img {
  width: 99px;
}
.product_info h2 {
  font-size: 16px;
  font-family: 'Satoshi';
  font-weight: 900;
}
.product_info h3 {
  font-size: 20px;
  font-family: 'Satoshi';
  font-weight: 900;
}
.product_characteristics {
  font-family: 'Satoshi';
  font-size: 12px;
}
.product_line {
  width: 330px;
  margin: auto;
  border: 1px solid var(--light-background-color);
}
</style>
