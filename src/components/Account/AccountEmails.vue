<template>
    <div>
      <h2 style="font-family: 'IntegralCF'; font-size: 16px;">Subscribed Emails</h2>
      <ul>
        <li v-for="(email, index) in emails" :key="email">
          {{ index + 1 }}. {{ email }}
        </li>
      </ul>
    </div>
  </template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCookies } from 'vue3-cookies'

const { cookies } = useCookies()

const emails = ref<string[]>([])

const getEmailsFromCookies = () => {
  const emailCookie = cookies.get('emails')
  if (emailCookie) {
    emails.value = emailCookie.split(',')
  }
}

onMounted(() => {
  getEmailsFromCookies()
})
</script>
