<template>
    <Carousel class="template-height main" v-bind="settings" :breakpoints="breakpoints">
        <Slide class="template-height margin-x" v-for="slide in 10" :key="slide">
            <div class="carousel__item">{{ slide }}</div>
        </Slide>

        <template #addons>
            <Navigation />
        </template>
    </Carousel>
</template>

<style scoped>
.template-height {
    height: 400px;
    background-color: #efefef;
}
.carousel__item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
</style>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'Breakpoints',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        breakpoints: {
            700: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            1024: {
                itemsToShow: 4,
                snapAlign: 'start',
            },
        },
    }),
})
</script>