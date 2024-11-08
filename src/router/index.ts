import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Assortment from '@/views/Assortment.vue'
import ProductPage from '@/components/ProductPage/ProductPage.vue'


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
      path: '/productPage/:id',
      name: 'productPage',
      component: ProductPage
    },
  ]
})

export default router
