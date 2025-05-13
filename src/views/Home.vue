<template>
  <div class="wrapper">
    <Heading />
    <Products id="products" class="products"/>
    <Style></Style>
    <Reviews id="reviews" />
  </div>
</template>

<script setup lang="ts">
import Heading from '@/components/Home/Heading.vue'
import Products from '@/components/Home/Products.vue'
import Style from '@/components/Home/BrowesByStyle.vue'
import Reviews from '@/components/Home/Reviews.vue'
</script>

<style scoped>
.wrapper {
  background-color: #ffffff;
  line-height: 1.5;
  width: auto;
}

</style>
