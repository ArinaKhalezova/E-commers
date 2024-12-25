<template>
  <div :class="$style.delivery_wrap">
    <div :class="$style.delivery_address">
      <h1>Delivery address</h1>
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
              v-model="street"
            />
          </div>
          <div :class="$style.address_item_2">
            <input
              type="text"
              placeholder="Enter your apartment/office"
              name="apartament"
              required
              :class="$style.recipient_input"
              v-model="apartament"
            />
            <input
              type="text"
              placeholder="Enter your entrance"
              name="entrance"
              required
              :class="$style.recipient_input"
              v-model="entrance"
            />
          </div>
          <div :class="$style.address_item_3">
            <input
              type="text"
              placeholder="Enter your floor"
              name="floor"
              required
              :class="$style.recipient_input"
              v-model="floor"
            />
            <input
              type="text"
              placeholder="Enter your the apartment number"
              name="apartment number"
              required
              :class="$style.recipient_input"
              v-model="apartament"
            />
          </div>
          <div :class="$style.address_item_4">
            <input
              type="text"
              placeholder="Enter your comment"
              name="comment"
              required
              :class="$style.recipient_input"
              v-model="comment"
            />
          </div>
        </div>
        <div>
          <p>For example, where exactly to bring the order, the nearest address or landmark</p>
        </div>
        <h1>Delivery date and time</h1>
        <div :class="$style.delivery_date">
          <div class="q-pa-md">
            <q-input rounded outlined v-model="date" mask="date" :rules="['date']">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="date">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Save" color="black" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <q-select rounded outlined v-model="model" :options="options" />
        </div>
      </div>
    </div>
    <div :class="$style.delivery_recipient">
      <h1>Recipient of the order</h1>
      <input
        type="text"
        placeholder="Enter your surname"
        name="name"
        required
        :class="$style.recipient_input"
      />
      <input
        type="text"
        placeholder="Enter your name"
        name="name"
        required
        :class="$style.recipient_input"
      />
    </div>
    <div>
      <p>
        We will send a notification about the status of the order to the phone number and email you
        specified.
      </p>
      <p>The courier will contact you by phone to clarify the delivery time.</p>
      <input
        type="text"
        placeholder="Enter your phone"
        name="phone"
        required
        :class="$style.recipient_input"
      />
      <input
        type="text"
        placeholder="Enter your email"
        name="email"
        required
        :class="$style.recipient_input"
      />
    </div>
    <div>
      <p>
        Subscribe to our news and promotions. You will be among the first to learn about new
        discounts, promotions and sales
      </p>
    </div>
    <div :class="$style.delivery_payment">
      <h1>Payment method</h1>
      <div :class="$style.payment_items">
        <PlaceholderItem
          title="Payment in cash"
          text="Upon receipt of the goods, payment will be made in cash"
          :selected="selectedMethod === 'cash'"
          @click="selectedPaymentMethod('cash')"
        />
        <PlaceholderItem
          title="Payment by card or SBP"
          text="Upon receipt of the goods, payment will be made by card or quick payment system"
          :selected="selectedMethod === 'card'"
          @click="selectedPaymentMethod('card')"
        />
        <p>At the moment, payment is available only upon receipt of the order</p>
      </div>
    </div>
    <div>
      <ButtonDark
        link="#"
        text="Create an order"
        :class="$style.order_btn"
        @click="handleOrderClick"
      />

      <!-- Диалоговое окно -->
      <q-dialog v-model="dialog" :backdrop-filter="backdropFilter">
        <q-card>
          <q-card-section class="row items-center q-pb-none text-h6">
            Thanks for the order!
          </q-card-section>
          <q-card-section>
            You will be redirected to the order information page in {{ countdown }} seconds...
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOrderingStore } from '@/stores/OrderingStore'
import PlaceholderItem from './PlaceholderItem.vue'
import ButtonDark from '../Home/ButtonDark.vue'
import { ref } from 'vue'

const date = ref('2025/12/20')

const model = ref<string | null>('9:00 - 13:00')
const options = ['9:00 - 13:00', '11:00 - 15:00', '13:00 - 17:00', '15:00 - 19:00', '17:00 - 21:00']

const street = ref('')
const apartament = ref('')
const entrance = ref('')
const floor = ref('')
const comment = ref('')

const selectedMethod = ref<'cash' | 'card'>('cash')

const selectedPaymentMethod = (method: 'cash' | 'card') => {
  selectedMethod.value = method
}

const orderingStore = useOrderingStore()

const dialog = ref(false)
const backdropFilter = ref('blur(5px)')
const countdown = ref(10)
let intervalId: number | null = null

const handleOrderClick = (event: Event) => {
  const newAddress = {
    street: street.value,
    apartament: Number(apartament.value),
    entace: Number(entrance.value),
    floor: Number(floor.value),
    comment: comment.value
  }

  orderingStore.saveAddress(newAddress)

  console.log('Before adding address:', orderingStore.deliveryAddress)
  console.log('After adding address:', orderingStore.deliveryAddress)

  event.preventDefault()

  dialog.value = true

  console.log('Order button clicked')

  countdown.value = 10
  intervalId = setInterval(() => {
    countdown.value--

    if (countdown.value <= 0) {
      clearInterval(intervalId!)
      window.location.href = 'successPage'
    }
  }, 1000)
}
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
