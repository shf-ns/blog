<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import { Switch, Github, Email } from '@/components'
import { provide, ref, type Ref } from 'vue';

const isAlert: Ref<boolean> = ref(false)

const isSetting: Ref<boolean> = ref(false)

provide('showEmailAlert', () => {
  isAlert.value = true
})
</script>

<template>
  <div class="sider">
    <div class="sider-avatar">
      <img src="./assets/img/avatar.png" alt="头像">
    </div>
    <div class="link">
      <Github />
      <Email @change="isAlert = $event" />
    </div>
    <ul class="sider-menu">
      <li>
        <RouterLink to="/" class="menu-item">
          <div class="icon">
            <img src="./assets/img/home.png" alt="首页">
          </div>
          首页
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/projects" class="menu-item">
          <div class="icon">
            <img src="./assets/img/project.png" alt="GitHub项目">
          </div>
          项目
        </RouterLink>
      </li>
    </ul>
    <div class="switch-bottom">
      <p>主题:</p>
      <Switch />
    </div>
  </div>
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
        <div class="header-menu-item" @click="isSetting = !isSetting">
          <div class="img">
            <img src="./assets/img/setting.png" alt="设置">
          </div>
        </div>
      </li>
    </ul>
    <div class="setting" v-show="isSetting">
      <p>主题:</p>
      <Switch />
    </div>
  </div>
  <div class="main">
    <router-view></router-view>
  </div>
  <Transition name="fade">
    <div class="alert" v-show="isAlert" @click="isAlert = false">
      <div class="alert-content" @click.stop>
        <span class="close-btn" @click="isAlert = false">x</span>
        <p class="alert-text">邮箱：3104467468@qq.com</p>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.sider {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
  height: 100%;
  padding: 20px;
  background-color: var(--bg-secondary-color);
}

.sider-avatar {
  width: 100px;
  height: 100px;
  margin-top: 40px;
  border-radius: 50%;
}

.sider-avatar img {
  width: 100%;
  height: 100%;
}

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


.link {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 80px;
  margin-right: auto;
}

.sider-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: 50px;
}

.sider-menu li {
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  font-size: 18px;
  cursor: pointer;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
}

.sider-menu .icon {
  width: 30px;
  height: 30px;
}

.sider-menu .icon img {
  width: 100%;
  height: 100%;
}

.switch-bottom {
  display: flex;
  align-items: center;
  gap: 5px;
  margin: auto 0 15px auto;
}

.main {
  flex: 1;
  overflow-y: auto;
  background: var(--bg-primary-color);
}

.alert {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.alert-content {
  position: relative;
  width: 300px;
  height: 100px;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.alert-text {
  text-align: center;
  line-height: 76px;
}

.close-btn {
  position: absolute;
  top: 0;
  right: 10px;
  padding: 5px;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
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