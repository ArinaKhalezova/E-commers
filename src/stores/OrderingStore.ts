import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface DeliveryAddress {
  street: string
  apartament: number
  entace: number
  floor: number
  comment: string
}

export interface DeliveryRecipient {
  surname: string
  name: string
  phone: string
  email: string
}

export const useOrderingStore = defineStore('orderingStore', () => {
  const deliveryAddress = ref<DeliveryAddress | null>(null)
  const deliveryRecipient = ref<DeliveryRecipient | null>(null)

  const saveAddress = (newAddress: DeliveryAddress) => {
    deliveryAddress.value = newAddress
    localStorage.setItem('deliveryAddress', JSON.stringify(newAddress))
  }

  const saveRecipient = (newRecipient: DeliveryRecipient) => {
    deliveryRecipient.value = newRecipient
    localStorage.setItem('deliveryRecipient', JSON.stringify(newRecipient))
  }

  const storedAddress = localStorage.getItem('deliveryAddress')
  if (storedAddress) {
    deliveryAddress.value = JSON.parse(storedAddress)
  }

  const storedRecipient = localStorage.getItem('deliveryRecipient')
  if (storedRecipient) {
    deliveryRecipient.value = JSON.parse(storedRecipient)
  }

  return {
    deliveryAddress,
    deliveryRecipient,
    saveAddress,
    saveRecipient
  }
})
