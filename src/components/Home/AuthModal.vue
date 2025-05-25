<template>
  <q-dialog :model-value="modelValue" @update:model-value="handleModalUpdate">
    <div :class="$style.auth_modal">
      <div v-if="currentStep === 'choice'" :class="$style.auth_choice">
        <q-btn
          unelevated
          :class="$style.auth_btn"
          outline
          color="white"
          text-color="black"
          @click="currentStep = 'login'"
        >
          Login to your account →
        </q-btn>

        <q-btn unelevated :class="$style.auth_btn" color="black" @click="currentStep = 'register'">
          Create new account →
        </q-btn>
      </div>

      <!-- Шаг 2: Форма входа -->
      <div v-if="currentStep === 'login'" class="auth-form">
        <h2 :class="$style.modal_title">Login to your account</h2>

        <q-form @submit.prevent="handleLogin">
          <q-input
            v-model="loginForm.email"
            label="Email address"
            outlined
            :class="$style.auth_input"
            :rules="[(val) => !!val || 'Field is required']"
          />

          <q-input
            v-model="loginForm.password"
            label="Password"
            type="password"
            outlined
            :class="$style.auth_input"
            :rules="[(val) => !!val || 'Field is required']"
          />

          <div :class="$style.auth_buttons">
            <q-btn unelevated label="Back" color="grey-7" flat @click="currentStep = 'choice'" />
            <q-btn
              unelevated
              label="Login →"
              type="submit"
              color="black"
              :class="$style.auth_submit_btn"
            />
          </div>
        </q-form>
      </div>

      <!-- Шаг 3: Форма регистрации -->
      <div v-if="currentStep === 'register'" class="auth-form">
        <h2 :class="$style.modal_title">Create your account</h2>

        <q-form @submit.prevent="handleRegister">
          <q-input
            v-model="registerForm.email"
            label="Email address"
            outlined
            :class="$style.auth_input"
            :rules="[(val) => !!val || 'Field is required']"
          />

          <q-input
            v-model="registerForm.phone"
            label="Phone number"
            outlined
            :class="$style.auth_input"
            :rules="[(val) => !!val || 'Field is required']"
          />

          <q-input
            v-model="registerForm.password"
            label="Password"
            type="password"
            outlined
            :class="$style.auth_input"
            :rules="[(val) => !!val || 'Field is required']"
          />

          <q-input
            v-model="registerForm.passwordConfirm"
            label="Confirm Password"
            type="password"
            outlined
            :class="$style.auth_input"
            :rules="[(val) => !!val || 'Field is required']"
          />

          <div :class="$style.auth_buttons">
            <q-btn unelevated label="Back" color="grey-7" flat @click="currentStep = 'choice'" />
            <q-btn
              unelevated
              label="Create →"
              type="submit"
              color="black"
              :class="$style.auth_submit_btn"
            />
          </div>
        </q-form>
      </div>
    </div>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const props = defineProps({
  modelValue: Boolean
})
const emit = defineEmits(['update:modelValue'])

const authStore = useAuthStore()
const router = useRouter()
const currentStep = ref<'choice' | 'login' | 'register'>('choice')

const loginForm = ref({
  email: '',
  password: ''
})

const registerForm = ref({
  email: '',
  phone: '',
  password: '',
  passwordConfirm: ''
})

const handleModalUpdate = (value: boolean) => {
  emit('update:modelValue', value)
  if (!value) currentStep.value = 'choice'
}

const handleLogin = async () => {
  try {
    if (!loginForm.value.email || !loginForm.value.password) {
      throw new Error('Заполните все поля')
    }

    await authStore.login({
      email: loginForm.value.email,
      password: loginForm.value.password
    })
    handleModalUpdate(false)
    const redirect = router.currentRoute.value.query.redirect
    router.push(redirect?.toString() || '/account')
  } catch (error) {
    alert(error.message)
    console.error('Ошибка входа:', error)
  } finally {
    loginForm.value.password = ''
  }
}

const handleRegister = async () => {
  try {
    if (!registerForm.value.email.includes('@')) {
      throw new Error('Некорректный email')
    }
    if (registerForm.value.password.length < 6) {
      throw new Error('Пароль должен содержать минимум 6 символов')
    }
    if (registerForm.value.password !== registerForm.value.passwordConfirm) {
      throw new Error('Пароли не совпадают')
    }

    await authStore.register({
      email: registerForm.value.email,
      phone: registerForm.value.phone,
      password: registerForm.value.password
    })

    handleModalUpdate(false)
    const redirect = router.currentRoute.value.query.redirect
    router.push(redirect?.toString() || '/account')
  } catch (error) {
    alert(error.message)
    console.error('Ошибка регистрации:', error)
  } finally {
    registerForm.value.password = ''
    registerForm.value.passwordConfirm = ''
  }
}
</script>

<style module>
.auth_modal {
  background-color: white;
  min-width: 505px;
  padding: 25px;
  border: 1px solid none;
  border-radius: 25px;
}

.modal_title {
  font-size: 20px;
  margin: 0 0 20px;
  font-weight: 700;
  text-align: left;
}

.auth_choice {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.auth_btn {
  padding: 12px;
  font-size: 16px;
  border-radius: 25px;
  width: 100%;
}

.auth-input .q-field__control {
  background-color: #f5f5f5;
  border-radius: 25px;
}

.auth_input .q-field__native {
  padding: 8px 16px;
}

.auth_form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.auth_buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}

.auth_submit_btn {
  padding: 8px 24px;
  border-radius: 25px;
}
</style>
