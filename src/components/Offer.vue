<script setup lang="ts"></script>

<template>
  <div class="offer_wrap">
    <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
    <form action="/">
      <div class="offer_input">
        <input
          type="text"
          placeholder="Enter your email address"
          name="mail"
          required
          class="container"
        />
      </div>
      <div class="offer_input">
        <input type="submit" value="Subscribe to Newsletter" class="container" />
      </div>
    </form>
  </div>
</template>

<style scoped>
.offer_wrap {
  background-color: black;
  border-radius: 20px;
  margin: 50px 16px;
  padding: 32px 24px;
}
.offer_wrap h1 {
  font-family: 'IntegralCF';
  font-size: 32px;
  color: white;
  font-weight: 700;
  padding-bottom: 32px;
}
.offer_input {
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
}
.container {
  font-family: 'Satoshi';
  border-radius: 20px;
  width: 100vmax;
  padding: 11px 48px;
  background-color: white;
}
@media (min-width: 1024px) {
  .offer_wrap {
    display: flex;
    justify-content: space-between;
    padding: 43px 64px;
  }
  .offer_wrap h1 {
    font-size: 40px;

  }
  .offer_wrap form{
    width: 50%;
    padding: 0 100px;
  }
}
</style>
