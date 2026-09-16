<script lang="ts" setup>
import { Switch, Github, Email } from '@/components'
</script>

<template>
    <div class="sider">
        <div class="sider-avatar">
            <img src="../assets/img/avatar.png" alt="头像">
        </div>
        <div class="link">
            <Github />
            <Email />
        </div>
        <ul class="sider-menu">
            <li>
                <RouterLink to="/" class="menu-item">
                    <div class="icon">
                        <img src="../assets/img/home.png" alt="首页">
                    </div>
                    首页
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/projects" class="menu-item">
                    <div class="icon">
                        <img src="../assets/img/project.png" alt="GitHub项目">
                    </div>
                    项目
                </RouterLink>
            </li>
        </ul>
        <div class="switch-bottom">
            <p>主题:</p>
            <Switch />
        </div>
    </div>
</template>

<style scoped>
.sider {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 220px;
    height: 100%;
    padding: 20px;
    background-color: var(--bg-secondary-color);
    transition: background-color 0.3s ease, color 0.3s ease;
}

.sider-avatar {
    width: 100px;
    height: 100px;
    margin-top: 40px;
    border-radius: 50%;
}

.sider-avatar img {
    width: 100%;
    height: 100%;
}

.link {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 80px;
    margin-right: auto;
}

.sider-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    margin-top: 50px;
}

.sider-menu li {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    font-size: 18px;
    cursor: pointer;
}

.menu-item {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
    height: 100%;
    color: var(--text-primary-color);
}

.sider-menu .icon {
    width: 30px;
    height: 30px;
}

.sider-menu .icon img {
    width: 100%;
    height: 100%;
}

.switch-bottom {
    display: flex;
    align-items: center;
    gap: 5px;
    margin: auto 0 15px auto;
    color: var(--text-primary-color);
}
</style>