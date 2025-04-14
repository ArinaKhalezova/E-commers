import { http, HttpResponse } from 'msw'
import { products } from '@/data/products'
import { reviewsData } from '@/data/reviews'
import { newArrivalsSlides } from '@/data/products'
import { urls } from '../services/baseUrls'

export const productPage = [
  http.get(urls.serverUrl + urls.productPage + urls.id, (req) => {
    console.log('(product)Mock received req:', req)
    const { id } = req.params
    const productId = Number(id)
    console.log('(product)Mock received ID:', productId)
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
  http.get(urls.serverUrl + urls.reviews + urls.id, (req) => {
    console.log('(review)Mock received req:', req)
    const { id } = req.params
    const reviewId = Number(id)
    console.log('(review)Mock received ID:', reviewId)
    const productReviews = reviewsData.find((r) => r.id_product === reviewId)
    if (productReviews) {
      return HttpResponse.json({ reviews: productReviews.review })
    } else {
      return HttpResponse.json({ message: 'Reviews not found' }, { status: 404 })
    }
  }),
  http.get(urls.serverUrl + urls.newArrivalsSlides, () => {
    return HttpResponse.json({ newArrivalsSlides })
  })
]
