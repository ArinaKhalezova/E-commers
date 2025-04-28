<template>
  <div :class="$style.order_history">
    <h2 :class="$style.section_title">Order History</h2>

    <div v-if="orders.length === 0" :class="$style.empty_state">
      <q-icon name="shopping_cart" size="xl" />
      <p>No orders found</p>
    </div>

    <div v-else :class="$style.orders_list">
      <div v-for="order in sortedOrders" :key="order.id" :class="$style.order_card">
        <div :class="$style.order_header">
          <div :class="$style.order_meta">
            <h3 :class="$style.order_number">Order #{{ order.id }}</h3>
            <p :class="$style.order_date">{{ formatDate(order.date) }}</p>
          </div>
          <div :class="$style.order_total">${{ order.total || 0 }}</div>
        </div>

        <hr :class="$style.order_separator" />

        <div :class="$style.order_items">
          <div v-for="item in order.items" :key="item.sku" :class="$style.order_item">
            <div :class="$style.item_image_wrapper">
              <img
                :src="getImageUrl(item.coverImage)"
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useOrderStore } from '@/stores/orderStore'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const orderStore = useOrderStore()

const orders = computed(() => {
  if (authStore.isAuthenticated) {
    return authStore.user?.orders || []
  }
  return JSON.parse(localStorage.getItem('guestOrders') || '[]')
})

const sortedOrders = computed(() =>
  [...orders.value].sort((a, b) => {
    const dateA = typeof a.date === 'string' ? new Date(a.date) : a.date
    const dateB = typeof b.date === 'string' ? new Date(b.date) : b.date
    return dateB.getTime() - dateA.getTime()
  })
)

const getImageUrl = (path?: string) => {
  if (!path) return ''
  if (path.startsWith('http') || path.startsWith('/')) return path
  return path
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

const formatDate = (date: Date | string) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

onMounted(async () => {
  if (authStore.isAuthenticated) {
    await orderStore.fetchOrders()
  }
})
</script>

<style module>
.order_history {
  padding: 20px;
  margin: 0 auto;
}

.section_title {
  font-family: 'Satoshi', sans-serif;
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 30px;
  color: var(--title-color);
}

.empty_state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
  color: var(--subtitle-color);
}

.empty_state p {
  margin-top: 20px;
  font-size: 18px;
}

.orders_list {
  display: grid;
  gap: 20px;
}

.order_card {
  background: var(--light-background-color);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.order_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.order_meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.order_number {
  font-family: 'Satoshi', sans-serif;
  font-size: 18px;
  font-weight: 900;
  margin: 0;
}

.order_date {
  font-size: 14px;
  color: var(--subtitle-color);
  margin: 0;
}

.order_total {
  font-family: 'Satoshi', sans-serif;
  font-size: 18px;
  font-weight: 900;
}

.order_separator {
  border: none;
  height: 1px;
  background-color: var(--border-color);
  margin: 16px 0;
}

.order_items {
  display: grid;
  gap: 20px;
}

.order_item {
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
