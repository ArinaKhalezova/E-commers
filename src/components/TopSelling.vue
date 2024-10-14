<script setup lang="ts">
import ProductCarousel from './ProductCarousel.vue'

import Product5 from '../assets/img/product5.png'
import Product6 from '../assets/img/product6.png'
import Product7 from '../assets/img/product7.png'
import Product8 from '../assets/img/product8.png'

import Button from './Button.vue'

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
  <Button></Button>
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

@media (min-width: 1024px) {
  h1 {
    font-size: 48px;
    margin: 70px 0 52px;
  }
}
</style>
