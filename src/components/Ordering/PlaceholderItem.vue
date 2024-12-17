<template>
  <div :class="$style.placeholder_wrap">
    <q-item tag="label" v-ripple :class="$style.placeholder_item">
      <q-item-section side center>
        <q-checkbox v-model="localSelection" color="black"></q-checkbox>
      </q-item-section>

      <q-item-section>
        <q-item-label :class="$style.placeholder_title"> {{ title }}</q-item-label>
        <q-item-label caption :class="$style.placeholder_text">
          {{ text }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  title: string
  text: string

  selection?: boolean
}>()

const emit = defineEmits(['update:selection'])

const localSelection = ref(props.selection || false)

watch(localSelection, (newVal) => {
  emit('update:selection', newVal)
})

watch(
  () => props.selection,
  (newVal) => {
    localSelection.value = newVal || false
  }
)
</script>

<style module>
.placeholder_wrap {
  font-family: 'Satoshi';
  border: 2px solid var(--placeholder-color);
  border-radius: 20px;
  display: flex;
}
.placeholder_item {
  align-items: center;
  width: 100%;
  border-radius: 20px;
}
.placeholder_title {
  font-size: 14px;
  color: var(--title-color);
  font-weight: 500;
}
.placeholder_text {
  color: var(--subtitle-color);
}
</style>
