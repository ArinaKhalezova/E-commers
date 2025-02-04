<template>
  <q-chip
    v-for="size in arr[0].value"
    :selected="modelValue === size"
    color="gray"
    text-color="black"
    @click="emit('update:modelValue', size)"
  >
    {{ size }}
  </q-chip>
  
  <q-chip
    v-for="size in arr[1].value"
    disable
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
  arr: any
  modelValue: string
}>()
const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()


</script>



<style module>
.container {
  width: 100%;
}
</style>
