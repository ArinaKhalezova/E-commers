<script setup lang="ts">
import Heading from '@/components/Home/Heading.vue'
import Products from '@/components/Home/Products.vue'
import Style from '@/components/Home/BrowesByStyle.vue'
import Reviews from '@/components/Home/Reviews.vue'

</script>

<template>
  <div class="wrapper">
    <Heading />
    <Products id="products"/>
    <Style></Style>
    <Reviews id="reviews"/>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: #ffffff;
  line-height: 1.5;

}

@media (min-width: 1024px) {
  /* .wrapper {
    padding: 0 100px;
  } */

}
</style>
