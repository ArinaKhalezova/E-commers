<script setup>
import { ref } from 'vue'
import Reviews from './ProductReviews.vue';
const tab = ref('mails')
 
</script>

<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-card flat>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="Product Details" label="Product Details" />
          <q-tab name="Rating & Reviews" label="Rating & Reviews" />
          <q-tab name="FAQs" label="FAQs" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="Product Details">
            <div class="text-h6">Product Details</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="Rating & Reviews" >
            <Reviews />
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
