<template>
  <div :class="$style.product_container">
    <div :class="$style.product">
      <div @click="goToProduct(product.id)" :class="$style.product_content">
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
      <div :class="$style.cart_actions">
        <div :class="$style.actions_delete">
          <img src="/src/assets/img/delete.png" alt="" />
        </div>
        <div :class="$style.actions_add">
          <Counter :class="$style.actions_counter"/>
        </div>
      </div>
    </div>
    <hr :class="$style.product_line" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import type { TProduct } from '@/data/products'
import Counter from '../ProductPage/Counter.vue'

const props = defineProps<{
  product: TProduct
}>()

const router = useRouter()

const goToProduct = (id: number) => {
  router.push({ name: 'productPage', params: { id } })
}
</script>

<style module>
.product {
  cursor: pointer;
  display: flex;
  gap: 14px;
  padding: 14px;
}
.product_content {
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;
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
.cart_actions {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: end;
  padding-right: 16px;
}

.actions_counter {
  padding: 2.5px 13px;
}
.actions_counter p {
  padding: 7px 13px;
  font-size: 14px;
}
.actions_counter img {
  width: 12.5px;
}

.actions_delete img {
  width: 24px;
}

</style>
