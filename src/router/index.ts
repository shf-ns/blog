import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/Home.vue'
import Account from '@/components/Account.vue'
import Setting from '@/components/Setting.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/account',
      component: Account
    },
    {
      path: '/setting',
      component: Setting
    },
  ],
})

export default router
