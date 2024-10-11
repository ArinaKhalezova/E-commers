<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

const reviews = [
  {
    id: '1',
    title: 'Alex K.',
    text: '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”'
  },
  {
    id: '2',
    title: 'James L.',
    text: '"As someone who`s always on the lookout for unique fashion pieces, I`m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”'
  },
  {
    id: '3',
    title: 'Sarah M.',
    text: '"I`m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I`ve bought has exceeded my expectations.”'
  }
]
</script>

<template>
  <div class="reviews_wrap">
    <Carousel :autoplay="700000" :items-to-show="1" :items-to-scroll="1" :wrap-around="true">
      <Slide v-for="review in reviews" :key="review.id">
        <div class="reviews_card">
          <img src="../assets/img/stars.png" alt="" width="138px" />
          <h2>{{ review.title }}</h2>
          <p>{{ review.text }}</p>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<style scoped>
.reviews_wrap {
  border: 1px solid #0000000f;
  border-radius: 20px;
  margin: 24px 16px;
}
.reviews_card {
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}
</style>
