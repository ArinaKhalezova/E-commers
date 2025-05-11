import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Assortment from '@/views/Assortment.vue'
import ProductPage from '@/views/ProductPage.vue'
import Cart from '@/views/Cart.vue'
import Account from '@/views/Account.vue'
import Ordering from '@/views/Ordering.vue'
import OrderInformation from '@/components/SuccessPage/OrderInformation.vue'

import { useAuthStore } from '@/stores/auth'

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
      path: '/product/:id',
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
      component: Account,
      meta: { requiresAuth: true }
    },
    {
      path: '/ordering',
      name: 'ordering',
      component: Ordering
    },
    {
      path: '/successPage',
      name: 'successPage',
      component: OrderInformation
    }
  ],

  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    authStore.showAuthModal = true
    next({ path: '/', query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

export default router
