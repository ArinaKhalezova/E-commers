import { http, HttpResponse } from 'msw'
import { products } from '@/data/products'
import { reviewsData } from '@/data/reviews'
import { newArrivalsSlides } from '@/data/products'

export const productPage = [
  http.get('/productPage/:id', (req) => {
    const { id } = req.params
    const productId = Number(id)
    console.log('Mock received ID:', productId)
    if (products[productId]) {
      const responseData = {
        product: products[productId],
        reviews: reviewsData[productId],
        newArrivals: newArrivalsSlides
      }

      return HttpResponse.json(responseData)
    } else {
      return HttpResponse.json({ message: 'Product not found' }, { status: 404 })
    }
  })
]
