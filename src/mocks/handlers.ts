// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw'
import { products } from '@/data/products'

export const handlers = [
  // Обработчик для запроса каталога
  http.get('http://localhost:5173/assortment', () => {
    return HttpResponse.json(products) // Возвращаем весь массив продуктов
  })
]
