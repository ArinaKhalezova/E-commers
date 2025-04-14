import { urls } from '@/services/baseUrls'
import type { TProduct } from '@/data/products.types'
import { watch } from 'vue'
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
  const promoCodeMessage = ref(0)

  const loadCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      products.value = JSON.parse(savedCart)
    }
  }

  const saveCartToLocalStorage = () => {
    localStorage.setItem('cart', JSON.stringify(products.value))
  }

  loadCartFromLocalStorage()

  watch(products, (newProducts) => {
    saveCartToLocalStorage()
  }, {deep: true})

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
    const response = await fetch(urls.serverUrl + urls.products)
    products.value = await response.json()
  }

  const getSale = (code: string): number => {
    return PROMOCODES[code] ?? 0
  }

  const applyPromoCode = () => {
    if (getSale(promo.value)) {
      discount.value = getSale(promo.value)
      promoCodeMessage.value = 1
    } else if (promo.value === '') {
      discount.value = getSale(promo.value)
      promoCodeMessage.value = 2
    } else {
      discount.value = getSale(promo.value)
      promoCodeMessage.value = 3
    }
  }

  const getProductBySku = (sku: string) => {
    return products.value.find((product) => product.sku === sku)
  }

  const addProduct = async (product: TProduct, sku: string) => {
    await fetch(urls.serverUrl + urls.products, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...product, sku })
    })
    products.value.push({ ...product, sku })
    await fetchProducts()
  }

  const deleteProduct = async (sku: string) => {
    await fetch(urls.serverUrl + urls.products + '/' + sku, { method: 'DELETE' })
    await fetchProducts()
  }

  const updateProductQuantity = async (sku: string, quantity: number) => {
    await fetch(urls.serverUrl + urls.products + '/' + sku, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity })
    })
    await fetchProducts()
  }

  return {
    PROMOCODES,
    products,
    totalCountProducts,
    promoCodeMessage,
    addProduct,
    getProductBySku,
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
