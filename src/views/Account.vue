<template>
  <div :class="$style.account_container">
    <div :class="$style.account_header">
      <h1>Account</h1>
      <q-btn label="Sign Out" color="negative" @click="handleLogout" :class="$style.logout_btn" />
    </div>

    <div :class="$style.account_content">
      <div :class="$style.user_card">
        <h2 :class="$style.card_title">Profile Information</h2>
        <div :class="$style.info_row">
          <span :class="$style.info_label">Email:</span>
          <span :class="$style.info_value">{{ authStore.user?.email }}</span>
        </div>
        <div :class="$style.info_row" v-if="authStore.user?.phone">
          <span :class="$style.info_label">Phone:</span>
          <span :class="$style.info_value">{{ authStore.user.phone }}</span>
        </div>
      </div>
      <!-- 
      <div :class="$style.user_card"><AccountEmails /></div> -->
    </div>

    <div :class="$style.cart_card">
      <OrderHistory />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import OrderHistory from '@/components/Account/OrderHistory.vue'

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

@media (min-width: 1024px) {
  .account_container {
    margin: 50px 100px;
    padding: 40px 0;
  }

  .account_header h1 {
    font-size: 48px;
  }

  .user_card {
    margin-bottom: 0;
    padding: 32px;
  }

  .card_title {
    font-size: 36px;
    margin-bottom: 28px;
  }

  .info_row {
    margin: 20px 0;
    padding: 16px 0;
  }

  .info_label,
  .info_value {
    font-size: 18px;
  }
}
</style>
