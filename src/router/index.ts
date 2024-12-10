import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Assortment from '@/views/Assortment.vue'
import ProductPage from '@/views/ProductPage.vue'
import Cart from '@/views/Cart.vue'
import Account from '@/views/Account.vue'
import Ordering from '@/views/Ordering.vue'

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
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/ordering',
      name: 'ordering',
      component: Ordering
    }
  ],

  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
