import { defineStore } from 'pinia'
import { ref } from 'vue'

interface DeliveryAddress {
  street: string
  apartament: number
  entace: number
  floor: number
  comment: string
}

export const useOrderingStore = defineStore('orderingStore', () => {
  const deliveryAddress = ref<DeliveryAddress | null>(null)

  const saveAddress = (newAddress: DeliveryAddress) => {
    deliveryAddress.value = newAddress
  }

  return {
    deliveryAddress,
    saveAddress
  }
})
