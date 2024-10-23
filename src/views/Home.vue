<script setup lang="ts">
import Heading from '@/components/Heading.vue'
import Products from '@/components/Products.vue'
import TopSelling from '@/components/Products.vue'
import Style from '@/components/BrowesByStyle.vue'
import Reviews from '@/components/Reviews.vue'
import Offer from '@/components/Offer.vue'
import Footer from '@/components/Footer.vue'


import { ref } from 'vue'

const ratingModel = ref(3)
</script>

<template>
  <div class="wrapper">
    <Heading />
    <Products/>
    <Style></Style>
    <Reviews />
    <Offer />
    <Footer></Footer>
  </div>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column">
      <q-rating
        v-model="ratingModel"
        size="3.5em"
        color="green-5"
        icon="star_border"
        icon-selected="star"
      />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: #ffffff;
  line-height: 1.5;
}

@media (min-width: 1024px) {
}
</style>
