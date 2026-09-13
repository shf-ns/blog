<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Alert } from '@/components'
import { Sider, Header } from '@/layout'
import { provide, ref, type Ref } from 'vue';

const isAlert: Ref<boolean> = ref(false)

provide('isAlert', isAlert)

</script>

<template>
  <Sider />
  <Header />
  <div class="main">
    <router-view></router-view>
  </div>
  <Transition name="fade">
    <Alert />
  </Transition>
</template>

<style scoped>
.main {
  flex: 1;
  overflow-y: auto;
  background: var(--bg-primary-color);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .sider {
    width: 200px;
  }
}

@media (max-width: 768px) {
  .sider {
    display: none;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }
}
</style>