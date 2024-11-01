<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { ref, onMounted, onBeforeUnmount } from 'vue'

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
  },
  {
    id: '4',
    title: 'Sarah M.',
    text: '"I`m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I`ve bought has exceeded my expectations.”'
  },
  {
    id: '5',
    title: 'Sarah M.',
    text: '"I`m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I`ve bought has exceeded my expectations.”'
  },
  {
    id: '6',
    title: 'James L.',
    text: '"As someone who`s always on the lookout for unique fashion pieces, I`m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”'
  },
]

const ratingModel = ref(5)
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
        <Slide v-for="review in reviews" :key="review.id" :class="$style.slide">
          <div :class="$style.reviews_card">
            <div :class="$style.product_rating">
          <q-rating
            v-model="ratingModel"
            size="25px"
            color='yellow-8'
            readonly
          />
      </div>
            <!-- <img src="/src/assets/img/stars.png" alt="" width="138px" /> -->
            <h2>{{ review.title }}</h2>
            <p>{{ review.text }}</p>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

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

.slide {
  border: 1px solid #0000000f;
  border-radius: 20px;
  margin: 0 10px;
}

.reviews_card h2 {
  line-height: 1;
  font-size: 16px;
  font-weight: 900;
  padding: 12px 0 8px;

}

.reviews_card p {
  font-size: 14px;
  margin: 0;
}

.reviews_card {
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
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

  .reviews_card {
    padding: 28px 32px;
  }

  .reviews_card h2 {
    font-size: 20px;
    font-weight: 900;
    padding: 15px 0 12px;
  }

  .reviews_card p {
    font-size: 16px;
  }

  .slide {
    max-width: 400px;
  }
}
</style>
