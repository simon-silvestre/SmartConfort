<template>
    <div class="home">
        <Carousel>
            <Carousel-slide style="opacity: 1">
                <div class="overlay"></div>
                <img src="@/assets/slider1.webp" alt="salon">
                <div class="text-container">
                    <div class="slide__text">
                        <h2>Contrôlez</h2>  
                        <p>votre maison quand vous le vous le voulez d’un simple geste</p>
                    </div>
                </div>
            </Carousel-slide>
            <Carousel-slide style="opacity: 1">
                <div class="overlay"></div>
                <img src="@/assets/slider2.webp" alt="terasse avec baie vitrée">
                <div class="text-container">
                    <div class="slide__text">
                        <h2>profitez</h2>
                        <p>d’une maison intélligente & connectée</p>
                   </div>
                </div>
            </Carousel-slide>
            <Carousel-slide style="opacity: 1">
                <div class="overlay"></div>
                <img src="@/assets/slider3.webp" alt="enfants">
                <div class="text-container">
                    <div class="slide__text">
                        <h2>Protégez</h2>
                        <p>vos biens ainsi que votre famille</p>
                    </div>
                </div>
            </Carousel-slide>
            <Carousel-slide style="opacity: 1">
                <div class="overlay"></div>
                <img src="@/assets/slider4.webp" alt="télécommande tactile">
                <div class="text-container">
                    <div class="slide__text">
                        <h2>Vivez</h2>
                        <p>le multimédia intélligent</p>
                    </div>
                </div>
            </Carousel-slide>
        </Carousel>
        <HomeIcons />
        <HomeContact />
        <Footer />
    </div>
</template>

<script>
import Carousel from '@/components/carousel/Carousel.vue'
import CarouselSlide from '@/components/carousel/CarouselSlide.vue'
import HomeIcons from '@/components/HomeServices.vue'
import HomeContact from '@/components/HomeContact.vue'
import Footer from '@/components/Footer.vue'

export default {
    components: {
        Carousel,
        CarouselSlide,
        HomeIcons,
        HomeContact,
        Footer
  }
}
</script>

<style scoped>
    .home {
        padding-top: 80px;
    }
    .overlay { 
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.4); 
        left: 0;
        top: 0;
    } 
    .text-container {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }   
    .slide__text {
        width: 550px;
        text-align: center;
    }
    .slide__text h2, .slide__text p {
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    }
    .slide__text h2 {
        text-transform: uppercase;
        color: #18856c;
        font-weight: 900;
        font-size: 38px;
    }
    .slide__text p {
        color: #fff;
        font-weight: 600;
        font-size: 25px;
    }
    @media screen and (min-width:1920px) {
        .carousel img {
            width: 100%;
        }
    }
    @media screen and (max-width: 650px) {
        .slide__text {
            width: 400px;
        }
        .slide__text h2 {
            font-size: 30px;
        }
        .slide__text p {
            font-size: 20px;
        }
    }
    @media screen and (max-width: 499px) {
        .slide__text {
            width: 300px;
        }
        .slide__text h2 {
            font-size: 25px;
        }
        .slide__text p {
            font-size: 18px;
        }
    }
</style>