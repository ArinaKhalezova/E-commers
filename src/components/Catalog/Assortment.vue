<template>
  <div>
    <Pagination :products="products" :size="pageSize" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Pagination from './Pagination.vue'

const products = ref([])
const pageSize = 12

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:5173/assortment')
    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }
    products.value = await response.json()
  } catch (error) {
    console.error('Error fetching products:', error)
  }
})
</script>