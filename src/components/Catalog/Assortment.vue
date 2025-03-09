<template>
  <div :class="$style.assortment_container">
    <Filters :class="$style.assortment_filters" @update:modelValue="handleFilterUpdate" />
    <Catalog :products="products" :size="pageSize" v-if="!loading" :filters="filtersData" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Catalog from './Catalog.vue'
import Filters from '@/components/Catalog/Filters.vue'

const products = ref([])
const pageSize = 12
const loading = ref(true)

const filtersData = ref({
  category: { t_shirts: false, shorts: false, shirts: false, jeans: false },
  price: { min: 10, max: 300 }
})

const handleFilterUpdate = (value: any) => {
  filtersData.value = value
}

onMounted(async () => {
  try {
    loading.value = true
    const response = await fetch('http://localhost:5173/assortment')
    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }
    products.value = await response.json()
  } catch (error) {
    console.error('Error fetching products:', error)
  } finally {
    loading.value = false
  }
})
</script>

<style module>
.assortment_filters {
  display: none;
}
.assortment_container {
  /* display: grid; */
  /* grid-template-columns: 1fr; */
  justify-items: center;
}
@media (min-width: 1024px) {
  .assortment_container {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
  .assortment {
    margin: 0 100px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    justify-items: center;
  }
  .assortment_filters {
    display: block;
  }
}
</style>
