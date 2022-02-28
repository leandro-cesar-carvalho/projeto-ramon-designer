<template>
    <h1>Artworks</h1>

    <div id="main">
        <div id="artwork-info" v-for="(artwork, index) in artworks" :key="index" @click="modal(artwork)">
            <img :src="'/Artwork/' + artwork + '.jpeg'" alt="">
        </div>
    </div>

    <Modal @closeModal="closeModal" :category="category" :image="image" :showModal="show" />
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
    data() {
        return {
            category : 'Artwork',
            artworks : [
                'artwork1',
                'artwork2',
                'artwork3',
                'artwork4',
                'artwork5',
                'artwork6',
                'artwork7',
                'artwork8',
                'artwork9',
                'artwork10',
                'artwork11',
                'artwork12',
                'artwork13',
                'artwork14',
                'artwork15',
                'artwork16',
                'artwork17',
                'artwork18',
                'artwork19',
                'artwork20',
                'artwork21'
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
#artwork-info {
    width: 31.5%;
    height: fit-content;
    margin: 20px 10px;
    display: inline-block;
}

#artwork-info img {
    width: 100%;
    border-radius: 15px;
    box-shadow: 2px 2px 10px black;
}

#artwork-info:hover {
    transition: ease 0.5s;
    transform: scale(1.03);
    cursor: pointer;
}
</style>