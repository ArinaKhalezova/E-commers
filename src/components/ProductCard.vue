<script setup lang="ts">

</script>

<template>
  <div class="wrapper">
    <div class="product_card">
      <img src="../assets/T-shirt.png" alt="" class="product_img">
      <h2>T-shirt with Tape Details</h2>
      <div class="product_assessment">
        <img src="../assets/stars.png" alt="">
        <p>4.5/5</p>
      </div>
      <p>$120</p>
    </div>
    <div class="product_card">
      <img src="../assets/Jeans.png" alt="" class="product_img">
      <h2>Skinny Fit Jeans</h2>
      <div class="product_assessment">
        <img src="../assets/stars.png" alt="">
        <p>3.5/5</p>
      </div>
      <div class="product_card-cost">
        <p>$240</p>
        <p class="sale">$260</p>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    background-color: #ffffff;
    display: flex;
  }
  .wrapper > * {
    margin: 8px;
  }

  h2 {
    font-size: 16px;
    font-weight: 700;
  }
  .product_assessment {
    display: flex;
    align-items: center;
  }
  .product_assessment img {
    width: 87px;
    height: 15.47px;
  }
  .product_card .product_assessment p {
    margin-left: 11px;
  }
  .product_card p {
    font-size: 20px;
    font-weight: 900;
  }
  .sale {
    text-decoration: line-through;
    color: #00000040;
  }
  .product_card-cost {
    display: flex;
  }
  .product_card-cost > *{
    margin: 4px 2.5px;
  }

</style>
