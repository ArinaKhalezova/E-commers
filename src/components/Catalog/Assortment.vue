<template>
  <div>
    <Pagination :products="products" :size="pageSize" />
  </div>
</template>

<script setup lang="ts">
import Pagination from './Pagination.vue'
import { products } from '@/data/products'

const pageSize = 12
</script>

