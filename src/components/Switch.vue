<script setup lang="ts">
import { ref, type Ref } from 'vue'

const isActive: Ref<boolean> = ref(false)

const toggleTheme = (): void => {
    isActive.value = !isActive.value
}
</script>

<template>
    <div class="switch" @click="toggleTheme">
        <div class="switch-btn" :class="{ 'active': isActive }">
            {{ isActive ? '深' : '浅' }}
        </div>
    </div>
</template>
<style scoped>
.switch {
    display: block;
    width: 50px;
    height: 30px;
    border-radius: 15px;
    background-color: #ecedee;
    cursor: pointer;
    user-select: none
}

.switch-btn {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    text-align: center;
    font-size: small;
    transform: translate(5px, 5px);
    transition: transform 0.3s ease-in-out;
}

.switch-btn.active {
    transform: translate(25px, 5px);
}
</style>