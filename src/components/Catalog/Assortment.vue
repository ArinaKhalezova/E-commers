<template>
  <div>
    <Pagination :products="products" :size="pageSize" v-if="!loading"/>
    <q-inner-loading :showing="loading" color="orange" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Pagination from './Pagination.vue'

const products = ref([])
const pageSize = 12
const loading = ref(true)

onMounted(async () => {
  try {
    loading.value = true
    // await new Promise(resolve => setTimeout(resolve, 2000)); 
    const response = await fetch('http://localhost:5173/assortment')
    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }
    products.value = await response.json()
  } catch (error) {
    console.error('Error fetching products:', error)
  }
  finally {
    loading.value = false
  }
})
</script>