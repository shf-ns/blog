<script lang="ts" setup>
import { useComputeTime } from "@/tools/computeTime";
import type { Time } from "@/types/Time";
import { onMounted, onUnmounted, ref, type Ref } from "vue";

const time: Ref<Time> = ref({
    year: '',
    month: '',
    day: '',
    hour: '',
    minute: '',
    second: '',
})

const loading: Ref<boolean> = ref(true)

const timer: Ref<number> = ref(0)

onMounted((): void => {
    timer.value = setInterval((): void => {
        time.value = useComputeTime(new Date())
        if (loading.value) {
            loading.value = false
        }
    }, 1000)
})

onUnmounted((): void => {
    clearTimeout(timer.value)
})
</script>

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
                    <div v-if="loading">
                        <p class="loading">加载中....</p>
                    </div>
                    <div v-else>
                        <p class="date">{{ time.year }}-{{ time.month }}-{{ time.day }}</p>
                        <p class="times">{{ time.hour }}:{{ time.minute }}:{{ time.second }}</p>
                    </div>
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

.content-right .time .loading {
    font-size: 30px;
    font-weight: bold;
    text-align: left;
}
</style>