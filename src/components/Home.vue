<script setup lang="ts" name="Home"></script>

<template>
  <div class="home">
    <div class="avatar">
      <img src="" alt="">
    </div>
    <div class="info">
      <div class="name">昵称：</div>
      <div class="introduction">
        <span>个人介绍：</span>
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
  border: 1px solid rgb(166, 166, 166);
  border-radius: 20px;
}

.home:hover {
  box-shadow: 0 10px 16.4px #d0d3d4;
}

.home .avatar {
  width: 300px;
  border-radius: 20px;
  overflow: hidden;
}

.home .avatar img {
  width: 100%;
  height: 100%
}

.info {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 380px;
  padding: 20px;
}

.info .name {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid silver;
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
  height: 250px;
  padding: 10px;
  resize: none;
  box-sizing: border-box;
  border: 1px solid rgb(166, 166, 166);
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