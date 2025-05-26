<template>
  <div v-if="!loading">
    <Header />
    <RouterView />
    <Footer />
  </div>
  <q-inner-loading :showing="loading" color="orange" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import Header from './components/Home/Header.vue'
import Footer from './components/Home/Footer.vue'

const loading = ref(true)

onMounted(async () => {
  try {
    loading.value = true
    // await new Promise(resolve => setTimeout(resolve, 2000)); 
  }
  finally {
    loading.value = false
  }
})
</script>

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
