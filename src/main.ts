import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Quasar, type QuasarPluginOptions } from 'quasar';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';

// Import Quasar css
import 'quasar/dist/quasar.css'

import App from './App.vue';
import router from './router';

const app = createApp(App);

const quasarOptions: QuasarPluginOptions = {
  plugins: {}, // import Quasar plugins and add here
};

app.use(createPinia());
app.use(router);

app.use(Quasar, quasarOptions);

app.mount('#app');