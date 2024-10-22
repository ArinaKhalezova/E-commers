<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Menu from './components/Header.vue'
</script>

<template>
  <div>
    <Menu></Menu>
    <RouterView />
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
