<template>
  <div :class="$style.counter_container">
    <button @click="decrement" :class="$style.counter_button">
      <img src="/public/assets/images/minus.png" alt="minus" />
    </button>
    <p :class="$style.counter_count">{{ count }}</p>
    <button @click="increment" :class="$style.counter_button">
      <img src="/public/assets/images/plus.png" alt="plus" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  count: number
}>()

const emit = defineEmits<{
  (e: 'update:count', value: number): void
}>()

function decrement() {
  emit('update:count', props.count - 1)
}

function increment() {
  emit('update:count', props.count + 1)
}
</script>

<style module>
.counter_container {
  display: grid;
  grid-template-columns: 3fr 1fr 3fr;
  gap: 15px;
  background-color: var(--placeholder-color);
  border-radius: 30px;
  align-items: center;
  padding: 12px 16px;
  width: auto;
}
.counter_button {
  cursor: pointer;
  border: none;
  border-radius: 30px;
}
.counter_button img {
  width: 24px;
}
.counter_count {
  font-family: 'Satoshi';
  font-size: 16px;
  font-weight: 700;
  padding: 0;
  margin: 0;
}
</style>
