<template>
    <footer>
        <section>
            <h1>LOGO</h1>
            <img src="" alt="" />
        </section>
        <section>
            <ul>
                <li><a href="#">Política de Privacidade</a></li>
                <li><a href="#">Termos de Uso</a></li>
                <li><a href="#">Regulamento</a></li>
                <li><a href="#">SRE: 0000000000000</a></li>
            </ul>
        </section>
        <section>
            <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#como-participar">COMO PARTICIPAR</a></li>
                <li><a href="#premios">PRÊMIOS</a></li>
                <li><a href="#duvidas-frequentes">DÚVIDAS FREQUENTES</a></li>
                <li><a href="#ganhadores">GANHADORES</a></li>
            </ul>
        </section>
    </footer>
</template>

<style scoped>
footer {
    background-color: #efefef;
    padding: 45px;
    display: flex;
    align-items: start;
    justify-content: space-between;
}
ul li {
    list-style: none;
    padding: 10px 0px;
}

ul li a {
    text-decoration: none;
    color: #000;
}

ul li a:hover {
    color: #4169e1;
    transition: background-color 0.4s ease, color 0.4s ease;
}

h1 {
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

.min-height {
    min-height: 100vh;
}

@media screen and (max-width: 1024px) {
    footer {
        display: flex;
        flex-direction: column;
        padding: 20px;
    }
}

@media screen and (min-width: 768px) {
    footer {
        display: flex;
        flex-direction: row;
        padding: 36px;
    }
}
</style>