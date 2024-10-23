<script setup>
const props = defineProps({
    label: {
        type: String,
        required: true
    },
    variant: {
        type: String,
        required: true,
        validator: (value) => ['default', 'outline'].includes(value)
    }
});
</script>

<template>
    <div v-if="variant === 'default'">
        <button class="base default">
            <slot></slot>
        </button>
    </div>
    <div v-if="variant === 'outline'">
        <button class="base outline">
            <slot></slot>
        </button>
    </div>
</template>

<style scoped>
.base {
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    cursor: pointer;
}

.default {
    background-color: #4169e1;
    color: #fff;
    transition: background-color 0.4s ease, color 0.4s ease;
}

.default:hover {
    background-color: #2856e1;
}

.outline {
    background-color: transparent;
    border: 1px solid #4169e1;
    color: #4169e1;
    transition: background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease;
}

.outline:hover {
    background-color: #d1d1d1;
    border-color: #3763e7;
    color: #3763e7;
}
</style>
