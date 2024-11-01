<script setup lang="ts">
import Breadcrumbs from '@/components/Catalog/Breadcrumbs.vue';
import Assortment from '@/components/Catalog/Assortment.vue';
</script>

<template>
  <!-- <div class="assortment" id="assortment">
    <h1>This is a assortment page</h1>
  </div> -->
  <Breadcrumbs />
  <!-- <Products /> -->
  <ProductsCopy />
  <Assortment />
</template>

<style>
@media (min-width: 1024px) {
  .assortment {
    background-color: white;
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
