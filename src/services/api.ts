import { useAuthStore } from '@/stores/auth'
import { createPinia } from 'pinia'
import axios from 'axios'

const pinia = createPinia()

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

api.interceptors.request.use((config) => {
  const authStore = useAuthStore(pinia)
  if (authStore.token) {
    config.headers.Authorization = `Bearer ${authStore.token}`
  }
  return config
})

export default api
