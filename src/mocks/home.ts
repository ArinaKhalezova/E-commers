import { http, HttpResponse } from 'msw'
import { newArrivalsSlides, topSellingSlides } from '@/data/products'
import { homeReviews as reviews } from '@/data/homeReviews'
import { urls } from '../services/baseUrls'
export const home = [
  http.get(urls.serverUrl + urls.newArrivalsSlides, () => {
    return HttpResponse.json({ newArrivalsSlides })
  }),

  http.get(urls.serverUrl + urls.topSellingSlides, () => {
    return HttpResponse.json({ topSellingSlides })
  }),
  http.get(urls.serverUrl + urls.homeReviews, () => {
    return HttpResponse.json({ reviews })
  }),
]
