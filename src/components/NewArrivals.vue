<script setup lang="ts">
import ProductCarousel from './ProductCarousel.vue'
import Product2 from '../assets/img/product2.png'
import Product3 from '../assets/img/product3.png'
import Product1 from '../assets/img/product1.png'
import Product4 from '../assets/img/product4.png'

const slides = [
  {
    id: '1',
    product_img: Product1,
    title: 'T-shirt with Tape Details',
    rating: '4.5/5',
    cost: '$120'
  },
  { id: '2', product_img: Product2, title: 'Skinny Fit Jeans', rating: '3.5/5', cost: '$240' },
  { id: '3', product_img: Product3, title: 'CHECKERED SHIRT', rating: '4.5/5', cost: '$180' },
  { id: '4', product_img: Product4, title: 'SLEEVE STRIPED T-SHIRT', rating: '4.5/5', cost: '$130' }
]
</script>

<template>
  <h1>NEW ARRIVALS</h1>
  <ProductCarousel :slides="slides" />
  <button class="button">View All</button>
</template>

<style scoped>
h1 {
  font-family: 'IntegralCF';
  font-size: 32px;
  font-weight: 900;
  margin: 50px 0 32px;
  display: flex;
  justify-content: center;
}
.button {
  margin: 24px 16px;
  color: rgb(0, 0, 0);
  font-size: 16px;
  background-color: rgb(255, 255, 255);
  border-radius: 62px;
  width: 100%;
  height: 52px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
