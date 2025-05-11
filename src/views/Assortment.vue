<template>
  <div v-if="!loading">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <div>
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
const route = useRoute()
const breadcrumbs = computed(() => {
  return generateBreadcrumbs(route)
})

const loading = ref(true)

onMounted(async () => {
  try {
    loading.value = true
  } catch (error) {
    console.error('Error fetching data:', error)
  } finally {
    loading.value = false
  }
})
</script>

<style module></style>
