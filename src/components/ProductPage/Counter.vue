<template>
  <div :class="$style.counter_container">
    <button @click="increment" :class="$style.counter_button">-</button>
    <p :class="$style.counter_count">{{ count }}</p>
    <button @click="decrement" :class="$style.counter_button">+</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
function decrement() {
  count.value++
}

function increment() {
  count.value--
  if (count.value < 0) {
    count.value = 0
  }
}
</script>

<style module>
.counter_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--placeholder-color);
  border-radius: 30px;
  padding: 14px 20px;
  max-width: 170px;
  max-height: 53px;
}
.counter_button {
  cursor: pointer;
  background-color: none;
  border: none;
  border-radius: 20px;
  padding: 0;
  margin: 0;
  font-family: 'Satoshi';
  font-size: 32px;
  font-weight: 900;
}
.counter_count {
  font-family: 'Satoshi';
  font-size: 16px;
  font-weight: 700;
  padding: 0;
  margin: 0;
}
</style>
