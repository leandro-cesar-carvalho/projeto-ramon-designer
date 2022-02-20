<template>
    <div id="section">
        <h1>Serviços</h1>
        <div id="services">
            <div id="service-info" v-for="(service,index) in services" :key="index">
                <a :href=service.url>
                    <img :src=service.img :alt=service.name>
                    <div class="overlay">
                        <div class="text">{{service.name}}</div>
                    </div>
                </a>                    
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Services',
    data() {
        return {
            services: [
                {name:'Artworks', img:'Artwork/artwork21.jpeg', url:'/artworks'},
                {name:'Logos', img:'Logos/logo2.jpeg', url:'/logos'},
                {name:'Copos', img:'Copos/shaq.png', url:'/copos'},
            ]
        }
    }
}
</script>

<style scoped>
#section {
    padding-top: 500px;
}

h1 {
    font-size: 50px;
    text-align: center;
    background: radial-gradient(#041690, #000039);
    width: 90%;
    margin: auto;
    color: white;
    border-radius: 18px;
}

#services {
    display: block;
    width: 90%;
    text-align: center;
    margin: auto;
}

#service-info {
    width: 31.5%;
    margin: 20px 10px;
    display: inline-block;
    position: relative;
}

#service-info img {
    max-width: 100%;
    height: fit-content;
    display: block;
    margin: auto;   
    border-radius: 15px;
}

#service-info:nth-child(3) img {
    background: black;
    padding: 42px 0 42px;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: radial-gradient(#041690, #000039);
  overflow: hidden;
  border-radius: 15px;
  width: 100%;
  height: 0;
  transition: .5s ease;
}

#service-info:hover .overlay {
  height: 100%;
  cursor: pointer;
  transform: scale(1.05);
}

.text {
  white-space: nowrap; 
  color: white;
  font-size: 25px;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
</style>