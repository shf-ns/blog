<template>
    <a href="https://github.com/shf-ns" target="_blank" class="github-link" data-tooltip="GitHub">
        <img src="../assets/img/github.png" alt="GitHub">
    </a>
</template>

<style>
.github-link {
    position: relative;
    display: block;
    width: 40px;
    height: 40px;
    padding: 5px;
    border: 2px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
}

.github-link::before {
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
    background-color: black;
    /* 防止鼠标悬停在提示框上导致闪烁 */
    pointer-events: none;
    opacity: 0;
    transition: all 0.3s ease-in-out;
}

.github-link::after {
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

.github-link:hover::before,
.github-link:hover::after {
    opacity: 1;
}

.github-link img {
    width: 100%;
    height: 100%;
}

@media(max-width: 768px) {
    .github-link::before {
        display: none;
    }

    .github-link::after {
        display: none;
    }
}
</style>