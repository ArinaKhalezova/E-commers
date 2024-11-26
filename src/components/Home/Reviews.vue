<template>
  <div :class="$style.reviews_wrap">
    <div :class="$style.carousel_container">
      <div :class="$style.carousel_controls">
        <h1>OUR HAPPY CUSTOMERS</h1>
        <div :class="$style.carousel_controls_item">
          <button @click="carouselRef.prev()">
            <img src="/src/assets/img/arrow_left.png" alt="Previous" />
          </button>
          <button @click="carouselRef.next()">
            <img src="/src/assets/img/arrow_right.png" alt="Next" />
          </button>
        </div>
      </div>
      <Carousel ref="carouselRef" :items-to-show="itemsToShow" :items-to-scroll="1">
        <Slide v-for="review in reviews" :key="review.id">
          <ReviewsCard :review="review" />
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import ReviewsCard from './ReviewsCard.vue'
import { homeReviews as reviews } from '@/data/homeReviews'

const itemsToShow = ref(1)
const carouselRef = ref<any>(null)

const updateItemsToShow = () => {
  if (window.innerWidth >= 1024) {
    itemsToShow.value = 3
  } else if (window.innerWidth > 768 && window.innerWidth < 1024) {
    itemsToShow.value = 2
  } else {
    itemsToShow.value = 1
  }
}

onMounted(() => {
  updateItemsToShow()
  window.addEventListener('resize', updateItemsToShow)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateItemsToShow)
})
</script>

<script lang="ts">
export default {
 name: "HomeReviews"
}
</script>

<style module>
.reviews_wrap h1 {
  line-height: 1;
  font-family: 'IntegralCF';
  font-size: 32px;
  font-weight: 900;
  margin: 50px 0 32px;
  display: flex;
  justify-content: center;
}

.reviews_wrap {
  font-family: 'Satoshi';
  margin: 24px 16px;
}

.carousel_container {
  position: relative;
}

.carousel_controls {
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
}

.carousel_controls_item {
  position: absolute;
  top: 1;
  right: 0;
  display: flex;
  gap: 10px;
  z-index: 10;
}

.carousel_controls_item button {
  background: none;
  border: none;
  cursor: pointer;
}
.carousel_controls_item img {
  width: 16px;
}

@media (min-width: 1024px) {
  .reviews_wrap h1 {
    font-size: 48px;
    justify-content: flex-start;
  }
  .reviews_wrap {
    margin: 0 100px;
  }

  .slide {
    max-width: 400px;
  }
}
</style>
