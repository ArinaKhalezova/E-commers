<template>
  <div :class="$style.delivery_wrap">
    <div :class="$style.delivery_recipient">
      <div :class="$style.recipient_header">
        <h2>Recipient of the order</h2>
        <q-checkbox
          v-model="profileMode"
          label="Use data from my profile"
          color="black"
          @click="useProfileData"
        />
      </div>
      <input
        type="text"
        placeholder="Enter your surname"
        name="surname"
        required
        :class="$style.recipient_input"
        v-model="recipient.surname"
      />
      <input
        type="text"
        placeholder="Enter your name"
        name="name"
        required
        :class="$style.recipient_input"
        v-model="recipient.name"
      />
    </div>
    <div>
      <p>
        We will send a notification about the status of the order to the phone number and email you
        specified.
      </p>
      <p>The courier will contact you by phone to clarify the delivery time.</p>
      <input
        type="tel"
        placeholder="Enter your phone"
        name="phone"
        required
        :class="$style.recipient_input"
        v-model="recipient.phone"
      />
      <input
        type="email"
        placeholder="Enter your email"
        name="email"
        required
        :class="$style.recipient_input"
        v-model="recipient.email"
      />
    </div>
    <div>
      <p>
        Subscribe to our news and promotions. You will be among the first to learn about new
        discounts, promotions and sales
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useOrderingStore } from '@/stores/orderingStore'

const authStore = useAuthStore()
const orderingStore = useOrderingStore()

const profileMode = ref(false)

const recipient = ref({
  surname: orderingStore.deliveryRecipient?.surname || '',
  name: orderingStore.deliveryRecipient?.name || '',
  phone: orderingStore.deliveryRecipient?.phone || '',
  email: orderingStore.deliveryRecipient?.email || ''
})

watch(
  recipient,
  (newValue) => {
    orderingStore.saveRecipient({
      surname: newValue.surname,
      name: newValue.name,
      phone: newValue.phone,
      email: newValue.email
    })
  },
  { deep: true }
)

const useProfileData = () => {
  if (recipient.value.surname === authStore.user?.surname) {
    recipient.value.surname = ''
    recipient.value.name = ''
    recipient.value.phone = ''
    recipient.value.email = ''
    profileMode.value = false
  } else {
    recipient.value.surname = authStore.user?.surname || ''
    recipient.value.name = authStore.user?.name || ''
    recipient.value.phone = authStore.user?.phone || ''
    recipient.value.email = authStore.user?.email || ''

    profileMode.value = true
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
.delivery_wrap h2 {
  font-size: 20px;
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
