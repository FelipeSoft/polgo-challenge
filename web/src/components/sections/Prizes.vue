<script setup>
import MaxWidth from '@/components/ui/MaxWidth.vue';
import Button from "@/components/ui/Button.vue";
import Carousel from '@/components/ui/Carousel.vue';
</script>

<template>
    <section>
        <MaxWidth>
            <div id="premios">
                <h1>PRÊMIOS</h1>
                <div class="carousel-area">
                    <Carousel></Carousel>
                </div>
                <div class="button-area">
                    <Button  variant="default">Cadastre-se agora mesmo!</Button>
                </div>
            </div>
        </MaxWidth>
    </section>
</template>

<style scoped>
#premios h1 {
    width: 100%;
    text-align: center;
    color: #4169e1;
    padding-top: 45px;
    padding-bottom: 45px;
}
.button-area {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 45px;
    padding-bottom: 45px;
}
.carousel-area {
    height: 400px;
}
</style>
