<template>
  <div class="home">
    <Main />
    <Services />
  </div>
</template>

<script>
import Main from '@/components/Main.vue'
import Services from '@/components/Services.vue'

export default {
  name: 'Home',
  components: {
    Main,
    Services
  }
}
</script>
