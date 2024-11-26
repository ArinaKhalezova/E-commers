import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// Composition API
export const useProductStore = defineStore('productStore', () => {
  const products = ref(JSON.parse(localStorage.getItem('products') || '[]'))

  const totalCountProducts = computed(() => products.value.length)

  const addProduct = (object: any) => {
    products.value.push({ ...object })
    saveProducts()
    console.log('Товар добавлен:', object)
    console.log('Все товары в корзине:', products.value)
  }

  const deleteProduct = (id: number) => {
    products.value = products.value.filter((el: any) => el.id !== id)
    saveProducts()
  }

  const saveProducts = () => {
    localStorage.setItem('products', JSON.stringify(products.value))
  }

  return { products, totalCountProducts, addProduct, deleteProduct, saveProducts }
})

// Options API
// export const useProductStore = defineStore('productStore', {
//   state: () => ({
//     products: JSON.parse(localStorage.getItem('products') || '[]')
//   }),

//   getters: {
//     totalCountProducts(): number {
//       return this.products.length
//     }
//   },

//   actions: {
//     deleteProduct(id: number) {
//       this.products = this.products.filter((el) => el.id !== id)
//       this.saveProducts()
//     },

//     addProduct(object: any) {
//       this.products.push({ ...object })
//       this.saveProducts()

//       console.log('Товар добавлен:', object)
//       console.log('Все товары в корзине:', this.products)
//     },

//     saveProducts() {
//       localStorage.setItem('products', JSON.stringify(this.products))
//     }
//   }
// })
