<script setup>
import Button from "@/components/ui/Button.vue";
import { ref } from 'vue';

const isOpenedMobileMenu = ref(false)

const openMobileMenu = () => {
    isOpenedMobileMenu.value = true;
}
const closeMobileMenu = () => {
    isOpenedMobileMenu.value = false;
}
</script>

<template>
    <button @click="openMobileMenu()" class="mobile-menu">
        ☰
    </button>

    <nav v-if="isOpenedMobileMenu" class="mobile-menu-navigator">
        <button @click="closeMobileMenu()" class="close-mobile-menu">
            🗙
        </button>
        <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#como-participar">COMO PARTICIPAR</a></li>
            <li><a href="#premios">PRÊMIOS</a></li>
            <li><a href="#duvidas-frequentes">DÚVIDAS FREQUENTES</a></li>
            <li><a href="#ganhadores">GANHADORES</a></li>
        </ul>
        <div class="button-group">
            <Button variant="outline">ENTRAR</Button>
            <Button variant="default">CADASTRAR</Button>
        </div>
    </nav>
</template>

<style>
.mobile-menu {
    display: none;
}

.close-mobile-menu {
    border: none;
    font-size: 48px;
}

.mobile-menu-navigator {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-height: 100vh;
    width: 100vw;
    position: fixed;
    inset: 0;
    background-color: #efefef;
    z-index: 10;
    overflow-y: auto;
    padding: 20px;
}

.button-group {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 10px;
}

.mobile-menu-navigator ul {
    margin-left: 10px;
    margin-top: 50px;
}

.mobile-menu-navigator ul li {
    height: 100px;
    list-style: none;
}

.mobile-menu-navigator ul li a {
    text-decoration: none;
}

.mobile-menu-navigator ul,
.mobile-menu-navigator .button-group {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
}

@media screen and (max-width: 1024px) {
    .mobile-menu {
        display: block;
        border: none;
        font-size: 48px;
        cursor: pointer;
    }
}
</style>