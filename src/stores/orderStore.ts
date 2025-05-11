import { defineStore } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import { useCartStore } from '@/stores/cartStore'
import { urls } from '@/services/baseUrls'
import type { DeliveryAddress, DeliveryRecipient } from './orderingStore'
import { ref } from 'vue'

export interface OrderItem {
  id: number
  sku: string
  title: string
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

    const todayOrders = orders.value.filter(
      (order) => new Date(order.date).toDateString() === now.toDateString()
    )

    const orderNumber = todayOrders.length + 1
    return `${datePart}-${orderNumber.toString().padStart(3, '0')}`
  }

  const saveOrder = async (deliveryData: any) => {
    try {
      const newOrder: Order = {
        id: generateOrderId(),
        date: new Date(),
        items: cartStore.products.map((product) => {
          const variant = product.aspects?.[0]?.variants?.find(
            (v) => v.sku === product.sku || v.sizes?.some((s) => s.sku === product.sku)
          )

          // Находим размер, если есть
          const sizeVariant = variant?.sizes?.find((s) => s.sku === product.sku)

          return {
            id: product.id,
            sku: product.sku,
            title: product.title,
            color: product.color || variant?.color || '',
            size: product.size || sizeVariant?.size || '',
            quantity: product.quantity,
            cost: product.cost,
            coverImage: variant?.coverImage || product.coverImage || product.product_img || ''
          }
        }),
        total: cartStore.totalCostProducts,
        ...deliveryData
      }

      // Сохраняем заказ в общее хранилище
      orders.value.push(newOrder)
      localStorage.setItem('orders', JSON.stringify(orders.value))

      // Для авторизованных пользователей
      if (authStore.isAuthenticated && authStore.user) {
        const updatedOrders = [...(authStore.user.orders || []), newOrder]
        authStore.updateUserOrders(updatedOrders)
      }
      // Для гостей
      else {
        const guestOrders = JSON.parse(localStorage.getItem('guestOrders') || '[]')
        guestOrders.push(newOrder)
        localStorage.setItem('guestOrders', JSON.stringify(guestOrders))
      }

      // Очистка корзины
      cartStore.products = []
      localStorage.setItem('cart', '[]')

      return newOrder
    } catch (error) {
      console.error('Error saving order:', error)
      throw error
    }
  }

  const fetchOrders = async () => {
    try {
      const response = await fetch(urls.serverUrl + urls.orders, {
        headers: {
          Authorization: `Bearer ${authStore.token}`
        }
      })
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
