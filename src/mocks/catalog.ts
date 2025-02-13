import { http, HttpResponse } from 'msw'
import { products } from '@/data/products'
import { urls } from './baseUrls'

export const catalog = [
  http.get(urls.catalog, () => {
    return HttpResponse.json(products)
  })
]
