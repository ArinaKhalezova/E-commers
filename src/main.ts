import './assets/main.css'
import './assets/base.css'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar, type QuasarPluginOptions } from 'quasar'

import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import VueCookies from 'vue-cookies'

const app = createApp(App)

const quasarOptions: QuasarPluginOptions = {
  plugins: {}
}

app.use(createPinia())
app.use(router)

app.use(Quasar, quasarOptions)

app.use(VueScrollTo)

app.use(VueCookies)

async function prepareApp() {
  if (import.meta.env.MODE === 'development' || import.meta.env.MODE === 'test') {
    const { worker } = await import('./mocks/browser')
    return worker.start()
  }

  return Promise.resolve()
}

prepareApp().then(() => {
  app.mount('#app')
})
