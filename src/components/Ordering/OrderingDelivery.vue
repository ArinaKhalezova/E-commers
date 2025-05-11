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

        <div :class="$style.address_recipient">
          <div :class="$style.address_items">
            <div :class="$style.address_item_1">
              <input
                type="text"
                placeholder="Enter your street, house"
                name="street"
                required
                :class="$style.recipient_input"
                v-model="address.street"
              />
            </div>
            <div :class="$style.address_item_2">
              <input
                type="number"
                placeholder="Enter your apartment/office"
                name="apartment"
                required
                :class="$style.recipient_input"
                v-model.number="address.apartment"
              />
              <input
                type="number"
                placeholder="Enter your entrance"
                name="entrance"
                :class="$style.recipient_input"
                v-model.number="address.entrance"
              />
            </div>
            <div :class="$style.address_item_3">
              <input
                type="number"
                placeholder="Enter your floor"
                name="floor"
                :class="$style.recipient_input"
                v-model.number="address.floor"
              />
              <input
                type="text"
                placeholder="Enter your comment"
                name="comment"
                :class="$style.recipient_input"
                v-model="address.comment"
              />
            </div>
          </div>
          <div>
            <p>For example, where exactly to bring the order, the nearest address or landmark</p>
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
import { ref, watch, onMounted } from 'vue'
import { useOrderingStore } from '@/stores/OrderingStore'
import ButtonDark from '../Home/ButtonDark.vue'

const orderingStore = useOrderingStore()

const timeOptions = [
  '9:00 - 13:00',
  '11:00 - 15:00',
  '13:00 - 17:00',
  '15:00 - 19:00',
  '17:00 - 21:00'
]

const address = ref({
  street: orderingStore.deliveryAddress?.street || '',
  apartment: orderingStore.deliveryAddress?.apartment || null,
  entrance: orderingStore.deliveryAddress?.entrance || null,
  floor: orderingStore.deliveryAddress?.floor || null,
  comment: orderingStore.deliveryAddress?.comment || ''
})

watch(
  address,
  (newValue) => {
    if (orderingStore.deliveryMethod === 'courier') {
      orderingStore.saveAddress({
        street: newValue.street,
        apartment: Number(newValue.apartment),
        entrance: Number(newValue.entrance),
        floor: Number(newValue.floor),
        comment: newValue.comment
      })
    }
  },
  { deep: true }
)

onMounted(() => {
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
