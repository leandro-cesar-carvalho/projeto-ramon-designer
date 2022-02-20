<template>
    <section>
        <ul class="slider">
                <li>
                    <input type="radio" name="slide" id="slide1" checked>
                    <label for="slide1"></label>
                    <img :src="'/Copos/Derrik-ROSE.png'" alt="D-Rose">
                </li>
                <li>
                    <input type="radio" name="slide" id="slide2">
                    <label for="slide2"></label>
                    <img :src="'/Copos/gatos.png'" alt="Gatos">
                </li>
                <li>
                    <input type="radio" name="slide" id="slide3">
                    <label for="slide3"></label>
                    <img :src="'/Copos/moreno.png'" alt="M. Moreno">
                </li>
                <li>
                    <input type="radio" name="slide" id="slide4">
                    <label for="slide4"></label>
                    <img :src="'/Copos/shaq.png'" alt="Shaq">
                </li>
                <li>
                    <input type="radio" name="slide" id="slide5">
                    <label for="slide5"></label>
                    <img :src="'/Copos/The-river--Ivan.png'" alt="TR Ivan">
                </li> 
                <li>
                    <input type="radio" name="slide" id="slide6">
                    <label for="slide6"></label>
                    <img :src="'/Copos/The-river-Renata.png'" alt="TR Renata">
                </li>
            </ul>
    </section>
</template>

<script>
export default {
    name:'Slide'
}
</script>

<style scoped>
section {
    display: block;
}

.slider {
    background: radial-gradient(#111, #000);
    display: block;
    height: 430px;
    position: absolute;
    width: 50%;
    margin: auto;
}

.slider li {
    list-style: none;
    position: absolute;
}

.slider img {
    margin: auto 2%;
    width: 80%;
    height: 50%;
    vertical-align: top;
}

.slider input {
    display: none;
}

.slider label {
    background-color: #fcc200;
    border-radius: 50px;
    bottom: 10px;
    left: 10px;
    cursor: pointer;
    display: block;
    height: 10px;
    position: absolute;
    width: 10px;
    z-index: 10;
}

.slider li:nth-child(1) label {
    left: 10px;
}

.slider li:nth-child(2) label {
    left: 25px;
}

.slider li:nth-child(3) label {
    left: 40px;
}

.slider li:nth-child(4) label {
    left: 55px;
}

.slider li:nth-child(5) label {
    left: 70px;
}

.slider li:nth-child(6) label {
    left: 85px;
}

.slider img {
    opacity: 0;
    visibility: hidden;
}

.slider li input:checked ~ label {
    background-color: #041690;
}

.slider li input:checked ~ img {
    transition: all 1.5s;
    opacity: 1;
    visibility: visible;
    z-index: 10;
}
</style>