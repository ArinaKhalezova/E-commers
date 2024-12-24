import { http, HttpResponse } from 'msw'
import { newArrivalsSlides, topSellingSlides } from '@/data/products'
import { homeReviews as reviews } from '@/data/homeReviews'

export const home = [
  http.get('/home', () => {
    return HttpResponse.json({ newArrivalsSlides, topSellingSlides, reviews })
  })
]
