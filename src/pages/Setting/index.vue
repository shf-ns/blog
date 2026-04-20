<script setup lang="ts" name="Setting"></script>

<template>
  <div class="box">
    <div class="theme">
      <div class="title">
        <span>主题：</span>
        <img src="/src/assets/箭头 上.png" alt="">
      </div>
      <ul class="theme-choose">
        <li>浅色</li>
        <li>深色</li>
        <li>跟随浏览器</li>
      </ul>
    </div>
    <div class="language">
      <div class="title">
        <span>语言：</span>
        <img src="/src/assets/箭头 上.png" alt="">
      </div>
      <ul class="language-choose">
        <li>简体中文</li>
        <li>英文</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 700px;
  height: 55vh;
  margin: 100px 200px;
  text-align: center;
}

.theme .title,
.language .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  border: 1px solid #bcbdbe;
}

.theme .title span,
.language .title span {
  font-size: 30px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.467);
}

.theme .title img,
.language .title img {
  height: 25px;
}

.theme-choose li,
.language-choose li {
  height: 40px;
  border: 1px solid #e5e7e9;
  text-align: center;
  line-height: 40px;
}
</style>