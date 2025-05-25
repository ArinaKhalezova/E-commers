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

    const savedPromo = sessionStorage.getItem('cart_promo')
    if (savedPromo) {
      promo.value = savedPromo
    }

    const savedDiscount = sessionStorage.getItem('cart_discount')
    if (savedDiscount) {
      discount.value = Number(savedDiscount)
    }
  }

  const saveCartToLocalStorage = () => {
    localStorage.setItem('cart', JSON.stringify(products.value))
  }

  const savePromoToSession = () => {
    sessionStorage.setItem('cart_promo', promo.value)
    sessionStorage.setItem('cart_discount', discount.value.toString())
  }

  loadCartFromLocalStorage()

  watch(
    products,
    (newProducts) => {
      saveCartToLocalStorage()
    },
    { deep: true }
  )

  // Getters
  const totalCountProducts = computed(() => products.value.length)

  const subtotalCostProducts = computed(() => {
    const subtotal = products.value.reduce((sum: number, product: any) => {
      return sum + product.cost * product.quantity
    }, 0)
    return subtotal
  })

  const saleCost = computed(() => {
    let cost = subtotalCostProducts.value * discount.value
    return cost / 100
  })

  const deliveryCostProducts = computed(() => {
    let deliveryCost = 0
    if (subtotalCostProducts.value == 0 || subtotalCostProducts.value > 1000) {
      deliveryCost = 0
    } else if (subtotalCostProducts.value <= 1000 && subtotalCostProducts.value > 500) {
      deliveryCost = 9
    } else if (subtotalCostProducts.value <= 500 && subtotalCostProducts.value > 250) {
      deliveryCost = 17
    } else if (subtotalCostProducts.value <= 250) {
      deliveryCost = 24
    }

    return deliveryCost
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
      discount.value = 0
      promoCodeMessage.value = 3
    }
    savePromoToSession()
  }

  const getProductBySku = (sku: string) => {
    return products.value.find((product) => product.sku === sku)
  }

  const addProduct = async (product: TProduct, sku: string) => {
    await fetch(urls.serverUrl + urls.products, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...product,
        sku,
        coverImage: product.coverImage || ''
      })
    })
    products.value.push({
      ...product,
      sku,
      coverImage: product.coverImage || ''
    })
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

  const clearCart = () => {
    products.value = []
    promo.value = ''
    discount.value = 0
    promoCodeMessage.value = 0
    localStorage.setItem('cart', '[]')
    sessionStorage.removeItem('cart_promo')
    sessionStorage.removeItem('cart_discount')
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
    fetchProducts,
    clearCart
  }
})
