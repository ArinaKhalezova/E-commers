import { http, HttpResponse } from 'msw'
import { newArrivalsSlides, topSellingSlides } from '@/data/products'
import { homeReviews as reviews } from '@/data/homeReviews'

export const home = [
  http.get('/api/newArrivalsSlides', () => {
    return HttpResponse.json({ newArrivalsSlides })
  }),
  http.get('/api/topSellingSlides', () => {
    return HttpResponse.json({ topSellingSlides })
  }),
  http.get('/api/homeReviews', () => {
    return HttpResponse.json({ reviews })
  }),
]
