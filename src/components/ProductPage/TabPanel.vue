<script setup>
import { ref } from 'vue'
import ProductReviews from './ProductReviews.vue';
import ProductDetails from './ProductDetails.vue';

const tab = ref('Rating & Reviews');
</script>

<template>
  <div class="q-pa-md">
    <div>
      <q-card flat>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="black"
          indicator-color="black"
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
            <ProductDetails />
          </q-tab-panel>

          <q-tab-panel name="Rating & Reviews" >
            <ProductReviews />
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
