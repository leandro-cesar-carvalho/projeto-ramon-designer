<template>
    <transition name="fade">
        <div class="modal" v-if="showModal" data-aos="fade-up">
            <div class="modal-backdrop" @click="closeModal()"/>

            <div class="modal-dialog">
                <div class="modal-header">
                    <button type="button" class="modal-close" @click="$emit('closeModal')">
                        <span class="close">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    <div id="image">
                        <img :src="'/' + category + '/' + image + '.jpeg'">
                    </div>                    
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'ProjectModal',
        props: {
            category: String,
            image: String,
            showModal: Boolean
        },
        data() {
            return {
            }
        },
        emits:['closeModal']
    }
</script>

<style scoped>
    .modal {
        overflow-x: hidden;
        overflow-y: auto;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 9;
    }

    .modal-backdrop {
        background-color: rgba(0, 0, 0, 0.3);
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
    }

    .modal-dialog {
        background-color: #ffffff;
        position: relative;
        width: 80%;
        height: 95%;
        margin: 10px auto;
        display: flex;
        flex-direction: column;
        border-radius: 15px;
        z-index: 2;
    }

    .modal-close {
        width: 30px;
        height: 30px;
        display: block;
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 25px;
        background: black;
        color: white;
        border-radius: 15px;
    }

    .modal-close:hover {
        cursor: pointer;
        transform: scale(1.03);
        transition: ease .5s;
    }

    .modal-body {
        height: 100%;
    }

    #image {
        width: 100%;
        height: 90%;
        margin: 30px auto;
        text-align: center;
    }

    #image img {
        width: auto;
        height: 95%;
        border-radius: 15px;
        box-shadow: 0px 0px 30px black;
    }

    
</style>