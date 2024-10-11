<script setup lang="ts"></script>

<template>
  <div class="style_wrap">
    <h1>
      BROWSE BY <br />
      DRESS STYLE
    </h1>
    <div class="style_item">
      <h2>Casual</h2>
      <img src="../assets/img/casual.png" alt="" />
    </div>
    <div class="style_item">
      <h2>Formal</h2>
      <img src="../assets/img/formal.png" alt="" />
    </div>
    <div class="style_item">
      <h2>Party</h2>
      <img src="../assets/img/party.png" alt="" />
    </div>
    <div class="style_item">
      <h2>Gym</h2>
      <img src="../assets/img/gym.png" alt="" />
    </div>
  </div>
</template>

<style scoped>
.style_wrap {
  font-family: 'Satoshi';
  margin: 50px 16px;
  background-color: #f0f0f0;
  border-radius: 20px;
  padding: 27px 0;
}
.style_wrap h1 {
  font-family: 'IntegralCF';
  font-weight: 900;
  font-size: 32px;
  text-align: center;
  margin-bottom: 28px;
  line-height: 1;
}
.style_item {
  display: flex;
  justify-content: space-between;
  margin: 16px 24px;
  background-color: #ffffff;
  border-radius: 20px;
}
.style_item img {
  border-radius: 20px;
}
.style_item h2 {
  font-size: 24px;
  font-weight: 700;
  padding: 16px 24px;
}
</style>
