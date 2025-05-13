<template>
  <div :class="$style.slide">
    <div :class="$style.reviews_card">
      <div :class="$style.product_rating">
        <q-rating v-model="review.ratingModel" size="25px" color="yellow-8" readonly />
      </div>
      <!-- <img src="/src/assets/img/stars.png" alt="" width="138px" /> -->
      <h2>{{ review.title }}</h2>
      <p>{{ review.text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TReview } from '@/data/reviews.types'

const ratingModel = ref(5)

const props = defineProps<{
  review: TReview
}>()
</script>

<style module>
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
  font-family: 'Satoshi';
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

@media (min-width: 1024px) {
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
}
</style>
