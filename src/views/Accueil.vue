<template>
    <div class="home">
        <Carousel />
        <HomeIcons />
        <Controleur />
        <Footer />
    </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import HomeIcons from '@/components/HomeServices.vue'
import Controleur from '@/components/ControlDomotic.vue'
import Footer from '@/components/Footer.vue'

export default {
    components: {
     Carousel,
     HomeIcons,
     Controleur,
     Footer
  }
}
</script>

<style scoped>
    
</style>