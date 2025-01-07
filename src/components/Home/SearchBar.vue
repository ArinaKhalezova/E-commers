<template>
  <div :class="$style.search_container">
    <input
      type="text"
      v-model="input"
      placeholder="Search for products..."
      :class="$style.search_bar"
    />
    <div v-if="input" :class="$style.search_items">
      <div
        class="item product"
        v-for="product in filteredList"
        :key="product.id"
        @click="resetInput"
      >
        <router-link :to="`/productPage/${product.id}`">{{ product.title }}</router-link>
      </div>
      <div class="item error" v-if="input && !filteredList.length">
        <p>No results found!</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { products } from '@/data/products' 
import { useRoute } from 'vue-router'

const input = ref<string>('')
const route = useRoute()

const filteredList = computed(() => {
  return products.filter((product) =>
    product.title.toLowerCase().includes(input.value.toLowerCase())
  )
})

const resetInput = () => {
  input.value = ''
}
const productId = route.params.id as string | undefined
</script>

<style module>
.search_container {
  position: relative;
  width: 100%;
}

.search_bar {
  width: 100%;
  outline: none;
  background-color: var(--light-background-color);
  color: var(--subtitle-color);
  border: 0 solid;
  border-radius: 25px;
  padding: 12px 18px;
}

.search_items {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: var(--light-background-color);
  border: 1px solid #e6e3e3;
  border-radius: 25px;
  padding: 12px 18px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
}
</style>
