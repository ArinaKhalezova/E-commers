<script setup lang="ts">
import { ref, computed } from 'vue'

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

const slide = ref('1')
const autoplay = ref(false)

const visibleSlides = computed(() => {
  return window.innerWidth >= 1024 ? 3 : 1
})

const transitionPrev = computed(() => {
  return window.innerWidth >= 1024 ? 'slide-right' : 'slide-left'
})

const transitionNext = computed(() => {
  return window.innerWidth >= 1024 ? 'slide-left' : 'slide-right'
})
</script>

<template>
  <div class="reviews_wrap">
    <h1>OUR HAPPY CUSTOMERS</h1>
    <div class="carousel-container">
      <q-carousel
        swipeable
        animated
        v-model="slide"
        ref="carousel"
        infinite
        :visible-slides="visibleSlides"
        :transition-prev="transitionPrev"
        :transition-next="transitionNext"
        :autoplay="autoplay"
        :arrows="true"
        :navigation="true"
      >
        <template v-slot:control>
          <q-carousel-control position="top-right" :offset="[12, 10]" class="q-gutter-xs">
            <div class="carousel-controls">
              <q-btn
                flat
                text-color="black"
                icon="arrow_back"
                @click="$refs.carousel.previous()"
              ></q-btn>
              <q-btn
                flat
                text-color="black"
                icon="arrow_forward"
                @click="$refs.carousel.next()"
              ></q-btn>
            </div>
          </q-carousel-control>
        </template>
        <q-carousel-slide v-for="review in reviews" :key="review.id" :name="review.id">
          <div class="slide">
            <div class="reviews_card">
              <h2>{{ review.title }}</h2>
              <p>{{ review.text }}</p>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<style scoped>
.reviews_wrap h1 {
  z-index: 1;
  position: relative;
  transform: translate(0, 55px);
  font-family: 'IntegralCF';
  font-size: 32px;
  line-height: 1;
  font-weight: 900;
  margin: 0 0 32px;
  display: flex;
  justify-content: center;
}

.reviews_wrap {
  font-family: 'Satoshi';
  margin: 24px 16px;
}

.slide {
  border: 1px solid #0000000f;
  border-radius: 20px;
  margin: 55px 0px;
}

.reviews_card h2 {
  font-size: 16px;
  font-weight: 900;
  margin: 12px 0 8px;
}

.reviews_card p {
  font-size: 14px;
}

.q-carousel__slide,
.q-carousel .q-carousel--padding {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  overflow: hidden;
  padding: 0;
}
.reviews_card {
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}
.carousel-controls {
  z-index: 5;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  padding: 0 10px;
}

@media (min-width: 1024px) {
  h1 {
    font-size: 48px;
    justify-content: flex-start;
    margin-left: 200px;
  }

  .reviews_card {
    width: 400px;
    height: 240px;
  }

  .reviews_card h2 {
    font-size: 20px;
    font-weight: 900;
    margin: 15px 0 12px;
  }

  .reviews_card p {
    font-size: 16px;
  }

  .slide {
    margin: 0 20px;
  }
}
</style>
