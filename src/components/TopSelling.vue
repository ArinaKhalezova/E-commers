<script setup lang="ts">
import ProductCarousel from './ProductCarousel.vue'

import Product5 from '../assets/img/product5.png'
import Product6 from '../assets/img/product6.png'
import Product7 from '../assets/img/product7.png'
import Product8 from '../assets/img/product8.png'

const slides = [
  { id: '5', product_img: Product5, title: 'Vertical Striped Shirt', rating: '5/5', cost: '$212' },
  { id: '6', product_img: Product6, title: 'Courage Graphic T-shirt', rating: '4/5', cost: '$145' },
  { id: '7', product_img: Product7, title: 'Loose Fit Bermuda Shorts', rating: '3/5', cost: '$80' },
  { id: '8', product_img: Product8, title: 'Faded Skinny Jeans', rating: '4.5/5', cost: '$210' }
]
</script>

<template>
  <h1>TOP SELLING</h1>
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
