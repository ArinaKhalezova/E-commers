<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import Breadcrumbs from './Breadcrumbs.vue'
import { products } from '@/data/Products'
import { generateBreadcrumbs } from '@/data/breadcrumbs'

const route = useRoute()
const productId = computed(() => route.params.id as string)

const product = computed(() => {
  return products.find((p) => p.id === productId.value)
})

const ratingModel = ref(product.value ? product.value.ratingModel : 3)

const tab = ref('first')
const splitterModel = ref(20)

const breadcrumbs = computed(() => {
  return generateBreadcrumbs(route)
})

// Используем реактивные свойства и вычисляемые свойства внутри <script setup>
const desert = ref({
  Small: false,
  Medium: false,
  Large: false,
  X_Large: false
})

const selection = computed(() => {
  return Object.keys(desert.value)
    .filter(type => desert.value[type] === true)
    .join(', ')
})
</script>

<template>
  <div>
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <div :class="$style.product_container">
      <div :class="$style.product_img">
        <div id="q-app">
          <div>
            <q-splitter v-model="splitterModel">
              <!-- style="height: 250px" -->
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
            <p>{{ product.rating }}</p>
          </div>
          <h2>{{ product.cost }}</h2>
          <p>{{ product.description }}</p>
        </div>
        <div :class="$style.product_color">
          <p>Select color</p>
        </div>
        <div :class="$style.product_syze">
          <p>Choose Size</p>
        </div>
        <div :class="$style.product_add">
          <div :class="$style.product_add">
            <div class="q-gutter-xs">
              <q-chip
                v-model:selected="desert.Small"
                color="gray"
                text-color="black"
              >
                Small
              </q-chip>
              <q-chip
                v-model:selected="desert.Medium"
                color="gray"
                text-color="black"
              >
                Medium
              </q-chip>
              <q-chip
                v-model:selected="desert.Large"
                color="gray"
                text-color="black"
              >
                Large
              </q-chip>
              <q-chip
                v-model:selected="desert.X_Large"
                color="gray"
                text-color="black"
              >
                X-Large
              </q-chip>
            </div>

            <div class="q-mt-sm">Your pick: {{ selection }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
  padding: 0;
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
}
</style>
