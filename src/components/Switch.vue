<template>
    <label class="switch" for="switch">
        <input id="switch" type="checkbox" style="display: none;" />
    </label>
</template>
<style scoped>
.switch {
    width: 50px;
    height: 30px;
    border-radius: 15px;
    background-color: #ecedee;
    cursor: pointer;
}

.switch::before {
    content: '浅';
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

.switch:has(input:checked)::before {
    content: '深';
    transform: translate(25px, 5px);
}
</style>
