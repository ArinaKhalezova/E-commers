<script setup lang="ts">
defineProps<{
  product: {
    id: string
    product_img: string
    title: string
    rating: string
    cost: string
  }
}>()
</script>

<template>
  <div class="product_card">
    <img :src="product.product_img" alt="Product Image" />
    <h2>{{ product.title }}</h2>
    <div class="product_rating">
      <img src="../assets/img/stars.png" alt="Rating Stars" />
      <p>{{ product.rating }}</p>
    </div>
    <p>{{ product.cost }}</p>
  </div>
</template>

<style scoped>
.product_card {
  font-family: 'Satoshi'; 
  margin: 10px;
  text-align: left;
}
.product_card img {
  width: 198px;
}
.product_card h2 {
  font-size: 16px;
  font-weight: 800;
}
.product_rating img {
  width: 87px;
}
.product_rating {
  display: flex;
  align-items: center;
}
.product_rating img {
  margin-right: 5px;
}
</style>
