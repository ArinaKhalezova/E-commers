<template>
  <div :class="$style.reviews_container">
    <div :class="$style.slide">
      <div :class="$style.reviews_card" v-for="review in productReviews" :key="review.id">
        <div :class="$style.product_rating">
          <q-rating v-model="ratingModel" size="25px" color="yellow-8" readonly />
        </div>

        <h2>{{ review.title }}</h2>
        <p>{{ review.text }}</p>
      </div>
    </div>
    <!-- <div v-for="review in reviews" :key="review.id" :class="$style.reviews_item">
        <ReviewsCard :review="review"/>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import ReviewsCard from '../Home/ReviewsCard.vue'
import { reviewsData } from '@/data/reviews' // Исправлен импорт
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

defineProps<{
  reviews: {
    id: string
    title: string
    text: string
  }[]
}>()

const route = useRoute()
const reviewId = computed(() => route.params.id as string)

const productReviews = computed(() => {
  const product = reviewsData.find((p) => p.id_product === reviewId.value)
  return product ? product.review : []
})

const ratingModel = ref(5)
</script>


<style module>
.reviews_container {
 margin: 0 16px
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
 margin: 0 100px
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
