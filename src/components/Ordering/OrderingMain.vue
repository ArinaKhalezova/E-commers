<template>
  <div :class="$style.delivery_wrap">
    <OrderingHeader />

    <OrderingDelivery />
    <OrderingRecipient />

    <div :class="$style.delivery_payment">
      <h2>Payment method</h2>
      <div :class="$style.payment_items">
        <PlaceholderItem
          title="Payment in cash"
          text="Upon receipt of the goods, payment will be made in cash"
          :selected="orderingStore.paymentMethod === 'cash'"
          @click="orderingStore.paymentMethod = 'cash'"
        />
        <PlaceholderItem
          title="Payment by card or SBP"
          text="Upon receipt of the goods, payment will be made by card or quick payment system"
          :selected="orderingStore.paymentMethod === 'card'"
          @click="orderingStore.paymentMethod = 'card'"
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

      <q-dialog v-model="dialog" :backdrop-filter="backdropFilter">
        <div :class="$style.order_modal">
          <q-card-section :class="$style.modal_header"> Thanks for the order! </q-card-section>
          <q-card-section>
            You will be redirected to the order information page in {{ countdown }} seconds...
          </q-card-section>
        </div>
      </q-dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useOrderingStore } from '@/stores/orderingStore'
import { useOrderStore } from '@/stores/orderStore'
import { useCartStore } from '@/stores/cartStore'
import { useRouter } from 'vue-router'
import OrderingHeader from './OrderingHeader.vue'
import OrderingDelivery from './OrderingDelivery.vue'
import OrderingRecipient from './OrderingRecipient.vue'
import PlaceholderItem from './PlaceholderItem.vue'
import ButtonDark from '../Home/ButtonDark.vue'

const orderingStore = useOrderingStore()
const orderStore = useOrderStore()
const cartStore = useCartStore()
const router = useRouter()

const dialog = ref(false)
const countdown = ref(5)
const backdropFilter = ref('blur(5px)')

const validateForm = () => {
  const errors = []

  if (orderingStore.deliveryMethod === 'courier') {
    if (!orderingStore.deliveryAddress?.street) errors.push('Street is required')
    if (!orderingStore.deliveryAddress?.apartment) errors.push('Apartment is required')
  }

  if (!orderingStore.deliveryRecipient?.phone?.match(/^\+?[1-9]\d{9,14}$/)) {
    errors.push('Invalid phone number format')
  }

  if (!orderingStore.deliveryRecipient?.email?.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    errors.push('Invalid email format')
  }

  if (errors.length > 0) {
    throw new Error(errors.join('\n'))
  }
}

const handleOrderClick = async (event: Event) => {
  event.preventDefault()
  try {
    validateForm()

    const orderData = {
      recipient: orderingStore.deliveryRecipient,
      paymentMethod: orderingStore.paymentMethod,
      deliveryMethod: orderingStore.deliveryMethod,
      deliveryDate: orderingStore.deliveryDate,
      deliveryTime: orderingStore.deliveryTime,
      deliveryAddress:
        orderingStore.deliveryMethod === 'courier' ? orderingStore.deliveryAddress : null,
      city: orderingStore.deliveryCity,
      items: cartStore.products
    }

    await orderStore.saveOrder(orderData)
    cartStore.products = []

    dialog.value = true
    countdown.value = 5

    const intervalId = setInterval(() => {
      countdown.value--
      if (countdown.value <= 0) {
        clearInterval(intervalId)
        router.push('/successPage')
      }
    }, 1000)
  } catch (error) {
    console.error('Order error:', error)
  }
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

.order_modal {
  background-color: white;
  padding: 10px;
  font-family: 'Satoshi';
  border: 2px solid var(--placeholder-color) !important;
  border-radius: 20px !important;
}

.modal_header {
  font-size: 20px;
  line-height: 1;
  font-weight: 600;
}

@media (min-width: 1024px) {
  .delivery_date {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 20px;
  }
}
</style>
