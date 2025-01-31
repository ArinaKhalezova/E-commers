<template>
  <div v-if="product">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <div :class="$style.product_container">
      <div :class="$style.product_img">
        <div id="q-app">
          <div>
            <!-- <h4>{{ productVariants[0] }}</h4>
            <br />
            <h5>{{ JSON.stringify(productVariants)}}</h5>
            <p>{{ JSON.stringify(productVariants).indexOf('') }}</p>
            <hr />
            <br /> -->
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
            <q-chip
              v-if="isSize(selectedColor, 'xsmall', productVariants)"
              :selected="selectedSize === 'xsmall'"
              @click="selectedSizeMethod('xsmall')"
              color="gray"
              text-color="black"
            >
              X-Small
            </q-chip>
            <q-chip
              v-if="isSize(selectedColor, 'small', productVariants)"
              :selected="selectedSize === 'small'"
              @click="selectedSizeMethod('small')"
              color="gray"
              text-color="black"
            >
              Small
            </q-chip>
            <q-chip
              v-if="isSize(selectedColor, 'medium', productVariants)"
              :selected="selectedSize === 'medium'"
              @click="selectedSizeMethod('medium')"
              color="gray"
              text-color="black"
            >
              Medium
            </q-chip>
            <q-chip
              v-if="isSize(selectedColor, 'large', productVariants)"
              :selected="selectedSize === 'large'"
              @click="selectedSizeMethod('large')"
              color="gray"
              text-color="black"
            >
              Large
            </q-chip>
            <q-chip
              v-if="isSize(selectedColor, 'xlarge', productVariants)"
              :selected="selectedSize === 'xlarge'"
              @click="selectedSizeMethod('xlarge')"
              color="gray"
              text-color="black"
            >
              X-Large
            </q-chip>
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
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Breadcrumbs from '../Catalog/Breadcrumbs.vue'
import { useCartStore } from '@/stores/cartStore'
import type { TProduct, Variant } from '@/data/products.types'
// import { products } from '@/data/products'
import { generateBreadcrumbs } from '@/data/breadcrumbs'
import Counter from './Counter.vue'
import ButtonDark from '../Home/ButtonDark.vue'
import ProductPageColor from './Color.vue'

const cartStore = useCartStore()
const route = useRoute()
const router = useRouter()

const productVariants = ref<Variant[]>([])
const products = ref<TProduct[]>([])
const productId = computed(() => Number(route.params.id))

const tab = ref('first')
const splitterModel = ref(20)

const size = ref({
  Small: false,
  Medium: false,
  Large: false,
  X_Large: false
})

const product = computed(() => {
  return products.value.find((p) => p.id === productId.value)
})

const ratingModel = ref(product.value ? product.value.ratingModel : 3)

const breadcrumbs = computed(() => {
  return generateBreadcrumbs(route)
})

const currentProductInCart = computed(() =>
  cartStore.products.find((p) => p.id === productId.value)
)

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
const selectedColor = ref<TColor>('red')

console.log('!!!Выбран цвет:', selectedColor)
// const isColor = (color: string, obj: Variant) => {
//   const arrColors = []
//   for (const key in obj) {
//     console.log('res' + obj[key])
//     arrColors.push(obj[key])
//   }
//   if (arrColors.indexOf(color, 0) >= 0) {
//     return true
//   }
// }
// const isColor = (color: string, arr: Variant[]) => {
//   console.log('ОБЪЕКТ1 ', color, arr)
//   // return arr.some((variant) => variant.color === color)
//   return arr.map(v => v.color).includes(color)
// }

// { length: number, 0: value, 1: value }
// Array.from({ length: number, 0: 'value 1', 1: 'value 2' })

const availableColors = computed(() => {
 const allColors = productVariants.value.map((variant) => variant.color)

 return COLORS_SORTING.filter((color) => allColors.includes(color))
})

const selectedSize = ref<'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'>()

const selectedSizeMethod = (size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge') => {
  selectedSize.value = size
}

const isSize = (color: string | null | undefined, size: string, obj: Variant[]) => {
  if (!color) {
    console.log('Цвет не выбран')
    return false
  }

  const findObj = obj.find((item) => item.color === color)
  if (!findObj) {
    console.log('Цвет не найден')
    return false
  }
  const sizesArray = findObj.sizes.split(',').map((s) => s.trim())
  return sizesArray.includes(size, 0)

  // const index = obj.findIndex((obj) => obj.color === color)
  // console.log('ОБЪЕКТ2 ', obj[index]) Ошибка что он видел как underfind, но если я комментила
  // const massIndex = Object.values(obj[index])
  // return Object.values(obj[index]).some((variant) => variant.size === size) эту строку, то все было бы норм (выводил правильно)
}

const onAddProduct = (event: Event) => {
  if (!currentProductInCart.value && product.value) {
    event.preventDefault()
    cartStore.addProduct(product.value)
  } else {
    router.push('/cart')
  }
}

const updateProductQuantity = (quantity: number) => {
  if (currentProductInCart.value) {
    cartStore.updateProductQuantity(currentProductInCart.value.id, quantity)
  }
}

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
  'black',
]


onMounted(async () => {
  try {
    console.log('Fetching product with ID:', productId.value)
    const productsResponce = await fetch(`/api/productPage/${productId.value}`)
    if (!productsResponce.ok) {
      throw new Error('Failed to fetch product data')
    }
    const data = await productsResponce.json()
    const productIndex = products.value.findIndex((p) => p.id === productId.value)

    if (data.product && data.product.variants) {
      productVariants.value = data.product.variants
    } else {
      console.error('Variants missing in response')
    }

    if (productIndex !== -1) {
      products.value[productIndex] = data.product
    } else {
      products.value.push(data.product)
    }

    console.log('Product:', product.value)
    console.log('Variants:', product.value?.variants)
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
