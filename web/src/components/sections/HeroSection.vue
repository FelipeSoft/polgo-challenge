<script setup>
import MaxWidth from '@/components/ui/MaxWidth.vue';
import Button from "@/components/ui/Button.vue";
import { ref } from 'vue';
import MobileMenu from '../ui/MobileMenu.vue';
</script>

<template>
    <div id="home">
        <header>
            <MaxWidth>
                <div class="styled">
                    <h1>LOGO</h1>
                    <nav>
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

                    <MobileMenu />
                </div>
            </MaxWidth>
        </header>

        <main>
            <MaxWidth>
                <section class="max-height">
                    <article class="half">
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>Morbi enim elit, sodales id tortor vel, dictum sodales massa. Aliquam quis mauris ac neque
                            mattis condimentum eget tempor erat.</p>
                        <Button variant="default">Cadastre-se agora mesmo!</Button>
                    </article>
                    <article class="half">
                        <img src="/circle.webp" />
                    </article>
                </section>
            </MaxWidth>
        </main>
    </div>
</template>

<style scoped>
img {
    width: 300px;
    height: 300px;
}

#home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

header {
    height: 100px;
    width: 100vw;
    background-color: #efefef;
}

main {
    width: 100vw;
}

header nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
}

header ul {
    display: flex;
    align-items: center;
    height: 100%;
    margin-top: 10px;
}

header ul li {
    display: flex;
    align-items: center;
    padding: 0px 25px;
    height: 100%;
}

header ul li a {
    color: #1f1f1f;
    text-decoration: none;
    align-items: center;
    height: 100%;
    display: flex;
    transition: background-color 0.4s ease, color 0.4s ease;
}

header ul li a:hover {
    color: #4169e1;
}

.styled {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
}

.max-height {
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
}

header h1 {
    background-color: #4169e1;
    width: 80px;
    height: 80px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}

.button-group {
    display: flex;
    align-items: center;
    gap: 25px;
    margin-left: 25px;
}

.half {
    width: 50%;
}

.half:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.half:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

p {
    color: #777;
    padding: 10px 0px;
}

@media screen and (max-width: 1024px) {
    header nav {
        display: none;
    }

    .max-height .half:nth-child(1) {
        width: 100%;
    }
}

@media screen and (max-height: 720px) {
    .max-height {
        height: 100%;
        padding: 45px 0px;
    }
}
</style>
