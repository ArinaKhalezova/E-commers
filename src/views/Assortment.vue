<script setup lang="ts">
import Breadcrumbs from '@/components/Catalog/Breadcrumbs.vue';
import Assortment from '@/components/Catalog/Assortment.vue';
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { generateBreadcrumbs } from '@/data/breadcrumbs'

const route = useRoute()
const breadcrumbs = computed(() => {
  return generateBreadcrumbs(route)
})
</script>

<template>
  <div :class="$style.assortment">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
  <Assortment />
  </div>

</template>

<style module>
@media (min-width: 1024px) {
  .assortment {

  }
}
</style>
