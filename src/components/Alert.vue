<script lang="ts" setup>
import { inject, type Ref } from 'vue'

const isAlert: Ref<boolean> = inject('isAlert')!
</script>

<template>
    <div class="alert" v-if="isAlert" @click.self="isAlert = false">
        <div class="alert-content">
            <span class="close-btn" @click.self="isAlert = false">x</span>
            <p class="alert-text">邮箱：3104467468@qq.com</p>
        </div>
    </div>
</template>

<style scoped>
.alert {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.alert-content {
    position: relative;
    width: 300px;
    height: 100px;
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.alert-text {
    text-align: center;
    line-height: 76px;
}

.close-btn {
    position: absolute;
    top: 0;
    right: 10px;
    padding: 5px;
    cursor: pointer;
}
</style>