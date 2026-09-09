<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import Switch from '@/components/Switch.vue'
</script>

<template>
  <div class="sider">
    <div class="sider-avatar">
      <img src="./assets/img/avatar.png" alt="头像">
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
          GitHub项目
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
</template>

<style scoped>
.sider {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
  height: 100%;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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

.sider-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: 120px;
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
  background: #f9fafb;
}
</style>