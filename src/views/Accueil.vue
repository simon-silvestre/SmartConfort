<template>
    <div class="home">
        <Carousel />
        <HomeIcons />
        <Footer />
    </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import HomeIcons from '@/components/HomeServices.vue'
import Footer from '@/components/Footer.vue'

export default {
    components: {
     Carousel,
     HomeIcons,
     Footer
  }
}
</script>

<style scoped>
    
</style>