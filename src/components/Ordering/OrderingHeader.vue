<template>
  <div :class="$style.ordering_wrap">
    <div :class="$style.ordering_delivery">
      <div :class="$style.delivery_city">
        <h1>City of delivery</h1>
        <q-select
          rounded
          outlined
          v-model="orderingStore.deliveryCity"
          :options="cityOptions"
          :class="$style.city_select"
        />
      </div>
      <div :class="$style.delivery_obtaining">
        <h1>Method of obtaining</h1>
        <div :class="$style.obtaining_items">
          <PlaceholderItem
            title="Pick-up points and post offices"
            text="The pick-up points is not selected, free of charge"
            :selected="orderingStore.deliveryMethod === 'pickup'"
            @click="orderingStore.deliveryMethod = 'pickup'"
          />
          <PlaceholderItem
            title="By courier to the door"
            text="We will deliver today, from 2$"
            :selected="orderingStore.deliveryMethod === 'courier'"
            @click="orderingStore.deliveryMethod = 'courier'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOrderingStore } from '@/stores/orderingStore'
import PlaceholderItem from './PlaceholderItem.vue'

const orderingStore = useOrderingStore()

const cityOptions = [
  'Samara',
  'Moscow',
  'Saint Petersburg',
  'Novosibirsk',
  'Yekaterinburg',
  'Kazan',
  'Nizhny Novgorod',
  'Chelyabinsk'
]
</script>

<style module>
.ordering_delivery h1 {
  font-family: 'Satoshi';
  font-size: 20px;
  margin: 16px 0 8px;
}
.city_select {
  font-family: 'Satoshi';
}
.obtaining_items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
</style>
