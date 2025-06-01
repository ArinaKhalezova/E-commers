<template>
  <div :class="$style.reviews_container">
    <div :class="$style.slide">
      <div :class="$style.reviews_card" v-for="review in reviews" :key="review.id_product">
        <div :class="$style.product_rating">
          <q-rating v-model="review.ratingModel" size="25px" color="yellow-8" readonly />
        </div>
        <h2>{{ review.title }}</h2>
        <p>{{ review.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TCardReview } from '@/data/reviews.types'

defineProps<{
  reviews: TCardReview[]
}>()
</script>

<style module>
.reviews_container {
  margin: 0 16px;
}

.slide > * {
  border: 1px solid #0000000f;
  border-radius: 20px;
  margin: 0 10px;
}

.slide {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
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
  .reviews_container {
    margin: 0 100px;
  }

  .slide {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .reviews_card h2 {
    font-size: 16px;
    padding: 12px 0 8px;
  }

  .reviews_card p {
    font-size: 14px;
    margin: 0;
  }

  .reviews_card {
    padding: 24px;
  }
}
</style>
