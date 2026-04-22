<script setup lang="ts" name="Setting">
import { ref, onMounted } from 'vue'
import {useThemeStore, type ThemeMode}from '@/stores/theme'

const themeStore = useThemeStore()

// 主题模式
const selectTheme = ref<ThemeMode>(themeStore.themeMode)


// 监听主题变化
const themeChange = (mode: ThemeMode) => {
  selectTheme.value = mode
  themeStore.toggleTheme(mode)
}

// 初始化时同步主题状态
onMounted(() => {
  selectTheme.value = themeStore.themeMode
})

</script>

<template>
  <div class="box">
    <div class="theme">
      <span class="title">主题：</span>
      <label for="light" class="item">
        <input type="radio" id="light" style="display: none;" :checked="selectTheme === 'light'" @change="themeChange('light')">
        <span>浅色</span>
      </label>
      <label for="dark" class="item">
        <input type="radio" id="dark" style="display: none;" :checked="selectTheme === 'dark'" @change="themeChange('dark')">
        <span>深色</span>
      </label>
    </div>
    <div class="language">
      <span class="title">语言：</span>
      <label for="Chinese" class="item">
        <input type="radio" id="Chinese" style="display: none;">
        <span>简体中文</span>
      </label>
      <label for="English" class="item">
        <input type="radio" id="English" style="display: none;">
        <span>英文</span>
      </label>
    </div>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 500px;
  height: 55vh;
  margin: 100px 200px;
}

.theme,
.language {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.theme .title,
.language .title {
  font-size: 25px;
  font-weight: 600;
}

.theme .item,
.language .item {
  width: 90px;
  height: 40px;
  border: 1px solid;
  font-size: 18px;
  text-align: center;
  line-height: 40px;
  border: 1px solid var(--border-color);
  border-radius: 10px;
}

.theme .item:hover,
.language .item:hover {
  background-color: var(--card-bg);
  box-shadow: 0 10px 16.4px #d0d3d4;
}

label[class="item"]:checked {
  background-color: var(--primary-color);
  color: white;
}
</style>