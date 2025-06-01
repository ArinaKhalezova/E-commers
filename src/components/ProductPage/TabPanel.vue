<template>
  <div class="q-pa-md">
    <div>
      <q-card flat>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="black"
          indicator-color="black"
          narrow-indicator
        >
          <q-tab name="Product Details" label="Product Details" />
          <q-tab name="Rating & Reviews" label="Rating & Reviews" />
          <q-tab name="FAQs" label="FAQs" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="Product Details">
            <ProductDetails />
          </q-tab-panel>

          <q-tab-panel name="Rating & Reviews">
            <ProductReviews :reviews="reviews" />
          </q-tab-panel>

          <q-tab-panel name="FAQs">
            <div class="text-h6">FAQs</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
// import { reviewsData } from '@/data/reviews'
import ProductDetails from './ProductDetails.vue'
import type { TCardReview } from '@/data/reviews.types'
import ProductReviews from './ProductReviews.vue'

const tab = ref('Rating & Reviews')
const route = useRoute()

const reviews = ref(<TCardReview[]>[])
const reviewId = computed(() => Number(route.params.id))

const fetchReviews = async () => {
  try {
    console.log('Fetching review with ID:', reviewId.value)
    const reviewsResponse = await fetch(`/api/reviews/${reviewId.value}`)
    if (!reviewsResponse.ok) {
      throw new Error('Failed to fetch product data')
    }
    const data = await reviewsResponse.json()
    reviews.value = data.reviews
    console.log('Reviews after update:', reviews.value)
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}
onMounted(() => {
  fetchReviews()
})

watch(reviewId, () => {
  fetchReviews()
})
</script>

<style module></style>
