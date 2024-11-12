<script setup lang="ts">
import { ref, computed, defineProps } from 'vue'
import ProductCard from '../Home/ProductCard.vue'
import { QPagination } from 'quasar'

// Определение типов
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

// Определение props
const props = defineProps<{
  products: Product[]
  size?: number
  filters: {
    price: { min: number, max: number }
    colors: string[]
    categories: string[]
    sizes: string[]
    styles: string[]
  }
}>()

// Состояние
const pageNumber = ref(1) // Начальное значение страницы

const scrollToTop = () => {
  const container = document.querySelector('.pagination-container')
  if (container) {
    container.scrollIntoView({ behavior: 'smooth' })
  }
}

// Вычисляемые свойства
const pageCount = computed(() => {
  let l = props.products.length,
    s = props.size ?? 10 // Используем значение по умолчанию, если size не передан
  return Math.ceil(l / s)
})

const paginatedData = computed(() => {
  const start = (pageNumber.value - 1) * (props.size ?? 10),
    end = start + (props.size ?? 10)
  return props.products.slice(start, end)
})
</script>

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

<style module>
.container {
  margin: 0 auto
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