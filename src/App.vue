<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Menu from './components/Menu.vue'
</script>

<template>
  <div>
    <Menu></Menu>
    <RouterView />
  </div>
</template>

<style scoped>
/* @media (min-width: 1024px){
    .wrapper {
      width: 100vmax;
    }
  } */
   
</style>
