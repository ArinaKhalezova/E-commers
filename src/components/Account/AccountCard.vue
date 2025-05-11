<template>
  <div>
    <div :class="$style.account_header">
      <h1>Account</h1>
      <q-btn label="Sign Out" color="negative" @click="handleLogout" :class="$style.logout_btn" />
    </div>

    <div :class="$style.account_content">
      <div :class="$style.user_card">
        <div :class="$style.user_card_header">
          <h2 :class="$style.card_title">Profile Information</h2>
          <div :class="$style.user_card_header">
            <q-toggle
              v-model="editMode"
              checked-icon="edit"
              color="green"
              unchecked-icon="clear"
              label="Edit"
            />
            <q-btn v-if="editMode" color="green" @click="saveChanges" label="Save" />
          </div>
        </div>
        <div>
          <q-input
            v-model="userData.surname"
            :disable="!editMode"
            color="black"
            label="Surname"
          ></q-input>
          <q-input
            v-model="userData.name"
            :disable="!editMode"
            color="black"
            label="Name"
          ></q-input>
          <q-input
            v-model="userData.phone"
            :disable="!editMode"
            color="black"
            label="Phone"
          ></q-input>
          <q-input
            v-model="userData.email"
            :disable="!editMode"
            color="black"
            label="Email"
          ></q-input>
        </div>

        <h3>Addresses</h3>
        <div v-for="(address, index) in userData.address" :key="index" :class="$style.address_card">
          <p>Address {{ index + 1 }}</p>
          <q-input
            v-model="address.street"
            :disable="!editMode"
            color="black"
            label="Street"
          ></q-input>
          <q-input
            v-model="address.apartament"
            :disable="!editMode"
            color="black"
            label="Apartment"
            type="number"
          ></q-input>
          <q-input
            v-model="address.entace"
            :disable="!editMode"
            color="black"
            label="Entrance"
            type="number"
          ></q-input>
          <q-input
            v-model="address.floor"
            :disable="!editMode"
            color="black"
            label="Floor"
            type="number"
          ></q-input>

          <q-btn
            v-if="editMode && userData.address.length > 1"
            color="negative"
            label="Remove"
            @click="removeAddress(index)"
            :class="$style.remove_btn"
          />
        </div>

        <q-btn
          v-if="editMode"
          color="primary"
          label="Add Address"
          @click="addAddress"
          :class="$style.add_btn"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()
const editMode = ref(false)

const userData = ref({
  surname: authStore.user?.surname || '',
  name: authStore.user?.name || '',
  phone: authStore.user?.phone || '',
  email: authStore.user?.email || '',
  address: authStore.user?.address
    ? [...authStore.user.address]
    : [
        {
          street: '',
          apartament: 0,
          entace: 0,
          floor: 0
        }
      ]
})

const addAddress = () => {
  userData.value.address.push({
    street: '',
    apartament: 0,
    entace: 0,
    floor: 0
  })
}

const removeAddress = (index: number) => {
  userData.value.address.splice(index, 1)
}

const saveChanges = async () => {
  try {
    await authStore.editUserAccount(userData.value)
    editMode.value = false
  } catch (error) {
    console.error('Failed to update user:', error)
  }
}

const handleLogout = () => {
  authStore.logout()
  router.push('/')
}
</script>

<style module>
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

.user_card_header {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
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

.add_btn {
  margin-top: 16px;
}

.remove_btn {
  margin-top: 10px;
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
