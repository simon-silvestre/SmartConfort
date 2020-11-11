<template>
    <div class="home">
        <Carousel />
        <HomeIcons />
    </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import HomeIcons from '@/components/HomeServices.vue'

export default {
    components: {
     Carousel,
     HomeIcons
  }
}
</script>

<style scoped>
    
</style>