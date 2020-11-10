<template>
  <div class="home">
    <hooper :infiniteScroll="true" :autoPlay="true" :playSpeed="5000" :transition="1000">
      <slide>
        <img src="@/assets/slider1.png" alt="salon">
      </slide>
     <slide>
        <img src="@/assets/slider2.png" alt="terasse avec baie vitrée">
      </slide>
      <slide>
        <img src="@/assets/slider3.png" alt="enfants">
      </slide>
      <slide>
        <img src="@/assets/slider4.png" alt="télécommande tactile">
      </slide>
    </hooper>
      <svg @click.prevent="slideNext" enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" 
      xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  
      L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z" 
      fill="#fff"/>
    </svg>
    <svg @click.prevent="slidePrev" enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" 
      xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M7.701,14.276l9.586-9.585c0.879-0.878,2.317-0.878,3.195,0l0.801,0.8c0.878,0.877,0.878,2.316,0,3.194  
      L13.968,16l7.315,7.315c0.878,0.878,0.878,2.317,0,3.194l-0.801,0.8c-0.878,0.879-2.316,0.879-3.195,0l-9.586-9.587  C7.229,17.252,7.02,16.62,7.054,16C7.02,15.38,7.229,14.748,7.701,14.276z" 
      fill="#fff"/>
    </svg>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'Accueil',
  components: {
    Hooper,
    Slide,
  }
}
</script>

<style scoped>
  .home {
    position: relative;
    padding-top: 90px;
  }
  .home section {
    height: auto;
    outline: none;
  }
  .home section button.hooper-next:focus {
    outline: none!important;
  }
  img {
    width: 100%;
  }

  /*  A faire slider assombri .overlay { background-color: rgba(0, 0, 0, 0.3); } */
  
  svg {
    position: absolute;
    z-index: 10;
    top: calc(50% + 16px);
  }
  .home svg:nth-last-child(1) {
    left: 35px;
  }
  .home svg:nth-child(2) {
    right: 35px;
  }
</style>