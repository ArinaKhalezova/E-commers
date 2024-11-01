<script setup lang="ts">
import Pagination from './Pagination.vue'

import Product1 from '/src/assets/img/product1.png'
import Product2 from '/src/assets/img/product2.png'
import Product3 from '/src/assets/img/product3.png'
import Product4 from '/src/assets/img/product4.png'
import Product5 from '/src/assets/img/product5.png'
import Product8 from '/src/assets/img/product8.png'
import Product7 from '/src/assets/img/product7.png'
import Product6 from '/src/assets/img/product6.png'

const listData = [
  {
    id: '1',
    product_img: Product1,
    title: 'T-shirt with Tape Details',
    rating: '4.5/5',
    cost: '$120', ratingModel: 4
  },
  { id: '2', product_img: Product2, title: 'Skinny Fit Jeans', rating: '3.5/5', cost: '$240', ratingModel: 3 },
  { id: '3', product_img: Product3, title: 'Checkered Shirt', rating: '4.5/5', cost: '$180', ratingModel: 4 },
  {
    id: '4',
    product_img: Product4,
    title: 'Sleeve Striped T-Shirt',
    rating: '4.5/5',
    cost: '$130', ratingModel: 4
  },
  { id: '5', product_img: Product5, title: 'Vertical Striped Shirt', rating: '5/5', cost: '$212', ratingModel: 5 },
  { id: '6', product_img: Product6, title: 'Courage Graphic T-shirt', rating: '4/5', cost: '$145', ratingModel: 4 },
  { id: '7', product_img: Product7, title: 'Loose Fit Bermuda Shorts', rating: '3/5', cost: '$80', ratingModel: 3 },
  { id: '8', product_img: Product8, title: 'Faded Skinny Jeans', rating: '4.5/5', cost: '$210', ratingModel: 4 },
  { id: '9', product_img: Product3, title: 'Checkered Shirt', rating: '4.5/5', cost: '$180', ratingModel: 4 },
  { id: '10', product_img: Product2, title: 'Skinny Fit Jeans', rating: '3.5/5', cost: '$240', ratingModel: 3 },
  {
    id: '11',
    product_img: Product1,
    title: 'T-shirt with Tape Details',
    rating: '4.5/5',
    cost: '$120'
  },
  { id: '12', product_img: Product7, title: 'Loose Fit Bermuda Shorts', rating: '3/5', cost: '$80' }
]

const pageSize = 6
</script>

<template>
  <div>
    <Pagination :listData="listData" :size="pageSize" />
  </div>
</template>
