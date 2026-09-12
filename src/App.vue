<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import { Switch, Github, Email } from '@/components'
import { ref, type Ref } from 'vue';

const showAlert: Ref<boolean> = ref(false)
</script>

<template>
  <div class="sider">
    <div class="sider-avatar">
      <img src="./assets/img/avatar.png" alt="头像">
    </div>
    <div class="link">
      <Github />
      <Email @change="showAlert = $event" />
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
  <div class="main">
    <router-view></router-view>
  </div>
  <Transition name="fade">
    <div class="alert" v-show="showAlert" @click="showAlert = false">
      <div class="alert-content" @click.stop>
        <span class="close-btn" @click="showAlert = false">x</span>
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
  background: #f9fafb;
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
}
</style>