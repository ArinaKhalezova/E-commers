import type { RouteLocationNormalizedLoaded } from 'vue-router'
import { products } from '@/data/products'

interface Breadcrumb {
  label: string
  to: string
}

export function generateBreadcrumbs(route: RouteLocationNormalizedLoaded): Breadcrumb[] {
  const breadcrumbs: Breadcrumb[] = []

  breadcrumbs.push({ label: 'Home', to: '/' })

  breadcrumbs.push({ label: 'Assortment', to: '/assortment' })

  const productId = Number(route.params.id)
  if (productId) {
    const product = products.find((p) => p.id === productId)
    if (product) {
      breadcrumbs.push({ label: product.gender, to: `/assortment` })
      breadcrumbs.push({ label: product.category, to: `/assortment` })
      breadcrumbs.push({ label: product.title, to: `/productPage/${productId}` })
    }
  }

  return breadcrumbs
}
