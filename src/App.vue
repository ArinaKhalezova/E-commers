<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Home/Header.vue'
import Footer from './components/Home/Footer.vue'
</script>

<template>
  <div>
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .wrapper {
    width: 100vmax;
  }
}

@font-face {
  font-family: 'IntegralCF';
  src:
    local('IntegralCF'),
    url(/src/assets/fonts/IntegralCF/IntegralCF-Regular.ttf) format('truetype');
}
@font-face {
  font-family: 'Satoshi';
  src:
    local('Satoshi'),
    url(/src/assets/fonts/Satoshi/Satoshi-Regular.ttf) format('truetype');
}
</style>
