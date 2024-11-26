import { defineStore } from 'pinia'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: JSON.parse(localStorage.getItem('products') || '[]')
  }),

  getters: {
    totalCountProducts(): number {
      return this.products.length
    }
  },

  actions: {
    deleteProduct(id: number) {
      this.products = this.products.filter((el) => el.id !== id)
      this.saveProducts()
    },

    addProduct(object: any) {
      this.products.push({ ...object })
      this.saveProducts()

      console.log('Товар добавлен:', object)
      console.log('Все товары в корзине:', this.products)
    },

    saveProducts() {
      localStorage.setItem('products', JSON.stringify(this.products))
    }
  }
})
