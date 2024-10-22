<script setup lang="ts">
import ProductCarousel from './ProductCarousel.vue'

import Product1 from '../assets/img/product1.png'
import Product2 from '../assets/img/product2.png'
import Product3 from '../assets/img/product3.png'
import Product4 from '../assets/img/product4.png'
import Product5 from '../assets/img/product5.png'
import Product6 from '../assets/img/product6.png'
import Product7 from '../assets/img/product7.png'
import Product8 from '../assets/img/product8.png'

import Button from './Button.vue'

const newArrivalsSlides = [
  {
    id: '1',
    product_img: Product1,
    title: 'T-shirt with Tape Details',
    rating: '4.5/5',
    cost: '$120'
  },
  { id: '2', product_img: Product2, title: 'Skinny Fit Jeans', rating: '3.5/5', cost: '$240' },
  { id: '3', product_img: Product3, title: 'Checkered Shirt', rating: '4.5/5', cost: '$180' },
  { id: '4', product_img: Product4, title: 'Sleeve Striped T-Shirt', rating: '4.5/5', cost: '$130' }
]

const topSellingSlides = [
  { id: '5', product_img: Product5, title: 'Vertical Striped Shirt', rating: '5/5', cost: '$212' },
  { id: '6', product_img: Product6, title: 'Courage Graphic T-shirt', rating: '4/5', cost: '$145' },
  { id: '7', product_img: Product7, title: 'Loose Fit Bermuda Shorts', rating: '3/5', cost: '$80' },
  { id: '8', product_img: Product8, title: 'Faded Skinny Jeans', rating: '4.5/5', cost: '$210' }
]
</script>

<template>
  <div>
    <h1>NEW ARRIVALS</h1>
    <ProductCarousel :slides="newArrivalsSlides" />
    <Button></Button>
    
    <h1>TOP SELLING</h1>
    <ProductCarousel :slides="topSellingSlides" />
    <Button></Button>
  </div>
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
