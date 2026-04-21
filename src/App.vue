<script setup lang="ts" name="App">
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router';

const data = localStorage.getItem('userInfo')
const dataObj = data ? JSON.parse(data) : null

const avatarUrl = ref<string | undefined>(undefined);

const name = ref<string>('用户名')

onMounted(() => {
  avatarUrl.value = dataObj?.avatar || undefined
  name.value = dataObj?.name || '用户名'
});


</script>

<template>
  <div class="app">
    <!-- 侧边导航栏 -->
    <div class="sidebar">
      <!-- 用户信息 -->
      <RouterLink to="account" class="user-info">
        <div class="avatar">
          <img :src="avatarUrl || 'src/assets/morentouxiang.png'" alt="">
        </div>
        <div class="user-name">{{ name }}</div>
        <!-- <div v-show="login" class="user-login">请先登录</div> -->
      </RouterLink>
      <!-- 导航栏 -->
      <nav>
        <ul>
          <li>
            <RouterLink to="/">
              <div>
                <img src="./assets/tubiao_shouye-.png" alt="">
              </div>
              <span class="item">首页</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="setting">
              <div>
                <img src="./assets/1shezhi-1.png" alt="">
              </div>
              <span class="item">设置</span>
            </RouterLink>
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
  min-height: 100vh;
}

.sidebar {
  position: sticky;
  top: 0;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 230px;
  min-height: 100vh;
  padding: 30px 20px;
  text-align: center;
  box-shadow: 0 4px 16.4px #0000001a;
  background: var(--sidebar-bg);
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 250px;

}

.user-info .avatar {
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
  border: 1px solid #0000001a;
  border-radius: 50px;
  overflow: hidden;
}

.avatar img {
  width: 100%;
  height: 100%;
}

.avatar img[src=""] {
  display: none;
}

.user-info .user-name,
.user-info .user-login {
  font-size: 20px;
}

nav {
  width: 100%;
  flex: 1;
}

nav ul {
  width: 100%;
}

nav ul li a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;

}

nav ul li:hover {
  background-color: #afb2b32d;
  border-radius: 10px;
}

nav ul li img {
  width: 30px;
  height: 30px;
}

nav ul li .item {
  margin-left: 5px;
  font-size: 20px;
}

.content {
  flex: 1;
  min-height: 100vh;
  padding: 20px;
}

@media (max-width:1024px) {
  .sidebar {
    width: 200px;
  }

  .user-info .avatar {
    width: 90px;
    height: 90px;
  }

  .user-info .user-name,
  .user-info .user-login {
    font-size: 18px;
  }

  nav ul li img {
    width: 25px;
    height: 25px;
  }

  nav ul li .item {
    font-size: 18px;
  }

  .content {
    padding: 15px;
  }
}
</style>
