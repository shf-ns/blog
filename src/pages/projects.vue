<script lang="ts" setup>
import { Footer } from '@/layout'
import { gitHubRepo } from '@/tools';
import type { GitHubRepo } from '@/types';
import { onMounted, ref, type Ref } from 'vue';

const repos: Ref<GitHubRepo[]> = ref([])

const load = ref(true);

onMounted(async (): Promise<void> => {
    repos.value = await gitHubRepo();
    load.value = false;
})

</script>

<template>
    <div class="projects">
        <h1 v-if="load">加载中...</h1>
        <ul v-else class="projects-list">
            <li class="item" v-for="(repo, index) in repos" :key="index">
                <a :href="repo.html_url" target="_blank" class="title">{{ repo.name }}</a>
                <p class="description">{{ repo.description }}</p>
                <div class="info">
                    <span class="lang">{{ repo.language }}</span>
                    <div class="stars">
                        <div class="img">
                            <img src="../assets/img/start.png" alt="星星">
                        </div>
                        <span>{{ repo.stargazers_count }}</span>
                    </div>
                    <span class="updated">updated：{{ repo.updated_at }}</span>
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
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 180px;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.load {
    font-size: 20px;
    font-weight: bold;
    color: var(--text-secondary-color);
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
    padding: 25px;
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
    color: var(--text-secondary-color);
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
    color: var(--text-secondary-color);
    white-space: nowrap;
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