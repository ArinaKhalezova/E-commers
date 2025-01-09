import { http, HttpResponse } from 'msw'
import { products } from '@/data/products'
import { reviewsData } from '@/data/reviews'
import { newArrivalsSlides } from '@/data/products'

export const productPage = [
  http.get('/api/productPage/:id', (req) => {
    console.log('Mock received req:', req)
    const { id } = req.params
    const productId = Number(id)
    console.log('Mock received ID:', productId)
    const product = products.find((pr) => pr.id === productId)
    if (product) {
      const responseData = {
        product: product
      }

      return HttpResponse.json(responseData)
    } else {
      return HttpResponse.json({ message: 'Product not found' }, { status: 404 })
    }
  }),
  http.get('/api/reviews:id', (req) => {
    const { id } = req.params
    const productId = Number(id)
    const reviews = reviewsData[productId] || []
    return HttpResponse.json({ reviews })
  }),
  http.get('/api/newArrivalsSlides', () => {
    return HttpResponse.json({ newArrivalsSlides })
  })
]
