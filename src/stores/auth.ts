import { defineStore } from 'pinia'

interface User {
  email: string
  password: string
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
        this.user = JSON.parse(user)
        this.isAuthenticated = true
      }
    },

    register(userData: User) {
      const users = JSON.parse(localStorage.getItem('users') || '[]')

      if (users.some((u: User) => u.email === userData.email)) {
        throw new Error('Пользователь с таким email уже существует')
      }

      users.push(userData)
      localStorage.setItem('users', JSON.stringify(users))

      this.user = userData
      this.isAuthenticated = true
      localStorage.setItem('user', JSON.stringify(userData))
    },

    login(credentials: { email: string; password: string }) {
      const users = JSON.parse(localStorage.getItem('users') || '[]')
      const user = users.find(
        (u: User) => u.email === credentials.email && u.password === credentials.password
      )

      if (!user) {
        throw new Error('Неверный email или пароль')
      }

      this.user = user
      this.isAuthenticated = true
      localStorage.setItem('user', JSON.stringify(user))
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
