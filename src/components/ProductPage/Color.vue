<template>
  <q-chip
    :selected="modelValue === color"
    :outline="getOutline(color)"
    :color="getColor(color)"
    :text-color="getTextColor(color)"
    @click="emit('update:modelValue', color)"
  >
  </q-chip>
</template>

<script setup lang="ts">
const props = defineProps<{
  color: string;
  modelValue: string;
}>()
const emit = defineEmits<{
  (event: "update:modelValue", value: string): void;
}>()

const getOutline = (color: string): boolean => {
  switch(color) {
    case 'white':
      return true
    default:
      return false
  }
}
const getColor = (color: string): string => {
  switch(color) {
    case 'lightBlue':
      return "blue-4";
    case 'blue':
      return "blue-9";
    case 'white':
      return "grey"
    default:
      return color
  }
}
const getTextColor = (color: string): string => {
  switch(color) {
    case 'white':
    case 'yellow':
      return "black";
    default:
      return 'white'
  }
}



</script>

<script lang="ts">
export default {
 name: "ProductPageColor"
}
</script>

<style module>
.container {
  width: 100%;
}
</style>
