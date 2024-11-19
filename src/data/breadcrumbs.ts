// src/utils/breadcrumbs.ts

import type { RouteLocationNormalizedLoaded } from 'vue-router'
import { products } from '@/data/products'

interface Breadcrumb {
  label: string
  to: string
}

export function generateBreadcrumbs(route: RouteLocationNormalizedLoaded): Breadcrumb[] {
  const breadcrumbs: Breadcrumb[] = []

  // Добавляем "Home" в хлебные крошки
  breadcrumbs.push({ label: 'Home', to: '/' })

  // Добавляем "Assortment" в хлебные крошки
  breadcrumbs.push({ label: 'Assortment', to: '/assortment' })

  // Если текущий маршрут содержит id товара, добавляем характеристики товара в хлебные крошки
  const productId = Number(route.params.id)
  if (productId) {
    const product = products.find(p => p.id === productId)
    if (product) {
      breadcrumbs.push({ label: product.gender, to: `/assortment` })
      breadcrumbs.push({ label: product.category, to: `/assortment` })
      breadcrumbs.push({ label: product.title, to: `/productPage/${productId}` })
    }
  }

  return breadcrumbs
}