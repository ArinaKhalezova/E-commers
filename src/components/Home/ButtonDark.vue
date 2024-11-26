<template>
  <a :href="link" :class="$style.button_dark">{{ text }}</a>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string
  link: string
}>()
</script>

<style module>
.button_dark {
  line-height: normal;
  font-family: 'Satoshi';
  display: flex;
  color: var(--text-on-dark-button-color);
  font-size: 14px;
  background-color: var(--dark-button-color);
  border-radius: 62px;
  height: 52px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 14px;
  justify-content: center;
}

@media (min-width: 1024px) {
  .button_dark {
    font-size: 16px;
    /* display: block; */
    width: 218px;
    padding: 15px 80px;
  }
}
</style>
