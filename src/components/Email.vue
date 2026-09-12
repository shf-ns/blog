<script lang="ts" setup>
const emit = defineEmits(['change'])

function sendShowAlert(): void {
    emit('change', true)
}
</script>

<template>
    <div class="email-link" data-tooltip="邮箱" @click="sendShowAlert">
        <img src="../assets/img/email.png" alt="邮箱">
    </div>
</template>

<style scoped>
.email-link {
    position: relative;
    display: block;
    width: 40px;
    height: 40px;
    padding: 5px;
    border: 2px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
}

.email-link::before {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 132%;
    left: 50%;
    transform: translateX(-50%) translateY(10px);
    padding: 2px 5px;
    border-radius: 3px;
    color: white;
    font-size: small;
    white-space: nowrap;
    background-color: #333;
    /* 防止鼠标悬停在提示框上导致闪烁 */
    pointer-events: none;
    opacity: 0;
    transition: all 0.3s ease-in-out;
}

.email-link::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2px;
    background-color: #333;
    transform: rotate(45deg);
    opacity: 0;
    transition: all 0.3s ease-in-out;
}

.email-link:hover::before,
.email-link:hover::after {
    opacity: 1;
}

.email-link img {
    width: 100%;
    height: 100%;
}
</style>