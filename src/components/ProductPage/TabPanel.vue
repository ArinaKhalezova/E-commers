<template>
  <div class="q-pa-md">
    <div>
      <q-card flat>
        <q-tabs v-model="tab" dense class="text-grey" active-color="black" indicator-color="black" narrow-indicator>
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
            <div :class="$style.reviews_container">
              <div :class="$style.slide">
                <div :class="$style.reviews_card" v-for="productReview in reviews" :key="productReview.id_product">
                  <div v-for="review in productReview.review" :key="review.id">
                    <div :class="$style.product_rating">
                      <q-rating v-model="review.ratingModel" size="25px" color="yellow-8" readonly />
                    </div>
                    <h2>{{ review.title }}</h2>
                    <p>{{ review.text }}</p>
                  </div>
                </div>
              </div>
            </div>
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
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
// import { reviewsData } from '@/data/reviews'
import ProductDetails from './ProductDetails.vue'
import type { TCardReview } from '@/data/reviews.types'

const tab = ref('Rating & Reviews')
const route = useRoute()

const reviews = ref(<TCardReview[]>([]))
const reviewId = computed(() => Number(route.params.id))

onMounted(async () => {
  try {
    console.log('Fetching review with ID:', reviewId.value)
    const reviewsResponse = await fetch(`/api/reviews/${reviewId.value}`)
    if (!reviewsResponse.ok) {
      throw new Error('Failed to fetch product data')
    }
    const data = await reviewsResponse.json()
    reviews.value = data.reviews
    console.log('Reviews after update:', reviews.value); 
  } catch (error) {
    console.error('Error fetching products:', error)
  }
})
</script>

<style module>
.reviews_container {
  margin: 0 16px;
}

.slide>* {
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
