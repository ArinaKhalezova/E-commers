<script setup lang="ts">

</script>

<template>
  <a href="/assortment" :class="$style.button">View All</a>
</template>

<style module>
.button {
  display: flex;
  margin: 30px auto 54px;
  color: var(--text-on-light-button-color);
  font-size: 14px;
  background-color: var(--light-button-color);
  border-radius: 62px;
  width: calc(100% - 32px);
  height: 52px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 14px;
  justify-content: center;
}

@media (min-width: 1024px) {
  .button {
    font-size: 16px;
    display: block;
    width: 218px;
    margin: 30px auto 54px;
    padding: 15px 80px;
  }
}

</style>
