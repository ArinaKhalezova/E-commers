<script setup lang="ts"></script>

<template>
  <div :class="$style.offer_wrap">
    <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
    <form action="/">
      <div :class="$style.offer_input">
        <input
          type="text"
          placeholder="Enter your email address"
          name="mail"
          required
          :class="$style.container"
        />
      </div>
      <div :class="$style.offer_input">
        <input type="submit" value="Subscribe to Newsletter" :class="$style.container" />
      </div>
    </form>
  </div>
</template>

<style module>
.offer_wrap {
  background-color: var(--dark-background-color);
  border-radius: 20px;
  margin: 0 0px 50px 0px;
  padding: 32px 24px;
}
.offer_wrap h1 {
  font-family: 'IntegralCF';
  font-size: 32px;
  line-height: 1.2;
  color: var(--text-on-dark-button-color);
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
  background-color: var(--base-background-color);
}
@media (min-width: 1024px) {
  .offer_wrap {
    display: flex;
    justify-content: space-between;
    padding: 43px 64px;
    align-items: center;
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
