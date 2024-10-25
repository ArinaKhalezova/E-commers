<script setup lang="ts">
import Header from '@/components/Header.vue'
import Heading from '@/components/Heading.vue'
import Products from '@/components/Products.vue'
import Style from '@/components/BrowesByStyle.vue'
import Reviews from '@/components/Reviews.vue'
import Offer from '@/components/Offer.vue'


import { ref } from 'vue'


const ratingModel = ref(3)
</script>

<template>
  <div class="wrapper">
    <Heading />
    <Products id="products"/>
    <Style></Style>
    <Reviews id="reviews"/>
    <Offer id="offer"/>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: #ffffff;
  line-height: 1.5;

}

@media (min-width: 1024px) {
  .wrapper {
    padding: 0 100px;
  }

}
</style>
