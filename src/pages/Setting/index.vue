<script setup lang="ts" name="Setting">
import { ref } from 'vue'


</script>

<template>
  <div class="box">
    <div class="theme">
      <span class="title">主题：</span>
      <label for="light" class="item">
        <input type="radio" id="light" style="display: none;">
        <span>浅色</span>
      </label>
      <label for="dark" class="item">
        <input type="radio" id="dark" style="display: none;">
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
  max-width: 13.3333rem;
  height: 55vh;
  margin: 2.6667rem 5.3333rem;
}

.theme,
.language {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.theme .title,
.language .title {
  font-size: .6667rem;
  font-weight: 600;
}

.theme .item,
.language .item {
  width: 2.4rem;
  height: 1.0667rem;
  border: .0267rem solid;
  font-size: .48rem;
  text-align: center;
  line-height: 1.0667rem;
  border: .0267rem solid rgb(166, 166, 166);
  border-radius: .2667rem;
}

.theme .item:hover,
.language .item:hover {
  box-shadow: 0 .2667rem .4373rem #d0d3d4;
}
</style>