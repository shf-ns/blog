<script setup lang="ts">
import { onMounted, ref, watch, type Ref } from 'vue'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()

const isActive: Ref<boolean> = ref(false)

let transitionTimer: number | null = null


const toggleTheme = (): void => {

    isActive.value = !isActive.value
    if (isActive.value) {
        themeStore.saveTheme('dark')
    } else {
        themeStore.saveTheme('light')
    }

    transitionTimer = window.setTimeout(() => {
        document.documentElement.classList.remove('theme-transition')
        transitionTimer = null
    }, 300)
}

onMounted(() => {
    const theme = themeStore.getTheme()
    if (theme === 'dark') {
        isActive.value = true
        themeStore.theme = 'dark'
    } else {
        isActive.value = false
        themeStore.theme = 'light'
    }
})

watch(isActive, (newTheme: boolean) => {
    if (newTheme) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}, { immediate: true })
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
    background-color: var(--switch-bg-color);
    cursor: pointer;
    user-select: none
}

.switch-btn {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    color: black;
    text-align: center;
    font-size: small;
    transform: translate(5px, 5px);
    transition: transform 0.3s ease-in-out;
}

.switch-btn.active {
    transform: translate(25px, 5px);
}
</style>