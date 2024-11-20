<script setup lang="ts">

</script>

<template>
  <button :class="$style.button">Add to Cart</button>
</template>

<style module>
.button {
  display: flex;
  color: var(--text-on-dark-button-color);
  font-size: 14px;
  background-color: var(--dark-button-color);
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
    max-width: 400px;
    padding: 15px 80px;
  }
}

</style>
