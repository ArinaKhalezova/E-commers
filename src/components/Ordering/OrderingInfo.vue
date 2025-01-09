<template>
  <div :class="$style.ordering_wrap">
    <div :class="$style.ordering_delivery">
      <div :class="$style.delivery_city">
        <h1>City of delivery</h1>
        <q-select rounded outlined v-model="model" :options="options" :class="$style.city_select" />
      </div>
      <div :class="$style.delivery_obtaining">
        <h1>Method of obtaining</h1>
        <div :class="$style.obtaining_items">
          <!-- Bind selection to a reactive variable -->
          <PlaceholderItem
            title="Pick-up points and post offices"
            text="The pick-up points is not selected, free of charge"
            :selected="selectedMethod === 'pickup'"
            @click="selectDeliveryMethod('pickup')"
          />
          <PlaceholderItem
            title="By courier to the door"
            text="We will deliver today, from 2$"
            :selected="selectedMethod === 'courier'"
            @click="selectDeliveryMethod('courier')"
          />
        </div>
      </div>
      <div :class="$style.delivery_obtaining">
        <DeliveryCourier :deliveryMethod="selectedMethod" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import DeliveryCourier from './Delivery.vue'
import PlaceholderItem from './PlaceholderItem.vue'

const model = ref<string | null>('Samara')
const options = [
  'Samara',
  'Moscow',
  'Saint Petersburg',
  'Novosibirsk',
  'Yekaterinburg',
  'Kazan',
  'Nizhny Novgorod',
  'Chelyabinsk'
]

const selectedMethod = ref<'pickup' | 'courier'>('pickup')

const selectDeliveryMethod = (method: 'pickup' | 'courier') => {
  selectedMethod.value = method
}
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
