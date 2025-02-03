<template>
  <q-chip
    :selected="modelValue === size"
    color="gray"
    text-color="black"
    @click="emit('update:modelValue', size)"
  >
  {{ size }}
  </q-chip>
</template>

<script setup lang="ts">
const props = defineProps<{
  size: string
  modelValue: string
}>()
const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

</script>

<script lang="ts">
export default {
  name: 'ProductPagesize'
}
</script>

<style module>
.container {
  width: 100%;
}
</style>
