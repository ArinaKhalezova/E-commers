import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Category from '@/views/Category.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    }
  ]
})

export default router
