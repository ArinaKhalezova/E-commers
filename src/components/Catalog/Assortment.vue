<script setup lang="ts">
import Pagination from './Pagination.vue'
import { products } from '@/data/Products'


const pageSize = 6
</script>

<template>
  <div>
    <Pagination :products="products" :size="pageSize" />
  </div>
</template>
