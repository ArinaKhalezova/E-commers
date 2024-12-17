<template>
  <div :class="$style.container">
    <div :class="$style.pagination_container">
      <div :class="$style.product_list">
        <div v-for="product in paginatedData" :key="product.id" class="product-item">
          <ProductCard :product="product" :class="$style.customProductCard" />
        </div>
      </div>

      <div id="q-app" :class="$style.navigation">
        <div class="q-pa-lg">
          <div class="q-gutter-md">
            <q-pagination
              v-model="pageNumber"
              color="black"
              :max="pageCount"
              :max-pages="3"
              boundary-numbers
              direction-links
            ></q-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps } from 'vue'
import ProductCard from '../Home/ProductCard.vue'

interface Product {
  id: string
  product_img: string
  title: string
  rating: string
  cost: string
  ratingModel: number
  category: string
  color: string
  size: string
  style: string
}

const props = defineProps<{
  products: Product[]
  size?: number
}>()

const pageNumber = ref(1)

const pageCount = computed(() => {
  const length = props.products.length
  const size = props.size ?? 10
  return Math.ceil(length / size)
})

const paginatedData = computed(() => {
  const start = (pageNumber.value - 1) * (props.size ?? 10)
  const end = start + (props.size ?? 10)
  return props.products.slice(start, end)
})
</script>

<style module>
  .container {
    margin: 0 auto;
  }

  .filters_container {
    display: none;
  }
  .pagination_container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .product_list {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .navigation {
    display: flex;
    justify-content: center;
  }

  .customProductCard img {
    width: 172px;
  }

  @media (min-width: 680px) {
    .customProductCard img {
      width: 210px;
    }
    .product_list {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media (min-width: 1024px) {
    .customProductCard img {
      width: 295px;
    }
    .filters_container {
      display: block;
      background-color: var(--light-background-color);
    }
    .product_list {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
    }
  }
</style>
