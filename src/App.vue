<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import { Alert, Switch } from '@/components'
import { Sider } from '@/layout'
import { provide, ref, type Ref, onMounted, onUnmounted } from 'vue';

const isAlert: Ref<boolean> = ref(false)

provide('isAlert', isAlert)

const isSetting: Ref<boolean> = ref(false)

const handleClickOutside = (e: MouseEvent): void => {
  const target = e.target as HTMLElement;
  if (isSetting.value && !target.closest('.setting')) {
    isSetting.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
})

</script>

<template>
  <Sider />
  <div class="header">
    <div class="header-avatar">
      <img src="./assets/img/avatar.png" alt="头像">
    </div>
    <ul class="menu">
      <li>
        <RouterLink to="/" class="header-menu-item">
          <div class="img">
            <img src="./assets/img/home.png" alt="首页">
          </div>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/projects" class="header-menu-item">
          <div class="img">
            <img src="./assets/img/project.png" alt="GitHub项目">
          </div>
        </RouterLink>
      </li>
      <li>
        <div class="header-menu-item" @click.stop="isSetting = !isSetting">
          <div class="img">
            <img src="./assets/img/setting.png" alt="设置">
          </div>
        </div>
      </li>
    </ul>
    <Transition name="fade">
      <div class="setting" v-show="isSetting">
        <p>主题:</p>
        <Switch />
      </div>
    </Transition>
  </div>
  <div class="main">
    <router-view></router-view>
  </div>
  <Transition name="fade">
    <Alert />
  </Transition>
</template>

<style scoped>
.header {
  position: relative;
  position: fixed;
  top: 0;
  z-index: 1000;
  display: none;
  width: 100%;
  height: 80px;
  background-color: var(--bg-secondary-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.header-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.header-avatar img {
  width: 100%;
  height: 100%;
}

.header .menu {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}

.header-menu-item {
  cursor: pointer;
}

.header-menu-item .img {
  width: 30px;
  height: 30px;
}

.header-menu-item .img img {
  width: 100%;
  height: 100%;
}

.header .setting {
  position: absolute;
  top: 75px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 120px;
  height: 50px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: var(--bg-primary-color);
}

.header .setting::before {
  content: '';
  position: absolute;
  top: -5px;
  right: 19px;
  width: 10px;
  height: 10px;
  background-color: var(--bg-primary-color);
  transform: rotate(45deg);
}

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