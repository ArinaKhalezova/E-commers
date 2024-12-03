import type { TProduct } from '@/data/products'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// Composition API
export const useProductStore = defineStore('productStore', () => {
  const products = ref<TProduct[]>(JSON.parse(localStorage.getItem('products') || '[]'))

  const totalCountProducts = computed(() => products.value.length)

  const subtotalCostProducts = computed(() => {
    const subtotal = products.value.reduce((sum: number, product: any) => {
      return sum + product.cost * product.quantity
    }, 0)
    saveProducts()
    return subtotal
  })

  const promo = ref('')
  const discount = ref(0)

  const getSale = (code: string) => {
    const codes = {
      newYear: 10,
      sale: 20
    }

    return codes[code] != undefined ? codes[code] : 0
  }

  const applyPromoCode = () => {
    discount.value = getSale(promo.value)
  }

  const saleCost = computed(() => {
    return (subtotalCostProducts.value * discount.value) / 100
  })

  const deliveryCostProducts = computed(() => {
    let price = 0
    if (subtotalCostProducts.value == 0 || subtotalCostProducts.value > 1000) {
      price = 0
    } else if (subtotalCostProducts.value <= 1000 && subtotalCostProducts.value > 500) {
      price = 9
    } else if (subtotalCostProducts.value <= 500 && subtotalCostProducts.value > 250) {
      price = 17
    } else if (subtotalCostProducts.value <= 250) {
      price = 24
    }

    return price
  })

  const totalCostProducts = computed(() => {
    let price = subtotalCostProducts.value + deliveryCostProducts.value - saleCost.value
    return price
  })

  const addProduct = (newProduct: TProduct) => {
    const existingProduct = products.value.find((product) => product.id === newProduct.id)

    if (existingProduct) {
      existingProduct.quantity += 1
    } else {
      products.value.push({ ...newProduct, quantity: 1 })
    }

    saveProducts()
    console.log('Товар добавлен:', newProduct)
    console.log('Все товары в корзине:', products.value)
  }

  const deleteProduct = (id: number) => {
    products.value = products.value.filter((el: any) => el.id !== id)
    saveProducts()
  }

  const updateProductQuantity = (id: number, newQuantity: number) => {
    const product = products.value.find((el: any) => el.id === id)
    if (product) {
      product.quantity = newQuantity
      saveProducts()
    }
  }

  const saveProducts = () => {
    localStorage.setItem('products', JSON.stringify(products.value))
  }

  return {
    products,
    totalCountProducts,
    addProduct,
    deleteProduct,
    updateProductQuantity,
    saveProducts,
    subtotalCostProducts,
    deliveryCostProducts,
    totalCostProducts,
    promo,
    discount,
    getSale,
    applyPromoCode,
    saleCost
  }
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
