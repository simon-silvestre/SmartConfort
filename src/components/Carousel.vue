<template>
  <div class="carousel">
    <hooper :infiniteScroll="true" :autoPlay="true" :playSpeed="8000" :transition="1000" :wheelControl="false" ref="carousel" @slide="updateCarousel">
      <slide>
        <div class="overlay"></div>
        <img src="@/assets/slider1.webp" alt="salon">
        <div class="slide__text">
          <h2>Contrôlez</h2>  
          <p>votre maison quand vous le vous le voulez d’un simple geste</p>
        </div>
      </slide>
     <slide>
       <div class="overlay"></div>
        <img src="@/assets/slider2.webp" alt="terasse avec baie vitrée">
        <div class="slide__text">
          <h2>profitez</h2>
          <p>d’une maison intélligente & connectée</p>
        </div>
      </slide>
      <slide>
        <div class="overlay"></div>
        <img src="@/assets/slider3.webp" alt="enfants">
        <div class="slide__text">
          <h2>Protégez</h2>
          <p>vos biens ainsi que votre famille</p>
        </div>
      </slide>
      <slide>
        <div class="overlay"></div>
        <img src="@/assets/slider4.webp" alt="télécommande tactile">
        <div class="slide__text">
          <h2>Vivez</h2>
          <p>le multimédia intélligent</p>
        </div>
      </slide>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
      <svg @click.prevent="slideNext" enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="28px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" 
      xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  
      L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z" 
      fill="#fff"/>
    </svg>
    <svg @click.prevent="slidePrev" enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="28px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" 
      xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M7.701,14.276l9.586-9.585c0.879-0.878,2.317-0.878,3.195,0l0.801,0.8c0.878,0.877,0.878,2.316,0,3.194  
      L13.968,16l7.315,7.315c0.878,0.878,0.878,2.317,0,3.194l-0.801,0.8c-0.878,0.879-2.316,0.879-3.195,0l-9.586-9.587  C7.229,17.252,7.02,16.62,7.054,16C7.02,15.38,7.229,14.748,7.701,14.276z" 
      fill="#fff"/>
    </svg>
  </div>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'Accueil',
  components: {
    Hooper,
    Slide,
    HooperPagination
  },
  data() {
    return {
      carouselData: 0
    }
  },
  watch: {
    carouselData () {
      this.$refs.carousel.slideTo(this.carouselData);
    }
  },
  methods: {
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide;
    }
  }
}
</script>

<style scoped>
  .carousel {
    position: relative;
    padding-top: 80px;
    overflow: hidden;
  }
  .carousel section {
    height: auto;
    outline: none;
  }
  .carousel section button.hooper-next:focus {
    outline: none!important;
  }
  .carousel section img {
    width: 100%;
    height: auto;
  }
  .hooper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hooper-slide .slide__text {
    position: absolute;
    width: 36%;
    text-align: center;
  }
  .carousel section h2, .carousel section p {
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
  .carousel section h2 {
    text-transform: uppercase;
    color: #18856c;
    font-weight: 900;
    font-size: 38px;
  }
  .carousel section p {
    color: #fff;
    font-weight: 600;
    font-size: 25px;
  }
  .hooper-pagination {
    bottom: 10px;
  }
  .overlay { 
    position: absolute;
    height: calc(100% - 5px);
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4); 
  } 
  
  svg {
    position: absolute;
    top: calc(50% + 16px);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    opacity: 0;
  }
  .carousel svg:last-child {
    left: -35px;
  }
  .carousel svg:nth-child(2) {
    right: -35px;
  }
  .carousel:hover svg {
    opacity: 1;
  }
  .carousel:hover svg:last-child {
    left: 35px;
  }
  .carousel:hover svg {
    right: 35px;
  }
</style>