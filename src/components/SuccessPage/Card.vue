<template>
  <div :class="$style.order_card">
    <h2>{{ title }}</h2>
    <div v-if="hasValidItems" :class="$style.card_items">
      <template v-if="type === 'products'">
        <div v-for="item in items" :key="item.sku" :class="$style.products_item">
          <div :class="$style.products_img">
            <img :src="getImageUrl(item.coverImage)" :alt="item.title" />
          </div>
          <div :class="$style.products_info">
            <h3>{{ item.title }}</h3>
            <p>Size: {{ item.size }}</p>
            <p>Color: {{ item.color }}</p>
            <p>Quantity: {{ item.quantity }}</p>
            <p>Price: ${{ item.cost.toFixed(2) }}</p>
          </div>
        </div>
      </template>
      <template v-else>
        <div v-for="(value, key) in items[0]" :key="key">
          <p>{{ formatKey(key) }}: {{ value }}</p>
        </div>
      </template>
    </div>
    <div v-else :class="$style.card_items">
      <p>No {{ title.toLowerCase() }} saved yet.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    default: () => []
  },
  type: {
    type: String,
    default: 'info' // 'products' или 'info'
  }
})

const hasValidItems = computed(() => {
  if (!props.items || props.items.length === 0) return false

  if (props.type === 'products') {
    return true // Для товаров всегда показываем, если массив не пуст
  }

  // Для информации проверяем, есть ли хотя бы одно непустое поле
  return props.items.some(
    (item) =>
      item &&
      Object.values(item).some(
        (value) => value !== null && value !== undefined && value !== '' && value !== 0
      )
  )
})

const getImageUrl = (path?: string) => {
  if (!path) return ''
  if (path.startsWith('http') || path.startsWith('/')) return path
  return path
}

const formatKey = (key: string) => {
  return key.charAt(0).toUpperCase() + key.slice(1)
}
</script>

<style module>
.order_card {
  margin-bottom: 20px;
}

.order_card h2 {
  font-family: 'Satoshi';
  font-weight: 900;
  font-size: 24px;
  margin-bottom: 10px;
}

.card_items {
  background-color: var(--placeholder-color);
  border-radius: 20px;
  padding: 20px;
  min-width: 400px;
}

.products_item {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 15px;
}

.products_item:last-child {
  margin-bottom: 0;
}

.products_img img {
  width: 100px;
  border-radius: 10px;
}

.products_info h3 {
  font-family: 'Satoshi';
  font-size: 18px;
  margin-bottom: 5px;
}
</style>
