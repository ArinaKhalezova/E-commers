<template>
  <div :class="$style.assortment_container" v-if="!loading">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <div :class="$style.assortment">
      <Filters :class="$style.assortment_filters" />
      <Assortment />
    </div>
  </div>
  <q-inner-loading :showing="loading" color="orange" />
</template>

<script setup lang="ts">
import Breadcrumbs from '@/components/Catalog/Breadcrumbs.vue'
import Assortment from '@/components/Catalog/Assortment.vue'
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { generateBreadcrumbs } from '@/data/breadcrumbs'
import Filters from '@/components/Catalog/Filters.vue'
const route = useRoute()
const breadcrumbs = computed(() => {
  return generateBreadcrumbs(route)
})

const loading = ref(true)

onMounted(async () => {
  try {
    loading.value = true
    // await new Promise(resolve => setTimeout(resolve, 2000)); 
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  finally {
    loading.value = false
  }
})
</script>

<style module>
.assortment_filters {
  display: none;
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
