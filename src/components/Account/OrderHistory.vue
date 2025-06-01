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
          <div :class="$style.order_prices">
            <div :class="$style.order_price_item">
              <span>Subtotal:</span>
              <span>${{ order.totalCost - order.deliveryCost }}</span>
            </div>
            <div :class="$style.order_price_item">
              <span>Sale:</span>
              <span>${{ order.saleCost }}</span>
            </div>
            <div :class="$style.order_price_item">
              <span>Delivery:</span>
              <span>${{ order.deliveryCost }}</span>
            </div>
            <div :class="$style.order_price_item">
              <span>Total:</span>
              <span>${{ order.totalCost }}</span>
            </div>
          </div>
        </div>

        <ProductCard :order="order" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useOrderStore } from '@/stores/orderStore'
import { useAuthStore } from '@/stores/auth'
import ProductCard from './ProductCard.vue'

const authStore = useAuthStore()
const orderStore = useOrderStore()

const products = ref([])

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

const formatDate = (date: Date | string) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:5173/assortment')
    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }
    products.value = await response.json()

    if (authStore.isAuthenticated) {
      await orderStore.fetchOrders()
    }
  } catch (error) {
    console.error('Error fetching products:', error)
  }
})
</script>

<style module>
.order_history {
  padding: 20px;
  margin: 0 auto;
}

.order_prices {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  text-align: right;
}

.order_price_item {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

.order_price_item span:first-child {
  color: var(--subtitle-color);
}

.order_price_item span:last-child {
  font-weight: 700;
  min-width: 60px;
  text-align: right;
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
</style>
