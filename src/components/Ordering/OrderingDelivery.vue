<template>
  <div :class="$style.delivery_wrap">
    <div :class="$style.delivery_address">
      <h2>Delivery address</h2>
      <div v-if="orderingStore.deliveryMethod === 'pickup'">
        <p>Select the receiving address - we will show the date and cost of delivery</p>
        <ButtonDark text="To choose" style="width: 100%" />
      </div>
      <div v-else>
        <p>Select the delivery address and we'll show you the date and cost of delivery</p>

        <div v-if="userAddresses.length > 0" :class="$style.address_selector">
          <q-checkbox
            v-model="useCustomAddress"
            label="Different address"
            color="black"
            @update:model-value="handleCustomAddressToggle"
          />

          <q-select
            v-if="!useCustomAddress"
            v-model="selectedAddress"
            :options="userAddresses"
            option-label="street"
            label="Select the delivery address"
            emit-value
            map-options
            @update:model-value="handleAddressSelect"
            :class="$style.address_select"
          />
        </div>

        <div :class="$style.address_recipient">
          <div :class="$style.address_items">
            <div :class="$style.address_item_1">
              <input
                type="text"
                placeholder="Enter your street, house"
                name="street"
                required
                :class="$style.recipient_input"
                v-model="addressFields.street"
              />
            </div>
            <div :class="$style.address_item_2">
              <input
                type="number"
                placeholder="Enter your apartment/office"
                name="apartment"
                required
                :class="$style.recipient_input"
                v-model.number="addressFields.apartment"
              />
              <input
                type="number"
                placeholder="Enter your entrance"
                name="entrance"
                :class="$style.recipient_input"
                v-model.number="addressFields.entrance"
              />
            </div>
            <div :class="$style.address_item_3">
              <input
                type="number"
                placeholder="Enter your floor"
                name="floor"
                :class="$style.recipient_input"
                v-model.number="addressFields.floor"
              />
            </div>
          </div>
          <div>
            <p>For example, where exactly to bring the order, the nearest address or landmark</p>
          </div>

          <div :class="$style.delivery_comment">
            <h2>Delivery comment</h2>
            <q-input
              type="textarea"
              placeholder="Any special instructions for delivery"
              v-model="deliveryComment"
              outlined
              :class="$style.comment_input"
            />
          </div>

          <h2>Delivery date and time</h2>
          <div :class="$style.delivery_date">
            <div class="q-pa-md">
              <q-input
                rounded
                outlined
                v-model="orderingStore.deliveryDate"
                mask="date"
                :rules="['date']"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                      <q-date v-model="orderingStore.deliveryDate">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Save" color="black" flat />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <q-select
              rounded
              outlined
              v-model="orderingStore.deliveryTime"
              :options="timeOptions"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, computed } from 'vue'
import { useOrderingStore } from '@/stores/orderingStore'
import { useAuthStore } from '@/stores/auth'
import type { DeliveryAddress, DeliveryAdditionalInfo } from '@/stores/orderingStore'
import ButtonDark from '../Home/ButtonDark.vue'

const orderingStore = useOrderingStore()
const authStore = useAuthStore()

const timeOptions = [
  '9:00 - 13:00',
  '11:00 - 15:00',
  '13:00 - 17:00',
  '15:00 - 19:00',
  '17:00 - 21:00'
]

const selectedAddress = ref<DeliveryAddress | null>(null)
const useCustomAddress = ref(false)

const deliveryComment = computed({
  get: () => orderingStore.deliveryAdditionalInfo?.comment || '',
  set: (value) => {
    orderingStore.deliveryAdditionalInfo = {
      ...orderingStore.deliveryAdditionalInfo,
      comment: value
    }
  }
})

const userAddresses = computed(() => {
  return (
    authStore.user?.address?.map((addr) => ({
      street: addr.street || '',
      apartment: addr.apartment || 0,
      entrance: addr.entrance || 0,
      floor: addr.floor || 0
    })) || []
  )
})

const handleAddressSelect = (address: DeliveryAddress) => {
  addressFields.value = {
    street: address.street,
    apartment: address.apartment,
    entrance: address.entrance,
    floor: address.floor
  }
  orderingStore.deliveryAddress = {
    ...addressFields.value
  }
}

const handleCustomAddressToggle = (value: boolean) => {
  if (value) {
    addressFields.value = {
      street: '',
      apartment: 0,
      entrance: 0,
      floor: 0
    }
    orderingStore.deliveryAddress = null
  } else {
    if (userAddresses.value.length > 0) {
      selectedAddress.value = userAddresses.value[0]
      handleAddressSelect(userAddresses.value[0])
    }
  }
}

const addressFields = ref({
  street: '',
  apartment: 0,
  entrance: 0,
  floor: 0
})

watch(
  [addressFields, () => orderingStore.deliveryAdditionalInfo],
  ([newAddress, newAdditionalInfo]) => {
    if (orderingStore.deliveryMethod === 'courier') {
      orderingStore.saveAddress({
        street: newAddress.street,
        apartment: newAddress.apartment,
        entrance: newAddress.entrance,
        floor: newAddress.floor
      })
      if (newAdditionalInfo) {
        orderingStore.saveAdditionalInfo(newAdditionalInfo)
      }
    }
  },
  { deep: true }
)

onMounted(() => {
  if (userAddresses.value.length > 0) {
    selectedAddress.value = userAddresses.value[0]
    handleAddressSelect(userAddresses.value[0])
  }

  if (!orderingStore.deliveryMethod) {
    orderingStore.deliveryMethod = 'pickup'
  }
})
</script>

<style module>
.delivery_wrap {
  margin: 20px 0;
  border: 1px solid var(--placeholder-color);
  border-radius: 20px;
  padding: 0px 20px 20px;
}
.delivery_wrap p {
  margin-bottom: 8px;
  font-family: 'Satoshi';
  font-size: 14px;
  color: var(--subtitle-color);
}

.delivery_wrap h2 {
  font-size: 20px;
}
.address_selector {
  margin-bottom: 20px;
}
.address_select {
  margin-top: 10px;
}
.address_items {
  display: flex;
  flex-direction: column;
}
.address_item_2,
.address_item_3 {
  display: flex;
  justify-content: space-between;
}
.delivery_date {
  display: grid;
  grid-template-rows: 1fr 1fr;
}
.delivery_date > * {
  padding: 0;
}
.delivery_comment {
  margin: 20px 0;
}
.comment_input {
  margin-top: 10px;
}
.recipient_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.recipient_input {
  width: 100%;
  height: 48px;
  border: 1px solid var(--placeholder-color);
  border-radius: 20px;
  padding: 20px;
  outline: none;
  margin-bottom: 10px;
  font-family: 'Satoshi';
  font-size: 14px;
}
.payment_items {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
}

.order_btn {
  margin-top: 16px;
  width: auto;
}

@media (min-width: 1024px) {
  .delivery_date {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 20px;
  }
}
</style>
