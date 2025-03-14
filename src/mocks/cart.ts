import { http, HttpResponse } from 'msw'
import { urls } from '../api/baseUrls'
import { products } from '@/data/products'

type TCartItem = {
  id: number
  sku: string
  name: string
  cost: number
  color: string
  size: string
  quantity: number
}

const loadCartFromLocalStorage = (): TCartItem[] => {
  const cart = localStorage.getItem('cart')
  return cart ? JSON.parse(cart) : []
}

const saveCartToLocalStorage = (cart: TCartItem[]) => {
  try {
    localStorage.setItem('cart', JSON.stringify(cart))
  } catch (error) {
    console.error('Failed to save cart to localStorage:', error)
  }
}

let mockCart: TCartItem[] = loadCartFromLocalStorage()

export const cart = [
  http.get(urls.serverUrl + urls.products, () => {
    const mockCart = loadCartFromLocalStorage()

    return HttpResponse.json(mockCart)
  }),

  http.post(urls.serverUrl + urls.products, async ({ request }) => {
    const mockCart = loadCartFromLocalStorage()
    const newProduct = (await request.json()) as TCartItem
    const existingProduct =
      mockCart.find((p) => p.sku === newProduct.sku) &&
      mockCart.find((k) => k.color === newProduct.color) &&
      mockCart.find((m) => m.size === newProduct.size)

    if (existingProduct) {
      existingProduct.quantity += 1
    } else {
      mockCart.push({ ...newProduct, quantity: 1 })
    }

    saveCartToLocalStorage(mockCart)
    return HttpResponse.json({ success: true })
  }),

  http.delete(urls.serverUrl + urls.products + '/:sku', ({ params }) => {
    const mockCart = loadCartFromLocalStorage()
    const sku = params.sku
    const updatedCart = mockCart.filter((p) => p.sku !== sku)
    saveCartToLocalStorage(updatedCart)
    return HttpResponse.json({ success: true })
  }),

  http.patch(urls.serverUrl + urls.products + '/:sku', async ({ params, request }) => {
    const mockCart = loadCartFromLocalStorage()
    const sku = params.sku
    const { quantity } = (await request.json()) as { quantity: number }
    const product = mockCart.find((p) => p.sku === sku)

    if (product) {
      if (quantity > 0) {
        product.quantity = quantity
        saveCartToLocalStorage(mockCart)
      } else {
        const updatedCart = mockCart.filter((p) => p.sku !== sku)
        saveCartToLocalStorage(updatedCart)
      }
    }


    return HttpResponse.json({ success: true })
  })
]
