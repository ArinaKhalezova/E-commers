<script setup lang="ts">
import Heading from '@/components/Heading.vue'
import Products from '@/components/Products.vue'
import TopSelling from '@/components/Products.vue'
import Style from '@/components/BrowesByStyle.vue'
import Reviews from '@/components/Reviews.vue'
import Offer from '@/components/Offer.vue'
import Footer from '@/components/Footer.vue'
import RatingStars from '@/components/RatingStars.vue'
</script>

<template>
  <div class="wrapper">
    <Heading />
    <Products/>
    <TopSelling />
    <Style></Style>
    <Reviews />
    <Offer />
    <RatingStars />
    <Footer></Footer>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: #ffffff;
}

@media (min-width: 1024px) {
}
</style>
