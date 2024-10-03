<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="wrapper">
    <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
    <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
    <button>Shop Now</button>
    <img src="../assets/Preview.png" alt="">
    <div class="logos">
      <img src="../assets/versace.png" alt=""width="116.74" height="23.25">
      <img src="../assets/zara.png" alt=""width="63.81" height="26.65">
      <img src="../assets/gucci.png" alt=""width="109.39" height="25.24">
      <img src="../assets/prada.png" alt="" width="127" height="21">
      <img src="../assets/calvin_klein.png" alt="" width="134.84" height="21.75">
    </div>

    <TheWelcome />
  </div>
</template>

<style scoped>
  .wrapper {
    background-color: #F2F0F1;
  }
  .logos {
    background-color: black;
  }
</style>
