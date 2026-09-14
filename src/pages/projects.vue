<script lang="ts" setup></script>

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

        </ul>
    </div>
</template>

<style scoped>
.projects {
    width: 100%;
    height: 100%;
}

.projects-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    padding: 0 200px;
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
</style>