<script lang="ts" setup>
import { Footer } from '@/layout'
</script>

<template>
    <div class="projects">
        <ul class="projects-list">
            <li class="item">
                <a href="#" class="title">learn-Vue3</a>
                <p class="description">学习 Vue3 的项目</p>
                <div class="info">
                    <span class="lang">Vue3</span>
                    <div class="stars">
                        <div class="img">
                            <img src="../assets/img/start.png" alt="星星">
                        </div>
                        <span>3</span>
                    </div>
                    <span class="updated">updated：2023-08-01</span>
                </div>
            </li>
            <li class="item">
                <a href="#" class="title">learn-Vue3</a>
                <p class="description">学习 Vue3 的项目</p>
                <div class="info">
                    <span class="lang">Vue3</span>
                    <div class="stars">
                        <div class="img">
                            <img src="../assets/img/start.png" alt="星星">
                        </div>
                        <span>3</span>
                    </div>
                    <span class="updated">updated：2023-08-01</span>
                </div>
            </li>
            <li class="item">
                <a href="#" class="title">learn-Vue3</a>
                <p class="description">学习 Vue3 的项目</p>
                <div class="info">
                    <span class="lang">Vue3</span>
                    <div class="stars">
                        <div class="img">
                            <img src="../assets/img/start.png" alt="星星">
                        </div>
                        <span>3</span>
                    </div>
                    <span class="updated">updated：2023-08-01</span>
                </div>
            </li>
            <li class="item">
                <a href="#" class="title">learn-Vue3</a>
                <p class="description">学习 Vue3 的项目学习 Vue3 的项目学习 Vue3 的项目学习 Vue3 的项目学习 Vue3 的项目学习 Vue3 的项目学习 Vue3 的项目学习
                    Vue3 的项目</p>
                <div class="info">
                    <span class="lang">Vue3</span>
                    <div class="stars">
                        <div class="img">
                            <img src="../assets/img/start.png" alt="星星">
                        </div>
                        <span>3</span>
                    </div>
                    <span class="updated">updated：2023-08-01</span>
                </div>
            </li>
        </ul>
        <Footer />
    </div>
</template>

<style scoped>
.projects {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    padding: 0 200px;
}

.projects-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    margin-top: 70px;
}

.projects-list .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    background-color: var(--bg-secondary-color);
    box-shadow: var(--box-shadow);
    border-radius: 5px;
}

.projects-list .item .title {
    display: inline-block;
    font-size: 22px;
    font-weight: bold;
    color: #0969da
}

.projects-list .item .title:hover {
    text-decoration: underline;
}

.projects-list .item .description {
    font-size: 14px;
    color: #59636e;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    word-break: break-all;
}

.projects-list .item .info {
    display: flex;
    gap: 15px;
    font-size: 12px;
    color: #59636e;
}

.projects-list .item .info .stars {
    display: flex;
    justify-content: center;
    align-items: center;
}

.projects-list .item .info .stars .img {
    width: 15px;
    height: 15px;
}

.projects-list .item .info .stars .img img {
    width: 100%;
    height: 100%;
}

@media (min-width: 1024px) and (max-width: 1240px) {
    .projects {
        padding: 0 80px;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    .projects {
        padding: 0 90px;
    }

    .projects-list {
        grid-template-columns: repeat(1, 1fr);
        margin-top: 40px;
    }

    .footer {
        margin-top: 25px;
    }
}

@media (max-width: 768px) {
    .projects {
        padding: 0 60px;
    }

    .projects-list {
        grid-template-columns: repeat(1, 1fr);
        margin-top: 120px;
    }

    .footer {
        margin-top: 25px;
    }
}
</style>