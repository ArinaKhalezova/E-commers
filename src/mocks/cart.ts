import { http, HttpResponse } from 'msw'
import { products } from '@/data/products'

export const cart = [
  http.get('/assortment', () => {
    return HttpResponse.json(products)
  })
]
