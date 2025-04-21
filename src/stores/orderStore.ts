import { defineStore } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import { useCartStore } from '@/stores/cartStore'
import type { DeliveryAddress, DeliveryRecipient } from './orderingStore'

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
  status: 'pending' | 'completed' | 'cancelled'
  deliveryAddress?: DeliveryAddress
  recipient?: DeliveryRecipient
  paymentMethod?: string
  deliveryDate?: string
  deliveryTime?: string
}

export const useOrderStore = defineStore('orderStore', () => {
  const authStore = useAuthStore()
  const cartStore = useCartStore()

  const generateOrderId = () => {
    const timestamp = Date.now().toString(36)
    const random = Math.random().toString(36).substr(2, 5)
    return `${timestamp}-${random}`.toUpperCase()
  }

  const saveOrder = (deliveryData: any) => {
    console.log('Saving order with items:', cartStore.products)
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
        coverImage: p.coverImage
      })),
      total: cartStore.products.reduce((sum, item) => sum + item.cost * item.quantity, 0),
      status: 'pending',
      ...deliveryData
    }

    // Для авторизованных пользователей
    if (authStore.isAuthenticated && authStore.user) {
      const users = JSON.parse(localStorage.getItem('users')) || []
      const userIndex = users.findIndex((u) => u.email === authStore.user.email)

      if (userIndex !== -1) {
        users[userIndex].orders = [...(users[userIndex].orders || []), newOrder]
        localStorage.setItem('users', JSON.stringify(users))
        authStore.user.orders = users[userIndex].orders
      }
    } else {
      // Для гостей
      const guestOrders = JSON.parse(localStorage.getItem('guestOrders')) || []
      localStorage.setItem('guestOrders', JSON.stringify([...guestOrders, newOrder]))
    }

    // Очищаем корзину после сохранения заказа
    cartStore.products = []
    localStorage.setItem('cart', '[]')

    return newOrder
  }

  const getOrders = () => {
    if (authStore.isAuthenticated && authStore.user) {
      return authStore.user.orders || []
    }
    return JSON.parse(localStorage.getItem('guestOrders') || '[]')
  }

  const getLastOrder = () => {
    const orders = getOrders()
    return orders.length > 0 ? orders[orders.length - 1] : null
  }

  return {
    saveOrder,
    getOrders,
    getLastOrder
  }
})
