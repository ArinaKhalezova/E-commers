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
          <div :class="$style.product_delete" @click="deleteProduct">
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
import { defineProps, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import type { TProduct } from '@/data/products.types'
import Counter from '../ProductPage/Counter.vue'
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()

const props = defineProps<{
  product: TProduct
}>()

const updateQuantity = async (quantity: number) => {
   await cartStore.updateProductQuantity(props.product.id, quantity)
  // cartStore.updateProductQuantity(props.product.id, quantity)
}
const router = useRouter()

const deleteProduct = async () => {
  await cartStore.deleteProduct(props.product.id)
}

const goToProduct = (id: number) => {
  router.push({ name: 'productPage', params: { id } })
}

onMounted(async () => {
  try {
    const cartResponce = await fetch('/api/products')
    if (!cartResponce.ok) {
      throw new Error('Failed to fetch product data')
    }
    cartStore.value = await cartResponce.json()
  } catch (error) {
    console.error('Error fetching cart:', error)
  }
})
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
