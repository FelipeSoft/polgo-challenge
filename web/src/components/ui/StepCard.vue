<script setup>
defineProps({
    stepNumber: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});
</script>

<template>
    <article>
        <h2>{{ stepNumber }}</h2>
        <p>{{ content }}</p>
        <div>
            <slot></slot>
        </div>
    </article>
</template>

<style scoped>

</style>