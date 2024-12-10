<template>
  <div :class="$style.delivery_wrap">
    <div :class="$style.delivery_address">
      <h1>Delivery address</h1>
      <p>Select the receiving address - we will show the date and cost of delivery</p>
      <ButtonDark text="To choose" style="width: 100%;"/>
    </div>
    <div :class="$style.delivery_recipient">
      <h1>Recipient of the order</h1>
      <input
        type="text"
        placeholder="Enter your surname"
        name="surname"
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
          title="Fast payment system"
          text="Payment trough the bank application connected to the SBP"
        />
        <PlaceholderItem
          title="Installment without overpayment"
          text="Installment is available for orders from 35$ to 2000$"
        />
        <PlaceholderItem title="New card online" text="We accept Visa, Mastercard and Mir" />
        <PlaceholderItem
          title="Payment In “Shares”"
          text="25% now - the rest in three payments every two weeks. Service fee is possibleP"
        />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import ButtonDark from '../Home/ButtonDark.vue'
import PlaceholderItem from './PlaceholderItem.vue'
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
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 10px;
}
</style>
