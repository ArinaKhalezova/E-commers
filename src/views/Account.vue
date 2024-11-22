<template>
  <div :class="$style.account_container">
    <h1>Account</h1>
    <div :class="$style.account_items">
      <AccountEmails />
    </div>
  </div>
</template>

<script setup lang="ts">
import AccountEmails from '@/components/Account/AccountEmails.vue';

</script>

<style module>
.account_container {
  margin: 0 16px 50px;
}
.account_container h1 {
  font-size: 32px;
  display: flex;
  justify-content: left;
  margin: 6px 0 18px;
}
.account_items {
  background-color: var(--placeholder);
  padding: 20px;
  border-radius: 20px;
}
@media (min-width: 1024px) {
  .account_container {
    margin: 0 100px;
  }
  .account_items {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 40px;
  }
}
</style>
