<template>
    <h1>Logos</h1>

    <div id="main">
        <div id="logo-info" v-for="(logo, index) in logos" :key="index" @click="modal(logo)">
            <img :src="'/Logos/' + logo + '.jpeg'" alt="">
        </div>
    </div>

    <Modal @closeModal="closeModal" :category="category" :image="image" :showModal="show" />
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
    data() {
        return {
            category : 'Logos',
            logos : [
                'logo1',
                'logo2',
                'logo3',
                'logo4',
                'logo5',
            ],
            showModal : Boolean,
            show : false,
            image: ''
        }
    },
    components: {
        Modal
    },
    methods: {
        modal(data) {
            this.image = data;
            this.show=true
            console.log(this.show)
        },
        closeModal() {
            this.show = false
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
    cursor: pointer;
}
</style>