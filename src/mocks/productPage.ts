import { http, HttpResponse } from 'msw'
import { products } from '@/data/products'
import { reviewsData } from '@/data/reviews'
import { newArrivalsSlides } from '@/data/products'

export const productPage = [
  http.get('/api/productPage/:id', (req) => {
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
  http.get('/api/reviews/:id', (req) => {
    console.log('(review)Mock received req:', req)
    const { id } = req.params
    const reviewId = Number(id)
    console.log('(review)Mock received ID:', reviewId)
    const productReviews = reviewsData.find((r) => r.id_product === reviewId);
    if (productReviews) {
      return HttpResponse.json({ reviews: productReviews.review });
    } else {
      return HttpResponse.json({ message: 'Reviews not found' }, { status: 404 });
    }

    // const reviewsId = productId
    // console.log('Mock received reviews ID:', reviewsId)
    // const reviews = reviews.find((pr) => pr.id === reviewsId)
    // // const reviews = reviewsData[productId] || []
    // console.log('dfffffffffffffffffffffffffffffffffffff')
    // console.log('reviews', reviews)
    // return HttpResponse.json({ reviews })
  }),
  http.get('/api/newArrivalsSlides', () => {
    return HttpResponse.json({ newArrivalsSlides })
  })
]
