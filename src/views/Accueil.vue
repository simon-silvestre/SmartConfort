<template>
    <div class="home">
        <Carousel />
        <HomeIcons />
        <HomeContact />
        <Footer />
    </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import HomeIcons from '@/components/HomeServices.vue'
import HomeContact from '@/components/HomeContact.vue'
import Footer from '@/components/Footer.vue'

export default {
    components: {
     Carousel,
     HomeIcons,
     HomeContact,
     Footer
  }
}
</script>

<style scoped>
    
</style>