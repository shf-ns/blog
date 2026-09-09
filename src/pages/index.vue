<script lang="ts" setup></script>

<template>
    <div class="home">
        <div class="content">
            <div class="content-left">
                <div class="info">
                    <div class="avatar">
                        <img src="../assets/img/avatar.png" alt="头像">
                    </div>
                    <h3>shf-ns</h3>
                    <p>这是一个基于Vue3的个人博客</p>
                </div>
                <div class="lang">
                    <span>“</span>
                    <span>珍惜每一天</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.home {
    width: 100%;
    padding: 0 200px;
}

.content {
    margin-top: 150px;
}

.content-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 365px;
}

.content-left .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 300px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.content-left .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.content-left .avatar img {
    width: 100%;
    height: 100%;
}

.lang {
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
