import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Assortment from '@/views/Assortment.vue'
import ProductCard from '@/components/Catalog/LargeProductCard.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/assortment',
      name: 'assortment',
      component: Assortment
    },
    {
      path: '/productCard/:id',
      name: 'productCard',
      component: ProductCard
    },
  ]
})

export default router
