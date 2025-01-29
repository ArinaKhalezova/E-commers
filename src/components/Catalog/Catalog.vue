<template>
  <div :class="$style.assortment_container">
    <Filters :class="$style.assortment_filters" />
    <Pagination :products="products" :size="pageSize" v-if="!loading" />

    <!-- <q-inner-loading :showing="loading" color="orange" /> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Pagination from './Pagination.vue'
import Filters from '@/components/Catalog/Filters.vue'

const products = ref([])
const pageSize = 12
const loading = ref(true)

// methods: {
//   onLoginChanged: function(login) {
//     this.login = login;
//   }
// },
// mounted: function() {
//   this.$on('login-changed', this.onLoginChanged)
// }

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
  display: grid;
  grid-template-columns: 1fr 3fr;
  justify-items: center;
}
@media (min-width: 1024px) {
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
