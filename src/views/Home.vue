<script setup lang="ts">
import Heading from '@/components/Heading.vue';
import ProductCard from '@/components/ProductCard.vue';
</script>

<template>
  <div class="wrapper">
    <Heading />
    <h1>NEW ARRIVALS</h1>
    <ProductCard />
    <button class="button">View All</button>
    <h1>TOP SELLING</h1>
    <ProductCard />
    <button class="button">View All</button>

  </div>
</template>

<style scoped>
  .wrapper {
    background-color: #ffffff;
  }
  h1 {
    font-size: 32px;
    font-weight: 900;
    margin: 50px 0 32px;
    display: flex;
    justify-content: center;
  }
  .button {
    color: rgb(0, 0, 0);
    font-size: 16px;
    background-color: rgb(255, 255, 255);
    border-radius: 62px;
    width: 100%;
    height: 52px;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.10);
  }

  @media (min-width: 1024px) {
  

  }
</style>
 