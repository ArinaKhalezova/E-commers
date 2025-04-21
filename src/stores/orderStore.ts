import { defineStore } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import { useCartStore } from '@/stores/cartStore'
import { urls } from '@/services/baseUrls'
import type { DeliveryAddress, DeliveryRecipient } from './orderingStore'
import { ref } from 'vue'

export interface OrderItem {
  sku: string
  name: string
  color: string
  size: string
  quantity: number
  cost: number
  coverImage: string
}

export interface Order {
  id: string
  date: Date
  items: OrderItem[]
  total: number
  deliveryAddress?: DeliveryAddress
  recipient?: DeliveryRecipient
  paymentMethod?: string
  deliveryDate?: string
  deliveryTime?: string
}

export const useOrderStore = defineStore('orderStore', () => {
  const authStore = useAuthStore()
  const cartStore = useCartStore()
  const orders = ref<Order[]>([])

  const generateOrderId = () => {
    const now = new Date()
    const datePart = [
      now.getFullYear().toString().slice(-2),
      (now.getMonth() + 1).toString().padStart(2, '0'),
      now.getDate().toString().padStart(2, '0')
    ].join('')
    
    const todayOrders = orders.value.filter(order => 
      new Date(order.date).toDateString() === now.toDateString()
    )
    
    const orderNumber = todayOrders.length + 1
    return `${datePart}-${orderNumber.toString().padStart(3, '0')}`
  }

  const saveOrder = async (deliveryData: any) => {
    const newOrder: Order = {
      id: generateOrderId(),
      date: new Date(),
      items: cartStore.products.map((p) => ({
        sku: p.sku,
        name: p.name,
        color: p.color,
        size: p.size,
        quantity: p.quantity,
        cost: p.cost,
        coverImage: p.coverImage || ''
      })),
      total: cartStore.totalCostProducts,
      ...deliveryData
    }

    // Отправляем заказ на сервер
    await fetch(urls.serverUrl + urls.orders, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newOrder)
    })

    // Очищаем корзину
    cartStore.products = []
    localStorage.setItem('cart', '[]')

    return newOrder
  }

  const fetchOrders = async () => {
    try {
      const response = await fetch(urls.serverUrl + urls.orders)
      if (!response.ok) throw new Error('Failed to fetch orders')
      orders.value = await response.json()
    } catch (error) {
      console.error('Error fetching orders:', error)
    }
  }

  const getOrders = () => {
    return orders.value
  }

  const getLastOrder = () => {
    return orders.value.length > 0 ? orders.value[orders.value.length - 1] : null
  }

  // Загружаем заказы при инициализации
  fetchOrders()

  return {
    saveOrder,
    getOrders,
    getLastOrder,
    fetchOrders
  }
})