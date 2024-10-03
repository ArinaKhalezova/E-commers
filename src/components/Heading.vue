<script setup lang="ts">

</script>

<template>
  <div class="heading">
    <div class="heading_wrap">
        <div class="heading_info">
            <div class="heading-text">
                <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <button class="button">Shop Now</button>
                </div>
                <div class="features">
                <div class="feature_one">
                    <h2>200+</h2>
                    <p>International Brands</p>
                </div>
                <div class="feature_two">
                    <h2>2,000+</h2>
                    <p>High-Quality Products</p>
                </div>
                <div class="feature_three">
                    <h2>30,000+</h2>
                    <p>Happy Customers</p>
                </div>
            </div>
        </div>
        <div class="heading_img">
         <img src="../assets/Preview.png" alt="" class="preview">
        </div>
    </div>
    

    <div class="brands">
      <img src="../assets/versace.png" alt=""width="116.74" height="23.25" class="brand_one">
      <img src="../assets/zara.png" alt=""width="63.81" height="26.65" class="brand_two">
      <img src="../assets/gucci.png" alt=""width="109.39" height="25.24" class="brand_three">
      <img src="../assets/prada.png" alt="" width="127" height="21" class="brand_four">
      <img src="../assets/calvin_klein.png" alt="" width="134.84" height="21.75" class="brand_five">
    </div>
  </div>
</template>

<style scoped>
  .heading-text{
    margin: 40px 16px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  h1 {
    font-size: 36px;
    font-weight: 900;
  }
  p {
    padding: 20px 0px 29px;
    font-size: 14px;
    font-weight: 200;
  }
  h2 {
    font-size: 24px;
    font-weight: 700;
  }
  .features > * {
    margin: 14px 27px;
  }
  .features {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .features p {
    padding: 0;
  }
  .button {
    color: white;
    font-size: 16px;
    background-color: black;
    border-radius: 62px;
    width: 100%;
    height: 52px;
    cursor: pointer;
  }
  .preview{
    margin: 0;
    padding: 0;
    max-width: 390px;
  }
  .heading {
    background-color: #F2F0F1;
  }
  .brands {
    background-color: black;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .brands > * {
    margin: 10px 16px;
  }

  @media (min-width: 1024px) {
    .heading_wrap{
        display: flex;
        justify-content: space-between;
        width: auto;
    }
    .heading-text{
    margin: 40px 16px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    }
    .preview {

        max-width: 640px;
    }
  h1 {
    font-size: 64px;
    font-weight: 900;
  }
  p {
    padding: 32px 0px 37px;
    font-size: 16px;
    font-weight: 200;
  }
  h2 {
    font-size: 40px;
    font-weight: 700;
  }
  .features > * {
    margin: 14px 32px;
  }
  .features {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .features p {
    padding: 0;
  }
  .button {
    color: white;
    font-size: 16px;
    background-color: black;
    border-radius: 62px;
    width: 100%;
    height: 52px;
    cursor: pointer;
  }
  .preview{
    margin: 0;
    padding: 0;
  }
  .heading {
    background-color: #F2F0F1;
  }
  .brands {
    background-color: black;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .brands > * {
    margin: 10px 16px;
  }
  }
</style>
