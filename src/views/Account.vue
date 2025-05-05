<template>
  <div :class="$style.account_container">
    <div :class="$style.cart_card">
      <AccountCard />
      <OrderHistory />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import OrderHistory from '@/components/Account/OrderHistory.vue'
import AccountCard from '@/components/Account/AccountCard.vue'
const authStore = useAuthStore()
const router = useRouter()

const handleLogout = () => {
  authStore.logout()
  router.push('/')
}
</script>

<style module>
.account_container {
  font-family: 'Satoshi';
  margin: 50px 16px;
  padding: 27px 0;
}

.account_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 28px;
  padding: 0 24px;
}

.account_header h1 {
  font-family: 'IntegralCF';
  font-weight: 900;
  font-size: 32px;
  color: var(--title-color);
  margin: 0;
}

.user_card {
  background-color: var(--light-background-color);
  border-radius: 20px;
  padding: 24px;
  margin: 20px 0;
}
.cart_card {
  border-radius: 20px;
  padding: 24px;
  margin: 20px 0;
}

.card_title {
  font-size: 24px;
  color: var(--title-color);
  margin: 0 0 20px;
  font-weight: 700;
}

.info_row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
  padding: 12px 0;
  border-bottom: 1px solid var(--border-color);
}

.info_label {
  font-size: 16px;
  color: var(--subtitle-color);
  font-weight: 500;
}

.info_value {
  font-size: 16px;
  color: var(--title-color);
  font-weight: 700;
}

.logout_btn {
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 700;
  text-transform: uppercase;
}

.account_content {
  padding: 0 24px;
}


</style>
