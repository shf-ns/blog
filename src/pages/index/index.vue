<script setup lang="ts" name="Home">
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router';
import {useI18n} from 'vue-i18n'

const {t} = useI18n()

const data = localStorage.getItem('userInfo')
const dataObj = data ? JSON.parse(data) : null

const avatarUrl = ref<string | undefined>(undefined);

const name = ref<string>('用户名')

onMounted(() => {
  avatarUrl.value = dataObj?.avatar || undefined
  name.value = dataObj?.name
});

</script>

<template>
  <div class="home">
    <div class="avatar">
      <img v-if="avatarUrl" :src="avatarUrl" alt="">
    </div>
    <div class="info">
      <div class="name">{{t('home.name')}}：{{ name }}</div>
      <div class="introduction">
        <span>{{t('home.introduction')}}：</span>
        <textarea></textarea>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  justify-content: space-between;
  min-height: 55vh;
  width: 700px;
  margin: 155px auto;
  padding: 10px;
  border: 1px solid var(--border-color);
  border-radius: 20px;
}

.home:hover {
  box-shadow: 0 10px 16.4px var(--shadow-color);
}

.home .avatar {
  width: 300px;
  padding: 10px;
}

.home .avatar img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 380px;
  padding: 15px;
}

.info .name {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid var(--border-color);
  font-size: 20px;
}

.info .introduction span {
  font-size: 17px;
  margin-bottom: 20px;
}

.info .introduction {
  display: flex;
  flex-direction: column;
}

.info .introduction textarea {
  height: 270px;
  padding: 10px;
  resize: none;
  box-sizing: border-box;
  border: 1px solid var(--border-color);
  border-radius: 10px;
}

@media (max-width: 1024px) {
  .home {
    width: 600px;
  }

  .home .avatar {
    width: 250px;
  }

  .info {
    width: 340px;
  }
}
</style>