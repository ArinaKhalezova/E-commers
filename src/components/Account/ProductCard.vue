<template>
  <div :class="$style.order_items">
    <div
      v-for="item in order.items"
      :key="item.sku"
      :class="$style.order_item"
      @click="goToProduct(item.id)"
    >
      <div :class="$style.item_image_wrapper">
        <img
          :src="getImageUrl(item.coverImage || item.img)"
          :class="$style.item_image"
          :alt="item.title"
        />
      </div>
      <div :class="$style.item_info">
        <h4 :class="$style.item_title">{{ item.title }}</h4>
        <div :class="$style.item_characteristics">
          <q-chip :outline="getOutline(item.color)" :color="getColor(item.color)"></q-chip>
          <q-chip color="gray" text-color="black">{{ item.size }}</q-chip>
        </div>
        <div :class="$style.item_details">
          <span>Cost: ${{ item.cost.toFixed(2) }}</span>
          <span>Quantity: {{ item.quantity }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'

defineProps<{
  order: any
}>()

const getImageUrl = (path?: string) => {
  if (!path) return ''
  if (path.startsWith('http') || path.startsWith('/')) return path
  return path
}

const goToProduct = (id: number) => {
  router.push({ name: 'productPage', params: { id } })
}

const getOutline = (color: string): boolean => {
  switch (color) {
    case 'white':
      return true
    default:
      return false
  }
}

const getColor = (color: string): string => {
  switch (color) {
    case 'lightBlue':
      return 'blue-4'
    case 'blue':
      return 'blue-9'
    case 'white':
      return 'grey'
    default:
      return color
  }
}
</script>

<style module>
.order_items {
  display: grid;
  gap: 20px;
}

.order_item {
  cursor: pointer;
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 16px;
  align-items: center;
}

.item_image_wrapper {
  width: 80px;
  height: 80px;
}

.item_image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.item_info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.item_title {
  font-family: 'Satoshi', sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin: 0;
}

.item_characteristics {
  display: flex;
  gap: 8px;
}

.item_details {
  display: flex;
  gap: 12px;
  font-size: 14px;
  color: var(--subtitle-color);
}

@media (min-width: 768px) {
  .order_items {
    grid-template-columns: repeat(2, 1fr);
  }

  .order_item {
    grid-template-columns: 100px 1fr;
  }

  .item_image_wrapper {
    width: 100px;
    height: 100px;
  }
}
</style>
