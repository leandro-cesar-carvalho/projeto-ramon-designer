<template>
  <Header />
  <router-view/>
  <Footer />
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>
