<script setup lang="ts">
import Breadcrumbs from '@/components/Catalog/Breadcrumbs.vue'
import Assortment from '@/components/Catalog/Assortment.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { generateBreadcrumbs } from '@/data/Breadcrumbs'
import Filters from '@/components/Catalog/Filters.vue'
const route = useRoute()
const breadcrumbs = computed(() => {
  return generateBreadcrumbs(route)
})
</script>

<template>
  <div :class="$style.assortment_container">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <div :class="$style.assortment">
      <Filters :class="$style.assortment_filters" />
      <Assortment />
    </div>
  </div>
</template>

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
