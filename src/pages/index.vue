<script lang="ts" setup>
import { useComputeTime, requestTalk } from "@/tools";
import type { Time, QuoteInfo } from "@/types";
import { Github, Email } from "@/components";
import { Footer } from "@/layout";
import { inject, onMounted, onUnmounted, ref, type Ref } from "vue";

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

const quoteInfo: Ref<QuoteInfo> = ref({
    content: '',
    author: '',
})

onMounted((): void => {
    const handlQuoteInfo = async (): Promise<void> => {
        const data: QuoteInfo | undefined = await requestTalk()
        if (data) {
            quoteInfo.value.author = data.author
            quoteInfo.value.content = data.content
        }
    }
    handlQuoteInfo()
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
                    <span class="lang-start">"</span>
                    <span>珍惜每一天</span>
                </div>
            </div>
            <div class="link">
                <Github />
                <Email />
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
                <div class="quote">
                    <p class="quote-content">
                        {{ quoteInfo.content }}
                    </p>
                    <p class="quote-author">——{{ quoteInfo.author }}</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 20px 200px;
}

.content {
    display: flex;
    gap: 60px;
    margin-top: 120px;
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
    background: var(--bg-secondary-color);
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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    background: var(--bg-secondary-color);
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.lang-start {
    font-size: 25px;
    font-weight: bold;
}

.link {
    display: none;
}

.content-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 25px;
}

.content-right .time {
    width: 100%;
    height: 150px;
    padding: 35px;
    background-color: var(--bg-secondary-color);
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

.quote {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 160px;
    padding: 35px;
    background-color: var(--bg-secondary-color);
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-size: 20px;
}

.quote-content {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    word-break: break-all;
    margin-bottom: 10px;
    font-size: large;
    font-weight: bold;
}

.quote-author {
    font-size: 16px;
    text-align: right;
}

@media (min-width: 1024px) and (max-width: 1240px) {
    .home {
        padding: 20px 90px;
    }
}

@media (min-width: 768px) and (max-width: 1024px) {
    .home {
        padding: 20px 100px;
    }

    .content {
        flex-direction: column;
        gap: 40px;
        margin-top: 25px;
    }

    .footer {
        margin-top: 25px;
    }
}

@media (max-width: 768px) {
    .home {
        padding: 0px;
        margin-top: 90px;
    }

    .content {
        flex-direction: column;
        gap: 30px;
        margin: 35px;
    }

    .content-left {
        gap: 30px;
    }

    .content-right {
        gap: 35px;
    }

    .link {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    .link .email-link,
    .link .github-link {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        border: none;
        background-color: var(--bg-secondary-color);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .footer {
        margin-top: 25px;
    }
}
</style>