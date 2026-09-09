<script setup lang="ts"></script>

<template>
  <div class="sider">
    <div class="sider-avatar">
      <img src="./assets/img/avatar.png" alt="头像">
    </div>
    <ul class="sider-menu">
      <li>
        <div class="icon">
          <img src="./assets/img/house.png" alt="首页">
        </div>
        首页
      </li>
      <li>
        <div class="icon">
          <img src="./assets/img/project.png" alt="GitHub项目">
        </div>
        GitHub项目
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sider {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 100%;
  padding: 20px 15px;
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
  width: 100%;
  margin-top: 120px;
}

.sider-menu li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;
  font-size: 18px;
}

.sider-menu .icon {
  width: 30px;
  height: 30px;
}

.sider-menu .icon img {
  width: 100%;
  height: 100%;
}
</style>
