<template>
  <div :class="$style.account_container">
    <div :class="$style.account_header">
      <h1>My Account</h1>
      <q-btn
        label="Sign Out"
        color="negative"
        @click="handleLogout"
        :class="$style.logout_btn"
        icon="logout"
        flat
      />
    </div>

    <div :class="$style.account_content">
      <div :class="$style.user_card">
        <div :class="$style.card_header">
          <h2 :class="$style.card_title">
            <!-- <q-icon name="person" size="sm" /> -->
            Profile Information
          </h2>
          <div :class="$style.actions">
            <q-toggle
              v-model="editMode"
              checked-icon="edit"
              color="black"
              unchecked-icon="lock"
              :label="editMode ? 'Editing' : 'Edit'"
            />
            <q-btn
              v-if="editMode"
              color="black"
              @click="saveChanges"
              label="Save Changes"
              :class="$style.save_btn"
              rounded
              unelevated
            />
          </div>
        </div>

        <div :class="$style.form_grid">
          <q-input
            v-model="userData.surname"
            :disable="!editMode"
            color="primary"
            label="Surname"
            rounded
            outlined
            :class="$style.form_input"
          />
          <q-input
            v-model="userData.name"
            :disable="!editMode"
            color="primary"
            label="Name"
            rounded
            outlined
            :class="$style.form_input"
          />
          <q-input
            v-model="userData.phone"
            :disable="!editMode"
            color="primary"
            label="Phone"
            rounded
            outlined
            :class="$style.form_input"
          />
          <q-input
            v-model="userData.email"
            :disable="!editMode"
            color="primary"
            label="Email"
            rounded
            outlined
            :class="$style.form_input"
          />
        </div>

        <div :class="$style.section_header">
          <h3 :class="$style.section_title">
            <!-- <q-icon name="home" size="sm" /> -->
            Addresses
          </h3>
          <q-btn
            v-if="editMode"
            color="black"
            label="Add Address"
            @click="addAddress"
            :class="$style.add_btn"
            icon="add"
            rounded
            outline
          />
        </div>

        <div :class="$style.addresses_grid">
          <div
            v-for="(address, index) in userData.address"
            :key="index"
            :class="[$style.address_card, editMode && $style.editable]"
          >
            <div :class="$style.address_header">
              <h4 :class="$style.address_title">Address {{ index + 1 }}</h4>
              <q-btn
                v-if="editMode && userData.address.length > 1"
                color="negative"
                label="Remove"
                @click="removeAddress(index)"
                :class="$style.remove_btn"
                icon="delete"
                flat
                dense
              />
            </div>
            <div :class="$style.address_form">
              <q-input
                v-model="address.street"
                :disable="!editMode"
                color="primary"
                label="Street"
                rounded
                outlined
                :class="$style.address_input"
              />
              <div :class="$style.address_row">
                <q-input
                  v-model="address.apartment"
                  :disable="!editMode"
                  color="primary"
                  label="Apartment"
                  type="number"
                  rounded
                  outlined
                  :class="$style.address_input_small"
                />
                <q-input
                  v-model="address.entrance"
                  :disable="!editMode"
                  color="primary"
                  label="Entrance"
                  type="number"
                  rounded
                  outlined
                  :class="$style.address_input_small"
                />
                <q-input
                  v-model="address.floor"
                  :disable="!editMode"
                  color="primary"
                  label="Floor"
                  type="number"
                  rounded
                  outlined
                  :class="$style.address_input_small"
                />
              </div>
            </div>
          </div>
        </div>
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
          apartment: 0,
          entrance: 0,
          floor: 0
        }
      ]
})

const addAddress = () => {
  userData.value.address.push({
    street: '',
    apartment: 0,
    entrance: 0,
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
  border-bottom: 1px solid var(--border-color);
}

.account_header h1 {
  font-family: 'Satoshi', sans-serif;
  font-weight: 900;
  font-size: 32px;
  color: var(--title-color);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
}

.logout_btn {
  font-weight: 700;
  letter-spacing: 0.5px;
}

.account_content {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.user_card {
  padding: 20px;
}

.card_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
  gap: 16px;
}

.card_title {
  font-family: 'Satoshi', sans-serif;
  font-size: 24px;
  font-weight: 900;
  color: var(--title-color);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.save_btn {
  font-weight: 700;
  padding: 8px 20px;
}

.form_grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 10px;
}

.form_input {
  font-size: 16px;
}

.section_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0 16px;
  flex-wrap: wrap;
  gap: 16px;
}

.section_title {
  font-family: 'Satoshi', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: var(--title-color);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.add_btn {
  font-weight: 500;
}

.addresses_grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.address_card {
  background: var(--light-background-color);
  border-radius: 12px;
  padding: 20px;
  transition: all 0.2s ease;
}

.address_card.editable {
  border: 1px dashed var(--primary-color);
  background: rgba(var(--primary-color-rgb), 0.05);
}

.address_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.address_title {
  font-family: 'Satoshi', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: var(--title-color);
  margin: 0;
}

.remove_btn {
  font-size: 13px;
}

.address_form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.address_row {
  display: flex;
  gap: 12px;
}

.address_input {
  width: 100%;
}

.address_input_small {
  flex: 1;
  min-width: 0;
}

@media (max-width: 768px) {
  .account_container {
    padding: 16px;
  }

  .user_card {
    padding: 24px 16px;
  }

  .form_grid {
    grid-template-columns: 1fr;
  }

  .addresses_grid {
    grid-template-columns: 1fr;
  }

  .address_row {
    flex-direction: column;
    gap: 16px;
  }

  .address_input_small {
    width: 100%;
  }
}
</style>
