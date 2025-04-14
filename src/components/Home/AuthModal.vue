<template>
  <q-dialog :model-value="modelValue" @update:model-value="handleModalUpdate">
    <q-card class="auth-modal">
      <!-- Выбор действия -->
      <div v-if="currentStep === 'choice'" class="auth-choice">
        <q-btn unelevated class="auth-btn" color="black" @click="currentStep = 'login'">
          Login to your account →
        </q-btn>

        <div class="separator">or</div>
        <q-btn unelevated class="auth-btn" color="black" @click="currentStep = 'register'">
          Create new account →
        </q-btn>
      </div>

      <!-- Форма входа -->
      <div v-if="currentStep === 'login'" class="auth-form">
        <h2 class="modal-title">Login to your account</h2>

        <q-form @submit.prevent="handleLogin">
          <q-input
            v-model="loginForm.email"
            label="Email address"
            outlined
            class="auth-input"
            :rules="[(val) => !!val || 'Field is required']"
          />

          <q-input
            v-model="loginForm.password"
            label="Password"
            type="password"
            outlined
            class="auth-input"
            :rules="[(val) => !!val || 'Field is required']"
          />

          <div class="auth-buttons">
            <q-btn unelevated label="Back" color="grey-7" flat @click="currentStep = 'choice'" />
            <q-btn unelevated label="Login →" type="submit" color="black" class="auth-submit-btn" />
          </div>
        </q-form>
      </div>

      <!-- Форма регистрации -->
      <div v-if="currentStep === 'register'" class="auth-form">
        <h2 class="modal-title">Create your account</h2>

        <q-form @submit.prevent="handleRegister">
          <q-input
            v-model="registerForm.email"
            label="Email address"
            outlined
            class="auth-input"
            :rules="[(val) => !!val || 'Field is required']"
          />

          <q-input
            v-model="registerForm.password"
            label="Password"
            type="password"
            outlined
            class="auth-input"
            :rules="[(val) => !!val || 'Field is required']"
          />

          <q-input
            v-model="registerForm.passwordConfirm"
            label="Confirm Password"
            type="password"
            outlined
            class="auth-input"
            :rules="[(val) => !!val || 'Field is required']"
          />
          
          <div class="auth-buttons">
            <q-btn unelevated label="Back" color="grey-7" flat @click="currentStep = 'choice'" />
            <q-btn
              unelevated
              label="Create →"
              type="submit"
              color="black"
              class="auth-submit-btn"
            />
          </div>
        </q-form>
      </div>
    </q-card>
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
  password: '',
  passwordConfirm: ''
})

const handleModalUpdate = (value: boolean) => {
  emit('update:modelValue', value)
  if (!value) currentStep.value = 'choice'
}

const handleLogin = async () => {
  try {
    await authStore.login({
      email: loginForm.value.email,
      password: loginForm.value.password
    })
    handleModalUpdate(false)
    const redirect = router.currentRoute.value.query.redirect
    router.push(redirect?.toString() || '/account')
  } catch (error) {
    alert(error.message)
  } finally {
    loginForm.value.password = ''
  }
}

const handleRegister = async () => {
  try {
    if (registerForm.value.password !== registerForm.value.passwordConfirm) {
      throw new Error('Пароли не совпадают')
    }

    await authStore.register({
      email: registerForm.value.email,
      password: registerForm.value.password
    })

    handleModalUpdate(false)
    const redirect = router.currentRoute.value.query.redirect
    router.push(redirect?.toString() || '/account')
  } catch (error) {
    alert(error.message)
  } finally {
    registerForm.value.password = ''
    registerForm.value.passwordConfirm = ''
  }
}
</script>

<style>
.auth-modal {
  width: 400px;
  padding: 20px;
  border-radius: 25px;
}

.modal-title {
  font-size: 20px;
  margin: 0 0 20px;
  text-align: center;
}

.auth-choice {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.separator {
  text-align: center;
  margin: 10px 0;
  position: relative;
}

.separator::before,
.separator::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 45%;
  height: 1px;
  background: #ddd;
}

.separator::before {
  left: 0;
}
.separator::after {
  right: 0;
}

.auth-btn {
  padding: 12px;
  font-size: 16px;
  border-radius: 25px;
  width: 100%;
}

.auth-input .q-field__control {
  background-color: #f5f5f5;
  border-radius: 25px;
}

.auth-input .q-field__native {
  padding: 8px 16px;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.auth-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}

.auth-submit-btn {
  padding: 8px 24px;
  border-radius: 25px;
}
</style>
