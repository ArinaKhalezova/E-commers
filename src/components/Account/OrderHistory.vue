<template>
  <div :class="$style.order_history">
    <h2 :class="$style.section_title">Order History</h2>

    <div v-if="orders.length === 0" :class="$style.empty_state">
      <q-icon name="shopping_cart" size="xl" />
      <p>No orders found</p>
    </div>

    <div v-else class="q-gutter-y-md">
      <q-card v-for="order in sortedOrders" :key="order.id" :class="$style.order_card">
        <q-card-section>
          <div :class="$style.order_header">
            <div :class="$style.order_meta">
              <div class="text-h6">Order #{{ order.id }}</div>
              <div class="text-caption text-grey-7">
                {{ formatDate(order.date) }}
              </div>
            </div>
            <div class="text-h6">${{ order.total || 0 }}</div>
          </div>

          <q-separator class="q-my-md" />

          <div class="row q-col-gutter-md">
            <div v-for="item in order.items" :key="item.sku" class="col-12 col-md-6">
              <div class="row items-center q-gutter-sm">
                <q-img
                  :src="getImageUrl(item?.coverImage)"
                  width="80px"
                  height="80px"
                  :class="$style.item_image"
                />
                <div>
                  <div class="text-weight-bold">{{ item.name }}</div>
                  <div class="text-caption">Color: {{ item.color }} | Size: {{ item.size }}</div>
                  <div class="text-caption">
                    Qty: {{ item.quantity }} × ${{ item.cost.toFixed(2) }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useOrderStore } from '@/stores/orderStore'
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()

const orderStore = useOrderStore()
const orders = computed(() => {
  if (authStore.isAuthenticated) {
    return authStore.user?.orders || []
  }
  return orderStore.getOrders()
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
  if (path.startsWith('http')) return path
  return new URL(`/src/assets/${path}`, import.meta.url).href
}

const formatDate = (date: Date | string) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style module>
.order_history {
  margin-top: 40px;
}

.section_title {
  font-size: 24px;
  margin-bottom: 20px;
  color: var(--title-color);
}

.order_card {
  background: var(--light-background-color);
  border-radius: 16px;
  margin-bottom: 20px;
  padding: 20px;
}

.order_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border-color);
}

.order_meta {
  display: flex;
  gap: 12px;
  align-items: center;
  font-size: 14px;
}

.order_date {
  color: var(--subtitle-color);
}

.order_total {
  font-weight: 700;
  font-size: 16px;
}

.order_items {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.order_item {
  display: flex;
  gap: 16px;
  padding: 12px 0;
}

.item_image {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  object-fit: cover;
}

.item_info {
  flex: 1;
}

.item_name {
  margin: 0 0 8px;
  font-size: 16px;
}

.item_details {
  display: flex;
  gap: 12px;
  font-size: 14px;
  color: var(--subtitle-color);
}

.empty_state {
  padding: 40px;
  text-align: center;
  color: var(--subtitle-color);
}
</style>
