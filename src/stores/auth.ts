import { defineStore } from 'pinia'
import type { Order } from './orderStore'

interface UserAddress {
  street?: string
  apartament?: number
  entace?: number
  floor?: number
}

interface User {
  email: string
  password: string
  surname?: string
  name?: string
  phone?: string
  orders?: Order[]
  address?: UserAddress[]
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    isAuthenticated: false,
    showAuthModal: false
  }),

  actions: {
    initAuth() {
      const user = localStorage.getItem('user')
      if (user) {
        const parsedUser = JSON.parse(user)
        if (!Array.isArray(parsedUser.orders)) {
          parsedUser.orders = []
        }
        
        const users = JSON.parse(localStorage.getItem('users') || '[]')
        const userIndex = users.findIndex((u: User) => u.email === parsedUser.email)
        if (userIndex !== -1 && Array.isArray(users[userIndex].orders)) {
          parsedUser.orders = users[userIndex].orders
        }
        this.user = parsedUser
        this.isAuthenticated = true
        localStorage.setItem('user', JSON.stringify(parsedUser))
      }
    },

    login(credentials: { email: string; password: string }) {
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      const user = users.find(
        (u) => u.email === credentials.email && u.password === credentials.password
      )

      if (!user) throw new Error('Invalid credentials')

      // Миграция гостевых заказов
      const guestOrders = JSON.parse(localStorage.getItem('guestOrders') || '[]')
      if (guestOrders.length > 0) {
        user.orders = [...(user.orders || []), ...guestOrders]
        localStorage.setItem(
          'users',
          JSON.stringify(users.map((u) => (u.email === user.email ? user : u)))
        )
        localStorage.removeItem('guestOrders')
      }

      this.user = user
      this.isAuthenticated = true
      localStorage.setItem('user', JSON.stringify(user))
    },

    register(userData: User) {
      const users = JSON.parse(localStorage.getItem('users') || '[]')

      if (users.some((u: User) => u.email === userData.email)) {
        throw new Error('Пользователь с таким email уже существует')
      }

      const newUser = {
        ...userData,
        orders: []
      }

      users.push(newUser)
      localStorage.setItem('users', JSON.stringify(users))

      this.user = newUser
      this.isAuthenticated = true
      localStorage.setItem('user', JSON.stringify(newUser))
    },

    editUserAccount(userData: User) {
      if (!this.user) return

      const users = JSON.parse(localStorage.getItem('users') || '[]')
      const userIndex = users.findIndex((u: User) => u.email === this.user?.email)

      if (userIndex === -1) {
        throw new Error('User not found')
      }

      const updatedUser = {
        ...this.user,
        ...userData
      }

      this.user = updatedUser
      localStorage.setItem('user', JSON.stringify(updatedUser))

      users[userIndex] = updatedUser
      localStorage.setItem('users', JSON.stringify(users))
    },

    updateUserOrders(orders: Order[]) {
      if (!this.user) return

      this.user.orders = orders
      localStorage.setItem('user', JSON.stringify(this.user))

      // Обновляем в общем списке users
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      const userIndex = users.findIndex((u: User) => u.email === this.user?.email)
      if (userIndex !== -1) {
        users[userIndex].orders = orders
        localStorage.setItem('users', JSON.stringify(users))
      }
    },

    logout() {
      this.user = null
      this.isAuthenticated = false
      localStorage.removeItem('user')
    },

    closeAuthModal() {
      this.showAuthModal = false
    }
  }
})
