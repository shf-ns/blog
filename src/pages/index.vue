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
            <div class="content-right">
                <div class="time">
                    <p class="date">2023-08-01</p>
                    <p class="times">10:30:33</p>
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
    display: flex;
    gap: 60px;
    margin-top: 150px;
}

.content-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
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

.content-right {
    flex: 1;
}

.content-right .time {
    width: 100%;
    height: 150px;
    padding: 35px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-size: 20px;
    text-align: left;
}

.content-right .time .date {
    font-size: 30px;
    font-weight: bold;
}

.content-right .time .times {
    font-size: 25px;
}
</style>
