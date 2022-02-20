<template>
    <div id="main">
        <Slide />
        <div class="info" data-aos="fade-left">
            <h1>O copo ideal para Você</h1>
            <p>
                Personalize o copo do seu jeito, que criamos a arte e entregramos
                na porta de sua casa!
            </p>
            <p>
                Nos mande o tema que desejar e surpreenda!
            </p>
        </div>
    </div>
</template>

<script>
import Slide from '@/components/Slide.vue';

export default {
    name: 'Main',
    components: {
        Slide
    }
}
</script>

<style scoped>
#main {
    display: block;
}
.info {
    background: radial-gradient(#111, #000);
    color: white;
    text-align: center;
    display: block;
    float: right;
    height: 350px;
    width: 50%;
    padding: 80px 20px 0;
}
.info h1 {
    font-style: italic;
    font-size: 40px;
}

.info p {
    margin-top: 20px;
    font-size: 22px;
}
</style>