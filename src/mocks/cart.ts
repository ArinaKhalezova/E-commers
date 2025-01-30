import { http, HttpResponse } from 'msw'

let mockCart: Array<{
  id: number
  name: string
  cost: number
  quantity: number
}> = []

export const cart = [
  http.get('/api/products', () => {
    return HttpResponse.json(mockCart)
  }),

  http.post('/api/products', async ({ request }) => {
    const newProduct = (await request.json()) as {
      id: number
      name: string
      cost: number
      quantity: number
    }
    const existingProduct = mockCart.find((p) => p.id === newProduct.id)

    if (existingProduct) {
      existingProduct.quantity += 1
    } else {
      mockCart.push({ ...newProduct, quantity: 1 })
    }

    return HttpResponse.json({ success: true })
  }),

  http.delete('/api/products/:id', ({ params }) => {
    const id = Number(params.id)
    mockCart = mockCart.filter((p) => p.id !== id)
    return HttpResponse.json({ success: true })
  }),

  http.patch('/api/products/:id', async ({ params, request }) => {
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

    return HttpResponse.json({ success: true })
  })
]
