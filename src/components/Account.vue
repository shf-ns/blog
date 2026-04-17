<script setup lang="ts" name="Account"></script>

<template>
  <div class="account">
    <form>
      <div class="avatar">
        <div class="avatar-upload">
          <label for="avatar-input" class="avatar-label">
            <div class="avatar-plus">+</div>
            <input type="file" accept="image/*" id="avatar-input" style="display: none;">
          </label>
        </div>
      </div>
      <div class="name">
        <span>名字：</span>
        <input type="text">
      </div>
      <div class="gender">
        <span>性别：</span>
        <label for="1" class="item">
          <input type="checkbox" id="1" style="display: none;">
          <span>男</span>
        </label>
        <label for="0" class="item">
          <input type="checkbox" id="0" style="display: none;">
          <span>女</span>
        </label>
        <label for="-1" class="item">
          <input type="checkbox" id="-1" style="display: none;">
          <span>保密</span>
        </label>
      </div>
      <div class="data">
        <span>出生日期：</span>
        <input type="date">
      </div>
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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
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

.avatar-plus {
  position: absolute;
  top: 12px;
  left: 36px;
  font-size: 40px;
  font-weight: 100;
}

.name input,
.data input {
  width: 200px;
  height: 30px;
  border: 1px solid rgb(166, 166, 166);
  border-radius: 5px;
}

.gender {
  width: 260px;
  display: flex;
  justify-content: space-between;
}

.gender .item {
  width: 45px;
  height: 30px;
  text-align: center;
  line-height: 27px;
  border: 1px solid rgb(166, 166, 166);
  background-color: #f9fbfc;
  border-radius: 5px;
}
</style>