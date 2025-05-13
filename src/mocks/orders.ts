import { http, HttpResponse } from 'msw'
import { urls } from '../services/baseUrls'

type TOrderItem = {
  id: number
  sku: string
  title: string
  cost: number
  color: string
  size: string
  coverImage: string
  quantity: number
}

type TOrder = {
  id: string
  date: string
  items: TOrderItem[]
  total: number
  deliveryAddress?: any
  recipient?: any
  paymentMethod?: string
  deliveryDate?: string
  deliveryTime?: string
}

const loadOrdersFromLocalStorage = (): TOrder[] => {
  const orders = localStorage.getItem('orders')
  return orders ? JSON.parse(orders) : []
}

const saveOrdersToLocalStorage = (orders: TOrder[]) => {
  try {
    localStorage.setItem('orders', JSON.stringify(orders))
  } catch (error) {
    console.error('Failed to save orders to localStorage:', error)
  }
}

let mockOrders: TOrder[] = loadOrdersFromLocalStorage()

export const orders = [
  http.get(urls.serverUrl + urls.orders, () => {
    const mockOrders = loadOrdersFromLocalStorage()
    return HttpResponse.json(mockOrders)
  }),

  http.post(urls.serverUrl + urls.orders, async ({ request }) => {
    const newOrder = (await request.json()) as TOrder
    mockOrders.push(newOrder)
    saveOrdersToLocalStorage(mockOrders)
    return HttpResponse.json({ success: true })
  })
]