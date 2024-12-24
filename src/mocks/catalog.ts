import { http, HttpResponse } from 'msw'
import { products } from '@/data/products'

export const catalog = [
  http.get('/assortment', () => {
    return HttpResponse.json(products)
  })
]
