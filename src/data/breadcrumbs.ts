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
  const productId = route.params.id as string
  if (productId) {
    const product = products.find(p => p.id === productId)
    if (product) {
      breadcrumbs.push({ label: product.gender, to: `/assortment/${product.gender.toLowerCase()}` })
      breadcrumbs.push({ label: product.category, to: `/assortment/${product.gender.toLowerCase()}/${product.category.toLowerCase()}` })
      breadcrumbs.push({ label: product.title, to: `/productCard/${productId}` })
    }
  }

  return breadcrumbs
}