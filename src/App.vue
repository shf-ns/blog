<script setup lang="ts" name="App">
import { ref } from 'vue'
import { RouterView, RouterLink } from 'vue-router';

</script>

<template>
  <div class="app">
    <!-- 侧边导航栏 -->
    <div class="sidebar">
      <!-- 用户信息 -->
      <div class="user-info">
        <div class="avatar">
          <img src="" alt="">
        </div>
        <div class="user-name">用户名</div>
        <!-- <div v-show="login" class="user-login">请先登录</div> -->
      </div>
      <!-- 导航栏 -->
      <nav>
        <ul>
          <li>
            <div>
              <img src="./assets/tubiao_shouye-.png" alt="">
            </div>
            <RouterLink to="home" class="item">首页</RouterLink>
          </li>
          <li>
            <div>
              <img src="./assets/zixun.png" alt="">
            </div>
            <span class="item">吐槽贴</span>
          </li>
          <li>
            <div>
              <img src="./assets/1shezhi-1.png" alt="">
            </div>
            <span class="item">设置</span>
          </li>
        </ul>
      </nav>
    </div>

    <!-- 展示区 -->
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  gap: 30px;
}

.sidebar {
  display: flex;
  flex-direction: column;
  width: 230px;
  height: 100vh;
  padding: 30px 20px;
  text-align: center;
  box-shadow: 0 4px 16.4px #0000001a;
  background: #f9fbfc;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 250px;
  margin-bottom: 50px;
}

.user-info .avatar {
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
  border: 1px solid #0000001a;
  border-radius: 50px;
}

.user-info .user-name,
.user-info .user-login {
  font-size: 20px;
}

nav {
  width: 100%;
  height: 100%;
}

nav ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

nav ul li {
  height: 100px;
  padding-top: 20px;
  border-radius: 10px;
}

nav ul li:hover {
  background-color: #d0d3d4;
}

nav ul li img {
  width: 30px;
}

nav ul li .item {
  margin-left: 5px;
  font-size: 20px;
}
</style>
