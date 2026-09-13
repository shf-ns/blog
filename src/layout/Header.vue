<template>
    <div class="header">
        <div class="header-avatar">
            <img src="../assets/img/avatar.png" alt="头像">
        </div>
        <ul class="menu">
            <li>
                <RouterLink to="/" class="header-menu-item">
                    <div class="img">
                        <img src="../assets/img/home.png" alt="首页">
                    </div>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/projects" class="header-menu-item">
                    <div class="img">
                        <img src="../assets/img/project.png" alt="GitHub项目">
                    </div>
                </RouterLink>
            </li>
            <li>
                <div class="header-menu-item" @click.stop="isSetting = !isSetting">
                    <div class="img">
                        <img src="../assets/img/setting.png" alt="设置">
                    </div>
                </div>
            </li>
        </ul>
        <Transition name="fade">
            <div class="setting" v-show="isSetting">
                <p>主题:</p>
                <Switch />
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.header {
    position: relative;
    position: fixed;
    top: 0;
    z-index: 1000;
    display: none;
    width: 100%;
    height: 80px;
    background-color: var(--bg-secondary-color);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.header-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
}

.header-avatar img {
    width: 100%;
    height: 100%;
}

.header .menu {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
}

.header-menu-item {
    cursor: pointer;
}

.header-menu-item .img {
    width: 30px;
    height: 30px;
}

.header-menu-item .img img {
    width: 100%;
    height: 100%;
}

.header .setting {
    position: absolute;
    top: 75px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 120px;
    height: 50px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: var(--bg-primary-color);
}

.header .setting::before {
    content: '';
    position: absolute;
    top: -5px;
    right: 19px;
    width: 10px;
    height: 10px;
    background-color: var(--bg-primary-color);
    transform: rotate(45deg);
}
</style>