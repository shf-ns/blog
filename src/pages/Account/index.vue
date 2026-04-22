<script setup lang="ts" name="Account">
import { ref, reactive, onMounted } from 'vue'
import type { UserInfo } from '@/services/UserInfo';
import { cleanupAvatarUrl, handleAatarUpload } from '@/utils/storage'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// ------------------用户添加头像功能-------------------------
const avatarUrl = ref<string | null>(null)

//处理头像上传
const handleAvatarChange = async (event: Event): Promise<void> => {
  const result = await handleAatarUpload(event)
  if (result) {
    avatarUrl.value = result
  }
}

// ----------------选择性别，相对应的性别按钮背景颜色改变---------------
const selectedGender = ref<string>('')

//------------------------收集用户性息，并保存到本地-------------------------------

// 输入框绑定
const name = ref('')
const birthdate = ref('')

//提示保存信息是否成功
const trueAlert = ref<boolean>(false)
const falseAlert = ref<boolean>(false)
const nameWarn = ref<boolean>(false)

// 从本地存储加载用户信息
const userLoadInfo = (): void => {
  const data = localStorage.getItem('userInfo')
  if (data) {
    const userInfo: UserInfo = JSON.parse(data)
    avatarUrl.value = userInfo.avatar || ''
    name.value = userInfo.name as string
    selectedGender.value = userInfo.gender
    birthdate.value = userInfo.birthdate || ''
  }
}
// 页面加载时自动加载用户信息
onMounted(() => {
  userLoadInfo();
});

const saveUserInfo = (): void => {
  const userInfo: UserInfo = {
    avatar: avatarUrl.value,
    name: name.value.trim(),
    gender: selectedGender.value as 'male' | 'female' | 'secret',
    birthdate: birthdate.value
  }

  if (userInfo.name) {
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
    trueAlert.value = true
    setTimeout(() => {
      trueAlert.value = false
    }, 1000)
  } else {
    falseAlert.value = true
    nameWarn.value = true
    setTimeout(() => {
      falseAlert.value = false
      nameWarn.value = false
    }, 1000)
  }

  cleanupAvatarUrl(avatarUrl.value)
}

</script>

<template>
  <div class="account">
    <form>
      <div v-show="trueAlert" class="true-alert">{{ t('account.trueAlert') }}</div>
      <div v-show="falseAlert" class="false-alert">{{ t('account.falseAlert') }}</div>
      <div class="avatar">
        <div class="avatar-upload">
          <label for="avatar-input" class="avatar-label">
            <div v-if="avatarUrl" class="avatar-preview">
              <img :src="avatarUrl" alt="" class="preview-image">
            </div>
            <div v-else class="avatar-plus">+</div>
            <input @change="handleAvatarChange" type="file" accept="image/*" id="avatar-input" style="display: none;">
          </label>
        </div>
      </div>
      <div class="name">
        <span>{{ t('home.name') }}：</span>
        <input v-model="name" type="text">
        <span v-show="nameWarn" class="name-warning">{{ t('account.nameWarning') }}</span>
      </div>
      <div class="gender">
        <span class="gender-title">{{ t('account.sex') }}：</span>
        <label for="male" class="item" :class="{ active: selectedGender == 'male' }">
          <input v-model="selectedGender" type="radio" id="male" value="male" style="display: none;">
          <span>{{ t('account.male') }}</span>
        </label>
        <label for="female" class="item" :class="{ active: selectedGender == 'female' }">
          <input v-model="selectedGender" type="radio" id="female" value="female" style="display: none;">
          <span>{{ t('account.female') }}</span>
        </label>
        <label for="secret" class="item" :class="{ active: selectedGender == 'secret' }">
          <input v-model="selectedGender" type="radio" id="secret" value="secret" style="display: none;">
          <span>{{ t('account.secret') }}</span>
        </label>
      </div>
      <div class="data">
        <span>{{ t('account.birthdate') }}：</span>
        <input v-model="birthdate" type="date">
      </div>
      <button @click.prevent="saveUserInfo" class="save">{{ t('common.save') }}</button>
    </form>
  </div>
</template>

<style scoped>
.account {
  max-width: 500px;
  height: 65vh;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid rgb(166, 166, 166);
  border-radius: 20px;
}

.account form {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
}

.true-alert,
.false-alert {
  position: absolute;
  top: 0;
  left: 125px;
  width: 200px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border-radius: 5px;
  font-size: large;
  z-index: 1;
}

.true-alert {
  color: #0a3622;
  background-color: #d1e7dd;
  border: 1px solid #a3cfbb;
}

.false-alert {
  color: #58151c;
  background-color: #f8d7da;
  border: 1px solid #f1aeb5;
}

.account:hover {
  box-shadow: 0 10px 16.4px #d0d3d4;
}

.account span {
  font-size: 20px;
}

.avatar-upload {
  position: relative;
  width: 100px;
  height: 100px;
}

.avatar-label {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  border: 1px dashed black;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.avatar-label .avatar-preview {
  width: 100%;
  height: 100%;
  border-radius: 50px;
  overflow: hidden;
}

.avatar-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-plus {
  position: absolute;
  top: 12px;
  left: 36px;
  font-size: 40px;
  font-weight: 100;
}

.name {
  position: relative;
}

.name input,
.data input {
  width: 200px;
  height: 30px;
  border: 1px solid rgb(166, 166, 166);
  border-radius: 5px;
}

.name .name-warning {
  position: absolute;
  bottom: -23px;
  left: 62px;
  font-size: 15px;
  color: #58151c;
}

.gender {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.gender .item {
  min-width: 45px;
  height: 35px;
  padding: 0 5px;
  text-align: center;
  line-height: 34px;
  border: 1px solid rgb(166, 166, 166);
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.gender .item.active {
  color: white;
  background-color: skyblue;
}

.save {
  width: 80px;
  height: 40px;
  margin-left: 15px;
  padding: 0 5px;
  border: 1px solid;
  background-color: #afb2b32d;
  border-radius: 5px;
  text-align: center;
  line-height: 40px;
  font-size: 17px;
}
</style>