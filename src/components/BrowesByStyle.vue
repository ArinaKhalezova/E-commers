<script setup lang="ts"></script>

<template>
  <div :class="$style.style_wrap">
    <h1>BROWSE BY DRESS STYLE</h1>
    <div :class="$style.style_items">
      <a href="/category" :class="$style.style_item">
          <h2>Casual</h2>
          <img src="../assets/img/casual.png" alt="" />
      </a>
      <a href="/category" :class="$style.style_item">
          <h2>Formal</h2>
          <img src="../assets/img/formal.png" alt="" />
      </a>
      <a href="/category" :class="$style.style_item">
          <h2>Party</h2>
          <img src="../assets/img/party.png" alt="" />
      </a>
      <a href="/category" :class="$style.style_item">
          <h2>Gym</h2>
          <img src="../assets/img/gym.png" alt="" />
      </a>
    </div>
  </div>
</template>

<style module>
.style_wrap {
  font-family: 'Satoshi';
  /* margin: 50px 16px; */
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

@media (min-width: 1024px) {
  .style_items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .style_wrap h1 {
    font-size: 48px;
    text-align: center;
    margin-bottom: 64px;
  }
  .style_item h2 {
    font-size: 36px;
    padding: 25px 36px;
  }
  .style_item:nth-child(1) {
    width: 407px;
  }
  .style_item:nth-child(2) {
    width: 684px;
  }
  .style_item:nth-child(3) {
    width: 684px;
  }
  .style_item:nth-child(4) {
    width: 407px;
  }
}
</style>
