<template>
    <h1>Logos</h1>

    <div id="main">
        <div id="logo-info" v-for="(logo, index) in logos" :key="index">
            <img :src="'/Logos/' + logo + '.jpeg'" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            logos : [
                'logo1',
                'logo2',
                'logo3',
                'logo4',
                'logo5',
            ]
        }
    }
}
</script>


<style scoped>
#main {
    width: 90%;
    margin: auto;
    text-align: center;
}

h1 {
    font-size: 50px;
    text-align: center;
    background: radial-gradient(#041690, #000039);
    width: 90%;
    margin: 20px auto;
    color: white;
    border-radius: 18px;
}
#logo-info {
    width: 31.5%;
    height: fit-content;
    margin: 20px 10px;
    display: inline-block;
}

#logo-info img {
    width: 100%;
    border-radius: 15px;
    box-shadow: 2px 2px 10px black;
    display: block;
    margin: auto;
}

#logo-info:hover {
    transition: ease 0.5s;
    transform: scale(1.03);
}
</style>