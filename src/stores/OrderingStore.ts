import { defineStore } from 'pinia'
import { ref, onMounted, onUnmounted } from 'vue'

interface DeliveryAddress {
  street: string
  apartament: number
  entace: number
  floor: number
  comment: string
}

export const useOrderingStore = defineStore('orderingStore', () => {
  // Один адрес доставки
  const deliveryAddress = ref<DeliveryAddress | null>(null)

  // Переменные для ввода адреса
  const street = ref('')
  const apartament = ref<number | null>(null)
  const entace = ref<number | null>(null)
  const floor = ref<number | null>(null)
  const comment = ref('')

  // Функция для сохранения состояния в localStorage
  const saveState = () => {
    localStorage.setItem('orderingStore', JSON.stringify(deliveryAddress.value));
  }

  // Функция для загрузки состояния из localStorage
  const loadState = () => {
    const savedState = localStorage.getItem('orderingStore');
    if (savedState) {
      deliveryAddress.value = JSON.parse(savedState);
    }
  }

  // Сохраняем состояние при изменении
  onMounted(() => {
    loadState(); // Загружаем состояние при монтировании
    window.addEventListener('beforeunload', saveState); // Сохраняем состояние перед выходом
  });

  onUnmounted(() => {
    saveState(); // Сохраняем состояние при размонтировании
    window.removeEventListener('beforeunload', saveState); // Убираем обработчик
  });

  // Функция для сохранения адреса
  const saveAddress = () => {
    if (street.value) {
      const newAddress: DeliveryAddress = {
        street: street.value,
        apartament: apartament.value || 0,
        entace: entace.value || 0,
        floor: floor.value || 0,
        comment: comment.value,
      }

      // Устанавливаем новый адрес
      deliveryAddress.value = newAddress

      // Очищаем поля формы
      street.value = ''
      apartament.value = null
      entace.value = null
      floor.value = null
      comment.value = ''

      // Сохраняем состояние в localStorage
      saveState()
    }
  }

  return {
    street,
    apartament,
    entace,
    floor,
    comment,
    deliveryAddress,
    saveAddress,
  };
})