import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { createWebHistory, createRouter } from "vue-router";
import { routes } from "vue-router/auto-routes";

const app = createApp(App)

app.use(createPinia())
app.use(
  createRouter({
    history: createWebHistory(),
    routes: routes,
  }),
);

app.mount('#app')
