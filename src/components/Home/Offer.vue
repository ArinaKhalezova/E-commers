<template>
  <div :class="$style.offer_wrap">
    <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
    <form action="" @submit="handleSubmit">
      <div :class="$style.offer_input">
        <input
          type="text"
          placeholder="Enter your email address"
          name="mail"
          required
          @blur="isEmailTouched = true"
          :class="$style.container"
          v-model="email"
        />
      </div>
      <div :class="$style.offer_input">
        <input
          type="submit"
          value="Subscribe to Newsletter"
          :class="$style.container"
          @click="getCookie"
        />
      </div>
      <div v-if="showSuccessPopup" style="color: lightgreen; margin-top: 10px">
        Успешно! Вы подписаны на рассылку.
      </div>
      <div v-if="showErrorPopup" style="color: lightcoral; margin-top: 10px">
        Ошибка! Пожалуйста, проверьте правильность введенного email.
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCookies } from 'vue3-cookies'

const { cookies } = useCookies()

const emailCheckRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const email = ref<string>('')
const isEmailValid = computed(() => {
  return emailCheckRegex.test(email.value || '')
})

const isEmailTouched = ref(false)

const showSuccessPopup = ref(false)
const showErrorPopup = ref(false)

const handleSubmit = (event: Event) => {
  event.preventDefault()
  isEmailTouched.value = true

  if (isEmailValid.value) {
    showSuccessPopup.value = true
    showErrorPopup.value = false
    setEmailCookies(email.value)
  } else {
    showSuccessPopup.value = false
    showErrorPopup.value = true
  }
}

const setEmailCookies = (emailValue: string) => {
  const existingEmails = cookies.get('emails') || ''
  const newEmails = existingEmails ? `${existingEmails},${emailValue}` : emailValue
  cookies.set('emails', newEmails, { expires: 7 })
}

const getCookie = () => {
  const emailCookie = cookies.get('emails')
  if (emailCookie) {
    console.log(emailCookie)
  } else {
    console.log('No email cookie found')
  }
}
</script>

<style module>
.offer_wrap {
  background-color: var(--dark-background-color);
  border-radius: 20px;
  margin: 0 0px 50px 0px;
  padding: 32px 24px;
}

.offer_wrap h1 {
  font-family: 'IntegralCF';
  font-size: 32px;
  line-height: 1.2;
  color: var(--text-on-dark-button-color);
  font-weight: 700;
  padding-bottom: 32px;
}

.offer_input {
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
}

.container {
  font-family: 'Satoshi';
  border-radius: 20px;
  width: 100vmax;
  padding: 11px 48px;
  background-color: var(--base-background-color);
  outline: none;
}

@media (min-width: 1024px) {
  .offer_wrap {
    max-height: 200px;
    display: flex;
    justify-content: space-between;
    padding: 43px 64px;
    align-items: center;
    margin: 80px 100px -100px;
    position: relative;
  }

  .offer_wrap h1 {
    font-size: 40px;
  }

  .offer_wrap form {
    width: 50%;
    padding: 0 100px;
  }

  .container {
    width: 100%;
  }
}
</style>
