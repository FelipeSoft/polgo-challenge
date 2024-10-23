<script setup></script>

<template>
    <div class="max-width">
        <slot></slot>
    </div>
</template>

<style scoped>
.max-width {
    max-width: 1920px;
    padding: 0px 45px;
    margin: 0px auto;
    height: 100%;
}
@media screen and (max-width: 1024px) {
    .max-width {
        padding: 0px 20px;
        height: 100%;
    }
}
</style>