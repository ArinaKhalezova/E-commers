import type { TProduct } from '@/data/products.types'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

const PROMOCODES: Record<string, number> = {
  newYear: 10,
  sale: 20
}

// Composition API
export const useCartStore = defineStore('cartStore', () => {
  // State
  const products = ref<TProduct[]>([])
  const promo = ref('')
  const discount = ref(0)

  // Getters
  const totalCountProducts = computed(() => products.value.length)

  const subtotalCostProducts = computed(() => {
    const subtotal = products.value.reduce((sum: number, product: any) => {
      return sum + product.cost * product.quantity
    }, 0)
    return subtotal
  })

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
    const price = subtotalCostProducts.value + deliveryCostProducts.value - saleCost.value
    return price
  })

  // Actions
  const fetchProducts = async () => {
    const response = await fetch('/api/products')
    products.value = await response.json()
  }

  const getSale = (code: string): number => {
    return PROMOCODES[code] ?? 0
  }

  const applyPromoCode = () => {
    discount.value = getSale(promo.value)
  }

  const getProductById = (productId: number) => {
    return products.value.find((product) => product.id === productId)
  }

  const addProduct = async (product: Omit<TProduct, 'quantity'>) => {
    await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
    await fetchProducts()
  }

  const deleteProduct = async (id: number) => {
    await fetch(`/api/products/${id}`, { method: 'DELETE' })
    await fetchProducts()
  }

  const updateProductQuantity = async (id: number, quantity: number) => {
    await fetch(`/api/products/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity })
    })
    await fetchProducts()
  }


  return {
    products,
    totalCountProducts,
    addProduct,
    getProductById,
    deleteProduct,
    updateProductQuantity,
    subtotalCostProducts,
    deliveryCostProducts,
    totalCostProducts,
    promo,
    discount,
    getSale,
    applyPromoCode,
    saleCost,
    fetchProducts
  }
})

// Options API
// export const useCartStore = defineStore('cartStore', {
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
