import { http, HttpResponse } from 'msw'
import { urls } from './baseUrls'

type TCartItem = {
  id: number
  name: string
  cost: number
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
    const newProduct = (await request.json()) as {
      id: number
      name: string
      cost: number
      color: string
      quantity: number
    }
    const existingProduct = mockCart.find((p) => p.id === newProduct.id)

    if (existingProduct) {
      existingProduct.quantity += 1
    } else {
      mockCart.push({ ...newProduct, quantity: 1 })
    }

    saveCartToLocalStorage(mockCart)
    return HttpResponse.json({ success: true })
  }),

  http.delete(urls.serverUrl + urls.products + urls.id, ({ params }) => {
    const mockCart = loadCartFromLocalStorage()
    const id = Number(params.id)
    const updatedCart = mockCart.filter((p) => p.id !== id)
    saveCartToLocalStorage(updatedCart)
    return HttpResponse.json({ success: true })
  }),

  http.patch(urls.serverUrl + urls.products + urls.id, async ({ params, request }) => {
    const mockCart = loadCartFromLocalStorage()
    const id = Number(params.id)
    const { quantity } = (await request.json()) as { quantity: number }
    const product = mockCart.find((p) => p.id === id)

    if (product) {
      if (quantity > 0) {
        product.quantity = quantity
      } else {
        mockCart = mockCart.filter((p) => p.id !== id)
      }
    }

    saveCartToLocalStorage(mockCart)
    return HttpResponse.json({ success: true })
  })
]
