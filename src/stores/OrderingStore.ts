import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface DeliveryAddress {
  street: string
  apartment: number
  entrance: number
  floor: number
}

export interface DeliveryRecipient {
  surname: string
  name: string
  phone: string
  email: string
}

export interface DeliveryAdditionalInfo {
  comment: string
}

export const useOrderingStore = defineStore('orderingStore', () => {
  // Delivery method
  const deliveryMethod = ref<'pickup' | 'courier'>('pickup')
  const deliveryCity = ref('Samara')

  // Delivery details
  const deliveryAddress = ref<DeliveryAddress | null>(null)
  const deliveryRecipient = ref<DeliveryRecipient | null>(null)
  const deliveryAdditionalInfo = ref<DeliveryAdditionalInfo>({ comment: '' })
  const deliveryDate = ref('')
  const deliveryTime = ref('9:00 - 13:00')

  // Payment method
  const paymentMethod = ref<'cash' | 'card'>('cash')

  const saveAddress = (newAddress: DeliveryAddress) => {
    deliveryAddress.value = newAddress
    localStorage.setItem('deliveryAddress', JSON.stringify(newAddress))
  }

  const saveRecipient = (newRecipient: DeliveryRecipient) => {
    deliveryRecipient.value = newRecipient
    localStorage.setItem('deliveryRecipient', JSON.stringify(newRecipient))
  }

  const saveAdditionalInfo = (newAdditionalInfo: DeliveryAdditionalInfo) => {
    deliveryAdditionalInfo.value = newAdditionalInfo
    localStorage.setItem('deliveryAdditionalInfo', JSON.stringify(newAdditionalInfo))
  }

  const loadStoredData = () => {
    const storedAddress = localStorage.getItem('deliveryAddress')
    if (storedAddress) {
      deliveryAddress.value = JSON.parse(storedAddress)
    }

    const storedRecipient = localStorage.getItem('deliveryRecipient')
    if (storedRecipient) {
      deliveryRecipient.value = JSON.parse(storedRecipient)
    }

    const storedAdditionalInfo = localStorage.getItem('deliveryAdditionalInfo')
    if (storedAdditionalInfo) {
      deliveryAdditionalInfo.value = JSON.parse(storedAdditionalInfo)
    }
  }

  loadStoredData()

  return {
    deliveryMethod,
    deliveryCity,
    deliveryAddress,
    deliveryRecipient,
    deliveryAdditionalInfo,
    deliveryDate,
    deliveryTime,
    paymentMethod,
    saveAddress,
    saveRecipient,
    saveAdditionalInfo,
    loadStoredData
  }
})
