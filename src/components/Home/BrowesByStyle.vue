<template>
  <div :class="$style.style_wrap">
    <h1>BROWSE BY DRESS STYLE</h1>
    <div :class="$style.style_items">
      <a href="/assortment" :class="$style.style_item">
          <h2>Casual</h2>
          <img src="/public/assets/images/casual.png" alt="" />
      </a>
      <a href="/assortment" :class="$style.style_item">
          <h2>Formal</h2>
          <img src="/public/assets/images/formal.png" alt="" />
      </a>
      <a href="/assortment" :class="$style.style_item">
          <h2>Party</h2>
          <img src="/public/assets/images/party.png" alt="" />
      </a>
      <a href="/assortment" :class="$style.style_item">
          <h2>Gym</h2>
          <img src="/public/assets/images/gym.png" alt="" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style module>
.style_wrap {
  font-family: 'Satoshi';
  /* margin: 50px 16px; */
  background-color: var(--light-background-color);
  padding: 27px 0;
}
.style_wrap h1 {
  font-family: 'IntegralCF';
  font-weight: 900;
  font-size: 32px;
  text-align: center;
  margin-bottom: 28px;
  line-height: 1;
  color: var(--title-color);
}
.style_item {
  display: flex;
  justify-content: space-between;
  margin: 16px 24px;
  background-color: var(--base-background-color);
  border-radius: 20px;
}
.style_item img {
  border-radius: 20px;
}
.style_item h2 {
  color: var(--title-color);
  font-size: 24px;
  font-weight: 900;
  padding: 16px 24px;
}
.style_item h2:hover{
  color: var(--link-color);
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
