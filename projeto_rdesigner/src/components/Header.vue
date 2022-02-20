<template>
    <header>
        <img :src="'/Logotipo/logoBranco.png'" alt="Logotipo">
        <!-- <h1>Ramon Rocha Designer</h1> -->
        <ul>
            <a href="/"><li>Home</li></a>
            <a href="/projetos"><li>Projetos</li></a>
            <a href="/parcerias"><li>Parcerias</li></a>
            <a href="/contato"><li>Contato</li></a>
        </ul>
    </header>
</template>


<style scoped>

header {
    width: 100%;
    background-image: radial-gradient(#041690, #000039);
}

header img {
    width: 45%;
    text-align: center;
    margin: auto;
    height: fit-content;
    display: block;
}

header ul {
    width: 100%;
    border-top: solid 1px #b5a642;
    border-bottom: solid 1px #b5a642;
    height: 30px;
}

header li {
    display: inline-block;
    list-style: none;
    width: 24.96%;
    height: 100%;
    padding-top: 4px;
}

header a {
    color: white;
    width:max-content;
    font-size: 18px;
    text-align: center;
    padding: 2px 0 5px 0;
    text-decoration: none;
}

header a:hover {
    background-color: white;
    border: solid 1px #b5a642;
    color: #000039;
    transition: ease 0.5s;
}
</style>