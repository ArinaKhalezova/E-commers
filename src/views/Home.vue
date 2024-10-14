<script setup lang="ts">
import Heading from '@/components/Heading.vue'
import NewArrivals from '@/components/NewArrivals.vue'
import TopSelling from '@/components/TopSelling.vue'
import Style from '@/components/BrowesByStyle.vue'
import Reviews from '@/components/Reviews.vue'
import Offer from '@/components/Offer.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="wrapper">
    <Heading />
    <NewArrivals />
    <TopSelling />
    <Style></Style>
    <Reviews />
    <Offer />
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
