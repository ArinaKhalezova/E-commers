<script setup lang="ts">

</script>

<template>
  <a href="/category"><button :class="$style.button">View All</button></a>
</template>

<style module>
.button {
  margin: 24px 16px;
  color: rgb(0, 0, 0);
  font-size: 14px;
  background-color: rgb(255, 255, 255);
  border-radius: 62px;
  width: calc(100% - 32px);
  height: 52px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

@media (min-width: 1024px) {
  .button {
    font-size: 16px;
    display: block;
    width: 218px;
    margin: 30px auto 54px;
  }
}

</style>
