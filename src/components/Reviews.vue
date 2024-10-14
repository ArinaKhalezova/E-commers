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
  }
]

const itemsToShow = ref(2)

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
  <div class="reviews_wrap">
    <h1>OUR HAPPY CUSTOMERS</h1>
    <Carousel
      :items-to-show="itemsToShow"
      :items-to-scroll="1"
    >
      <Slide v-for="review in reviews" :key="review.id" class="slide">
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
h1 {
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
  margin: 0 5px;
}
.reviews_card h2 {
  font-size: 16px;
  font-weight: 900;
  margin: 12px 0 8px;
}
.reviews_card p {
  font-size: 14px;
}
.reviews_card {
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
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
