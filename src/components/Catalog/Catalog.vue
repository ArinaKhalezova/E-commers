<template>
  <div :class="$style.container">
    <div>
      <!-- <h2>Фильтры:</h2>
      <p>Категории: {{ filters.category }}</p>
      <p>Цена: от {{ filters.price.min }} до {{ filters.price.max }}</p>
      <p>Цвета: {{ filters.color }}</p>
      <p>Размеры: {{ filters.size }}</p>
      <p>Стиль: {{ filters.style }}</p> -->
    </div>
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
import { TProduct } from '@/data/products.types'

const props = defineProps<{
  products: TProduct[]
  filters: {
    category: { t_shirts: false; shorts: false; shirts: false; jeans: false } | undefined
    price: { min: number; max: number } | undefined
    color:
      | {
          green: false
          red: false
          yellow: false
          orange: false
          lightBlue: false
          blue: false
          purple: false
          pink: false
          white: false
          black: false
        }
      | undefined
    size:
      | {
          xsmall: false
          small: false
          medium: false
          large: false
          xlarge: false
        }
      | undefined
    style:
      | {
          casual: false
          formal: false
          party: false
          gym: false
        }
      | undefined
  }
  sizeNumb: number
}>()

const pageNumber = ref(1)

const isAnyCategorySelected = computed(() => {
  return props.filters?.category && Object.values(props.filters.category).some(Boolean)
})

const isAnyColorSelected = computed(() => {
  return props.filters?.color && Object.values(props.filters.color).some(Boolean)
})

const isAnySizeSelected = computed(() => {
  return props.filters?.size && Object.values(props.filters.size).some(Boolean)
})

const isAnyStyleSelected = computed(() => {
  return props.filters?.style && Object.values(props.filters.style).some(Boolean)
})

const filteredProducts = computed(() => {
  const { category, price, color, size, style } = props.filters || {}

  return props.products.filter((product) => {
    // Фильтрация по категории
    const categoryKey = product.category?.toLowerCase() as keyof typeof category
    const isCategoryMatch = !isAnyCategorySelected.value || (category && category[categoryKey])

    // Фильтрация по цене
    const productPrice = product.cost
    const isPriceInRange = !price || (productPrice >= price.min && productPrice <= price.max)

    // Фильтрация по цвету
    const colors = product.aspects[0].variants.map((variant) => variant.color.toLowerCase())
    const isColorMatch = !isAnyColorSelected.value || colors.some(color => props.filters.color?.[color as keyof typeof props.filters.color])

    // Фильтрация по размеру
    const sizes = product.aspects[0].variants.flatMap(variant => variant.sizes.map(size => size.size.toLowerCase()))
    const isSizeMatch = !isAnySizeSelected.value || sizes.some(size => props.filters.size?.[size as keyof typeof props.filters.size])

    // Фильтрация по стилям
    const styleKey = product.style?.toLowerCase() as keyof typeof style
    const isStyleMatch = !isAnyStyleSelected.value || (style && style[styleKey])

    return isCategoryMatch && isPriceInRange && isColorMatch && isSizeMatch && isStyleMatch
  })
})

const pageCount = computed(() => {
  const length = props.products.length
  const sizeNumb = props.sizeNumb ?? 10
  return Math.ceil(length / sizeNumb)
})

const paginatedData = computed(() => {
  const start = (pageNumber.value - 1) * (props.sizeNumb ?? 10)
  const end = start + (props.sizeNumb ?? 10)
  return filteredProducts.value.slice(start, end)
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
    width: 20vw;
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
