<template>
  <div v-if="product">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <div :class="$style.product_container">
      <div :class="$style.product_img">
        <div id="q-app">
          <div>
            <q-splitter v-model="splitterModel">
              <template v-slot:before>
                <q-tabs v-model="tab" vertical class="text-teal">
                  <q-tab name="first">
                    <q-img :src="product.product_img"></q-img>
                  </q-tab>
                  <q-tab name="second">
                    <q-img :src="product.product_img"></q-img>
                  </q-tab>
                  <q-tab name="third">
                    <q-img :src="product.product_img"></q-img>
                  </q-tab>
                </q-tabs>
              </template>

              <template v-slot:after>
                <q-tab-panels
                  v-model="tab"
                  animated
                  swipeable
                  vertical
                  transition-prev="jump-up"
                  transition-next="jump-up"
                >
                  <q-tab-panel name="first">
                    <q-img :src="product.product_img"></q-img>
                  </q-tab-panel>

                  <q-tab-panel name="second">
                    <q-img :src="product.product_img"></q-img>
                  </q-tab-panel>

                  <q-tab-panel name="third">
                    <q-img :src="product.product_img"></q-img>
                  </q-tab-panel>
                </q-tab-panels>
              </template>
            </q-splitter>
          </div>
        </div>
      </div>
      <div :class="$style.product_info_container">
        <div :class="$style.product_info">
          <h1>{{ product.title }}</h1>
          <div :class="$style.product_rating">
            <q-rating v-model="ratingModel" size="18px" color="yellow-8" readonly />
            <p>{{ product.rating + '/5' }}</p>
          </div>
          <h2>{{ '$' + product.cost }}</h2>
          <p>{{ product.description }}</p>
        </div>
        <div :class="$style.product_color">
          <p>Select color</p>
          <div id="q-app">
            <div class="q-pa-md">
              <div class="q-gutter-xs" :class="$style.colors_items">
                <ProductPageColor
                  v-for="color in availableColors"
                  :key="color"
                  :color="color"
                  v-model:model-value="selectedColor"
                />
              </div>
            </div>
          </div>
        </div>
        <div :class="$style.product_syze">
          <p>Choose Size</p>
          <div class="q-gutter-xs">
            <ProductPageSize
              :arr="allSizes"
              :key="size"
              :size="size"
              v-model:model-value="selectedSize"
            />
          </div>
        </div>
        <div :class="$style.product_add">
          <Counter
            v-if="currentProductInCart"
            :count="currentProductInCart.quantity"
            @update:count="updateProductQuantity"
          />
          <ButtonDark
            :text="`${!currentProductInCart ? 'Add' : 'Go'} to Cart`"
            :class="$style.button"
            @click="onAddProduct"
          />
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Breadcrumbs from '../Catalog/Breadcrumbs.vue'
import { useCartStore } from '@/stores/cartStore'
import type { TProduct, Variant } from '@/data/products.types'
import { generateBreadcrumbs } from '@/data/breadcrumbs'
import Counter from './Counter.vue'
import ButtonDark from '../Home/ButtonDark.vue'
import ProductPageColor from './Color.vue'
import ProductPageSize from './Size.vue'

const cartStore = useCartStore()
const route = useRoute()
const router = useRouter()

const productVariants = ref<Variant[]>([])
const products = ref<TProduct[]>([])
const productId = computed(() => Number(route.params.id))

const tab = ref('first')
const splitterModel = ref(20)

const product = computed(() => {
  return products.value.find((p) => p.id === productId.value)
})

const ratingModel = ref(product.value ? product.value.ratingModel : 3)

const breadcrumbs = computed(() => {
  return generateBreadcrumbs(route)
})

const currentProductInCart = computed(() => {
  if (!product.value || !selectedColor.value || !selectedSize.value) {
    return null
  }

  const selectedVariant = product.value.aspects[0].variants.find(
    (variant) => variant.color === selectedColor.value
  )

  if (!selectedVariant) {
    return null
  }

  const selectedSizeVariant = selectedVariant.sizes.find((size) => size.size === selectedSize.value)

  if (!selectedSizeVariant) {
    return null
  }

  return cartStore.products.find((p) => p.sku === selectedSizeVariant.sku)
})

//ВЫБОР ЦВЕТА
type TColor =
  | 'red'
  | 'green'
  | 'yellow'
  | 'orange'
  | 'lightBlue'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'white'
  | 'black'
// const selectedColor = ref<TColor>('red')

const COLORS_SORTING = [
  'green',
  'red',
  'yellow',
  'orange',
  'lightBlue',
  'blue',
  'purple',
  'pink',
  'white',
  'black'
]
//доступные цвета
const availableColors = computed(() => {
  if (!product.value || !product.value.aspects || product.value.aspects.length === 0) {
    return []
  }
  const colors = product.value.aspects[0].variants.map((variant) => variant.color)
  return COLORS_SORTING.filter((color) => colors.includes(color))
})

const selectedColor = ref<TColor>(availableColors.value[0])
console.log('!!!Выбран цвет:', availableColors.value)

watch(availableColors, (newColor) => {
  if (newColor.length > 0) {
    selectedColor.value = newColor[0]
  } else {
    selectedColor.value = ''
  }
})

