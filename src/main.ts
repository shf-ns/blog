import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { createWebHistory, createRouter } from "vue-router";
import { routes } from "vue-router/auto-routes";

import {i18n} from '@/locales/index'

const app = createApp(App)

app.use(createPinia())
app.use(
  createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
  }),
);
app.use(i18n)

app.mount('#app')