//ВЫБОР РАЗМЕРА
type TSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
const SIZES_SORTING = ['xsmall', 'small', 'medium', 'large', 'xlarge']
//все размеры
const allSizes = computed(() => {
  const allSizes = []
  allSizes.push(availableSizes)
  allSizes.push(unavailableSizes)
  return allSizes
})
//доступные размеры
const availableSizes = computed(() => {
  if (!product.value || !product.value.aspects || product.value.aspects.length === 0) {
    return []
  }

  const found = product.value.aspects[0].variants.find(
    (variant) => variant.color === selectedColor.value
  )
  if (!found) {
    return []
  }
  const allSizes = found.sizes.map((size) => size.size)
  return SIZES_SORTING.filter((size) => allSizes.includes(size))
})

const selectedSize = ref<TSize>(availableSizes.value[0])
console.log('!!!Выбран размер:', selectedSize)

watch(availableSizes, (newSizes) => {
  if (newSizes.length > 0) {
    selectedSize.value = newSizes[0]
  } else {
    selectedSize.value = ''
  }
})

//недоступные размеры
const unavailableSizes = computed(() => {
  const missingInAvailable = SIZES_SORTING.filter(
    (size: string) => !availableSizes.value.includes(size)
  )
  const missingInSorting = availableSizes.value.filter(
    (size: string) => !SIZES_SORTING.includes(size)
  )
  return [...missingInAvailable, ...missingInSorting]
})
console.log('!', typeof availableSizes)
console.log('?', allSizes.value)
console.log('dddddddddddd', unavailableSizes.value)

//методы
const onAddProduct = (event: Event) => {
  if (!product.value || !selectedColor.value || !selectedSize.value) {
    return
  }

  const selectedVariant = product.value.aspects[0].variants.find(
    (variant) => variant.color === selectedColor.value
  )
  if (!selectedVariant) {
    return
  }

  const selectedSizeVariant = selectedVariant.sizes.find((size) => size.size === selectedSize.value)

  if (!selectedSizeVariant) {
    return
  }

  const productToAdd = {
    ...product.value, // Копируем все свойства товара
    sku: selectedSizeVariant.sku, // Добавляем sku
    color: selectedColor.value, // Добавляем цвет
    size: selectedSize.value // Добавляем размер
  }

  if (!currentProductInCart.value) {
    event.preventDefault()
    cartStore.addProduct(productToAdd, selectedSizeVariant.sku)
  } else {
    router.push('/cart')
  }
}

const updateProductQuantity = (quantity: number) => {
  if (currentProductInCart.value && currentProductInCart.value.sku) {
    cartStore.updateProductQuantity(currentProductInCart.value.sku, quantity)
  } else {
    console.error('SKU не найден для текущего товара в корзине')
  }
}

onMounted(async () => {
  try {
    console.log('Fetching product with ID:', productId.value)
    const productsResponce = await fetch(`/api/productPage/${productId.value}`)
    if (!productsResponce.ok) {
      throw new Error('Failed to fetch product data')
    }
    const data = await productsResponce.json()

    const productIndex = products.value.findIndex((p) => p.id === productId.value)

    if (data.aspects && data.aspects.length > 0) {
      const firstAspect = data.aspects[0]
      if (firstAspect.variants) {
        productVariants.value = firstAspect.variants
      } else {
        console.error('Variants missing in the first aspect')
      }
    } else {
      console.error('Aspects missing in response')
    }

    if (productIndex !== -1) {
      products.value[productIndex] = data.product
    } else {
      products.value.push(data.product)
    }

    console.log('Product:', product.value?.aspects)
    console.log('Variants:', productVariants.value)
  } catch (error) {
    console.error('Error fetching products:', error)
  }
})
</script>

<style module>
.product_container {
  margin: 0 16px;
  display: grid;
  grid-template-rows: 1fr;
  gap: 20px;
}

.product_rating {
  display: flex;
  align-items: center;
  padding: 12px 0;
}

.product_info .product_rating p {
  margin: 0;
  padding: 0 0 0 10px;
}

.product_info h1 {
  line-height: 1;
  font-size: 24px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: start;
}

.product_info h2 {
  font-family: 'Satoshi';
  font-size: 24px;
  font-weight: 900;
  line-height: 1;
}

.product_info p {
  padding: 20px 0 25px;
  margin: 0;
  color: var(--subtitle-color);
}

.product_color p {
  font-size: 14px;
  color: var(--subtitle-color);
  font-family: 'Satoshi';
}

.product_syze p {
  font-size: 14px;
  color: var(--subtitle-color);
  font-family: 'Satoshi';
}

.product_add {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 38px 0;
  gap: 20px;
}

.button {
  display: flex;
  width: calc(100% - 32px);
  height: 52px;
  padding: 14px;
}

@media (min-width: 1024px) {
  .product_container {
    margin: 0 100px;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  .product_info h1 {
    font-size: 40px;
  }

  .product_info h2 {
    font-size: 32px;
  }

  .product_info p {
    font-size: 16px;
  }

  .product_add {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 38px 0;
    gap: 20px;
  }

  .button {
    max-width: 400px;
  }
}
</style>
