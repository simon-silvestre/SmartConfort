<template>
  <div class="carousel">
    <slot></slot>
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
export default {
  data() {
    return {
      index: 0,
      slides: []
    }
  },
  mounted() {
    this.slides = this.$children
    this.slides.forEach((slide, i) => {
      slide.index = i
    })
  },
  computed: {
    slidesCount () { return this.slides.length }
  },
  methods: {
    slideNext() {
      this.index++
      if(this.index >= this.slidesCount) {
        this.index = 0
      }
    },
    slidePrev() {
      this.index--
      if(this.index < 0) {
        this.index = this.slidesCount -1
      }
    }
  }
}
</script>

<style scoped>
  .carousel {
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
    height: 400px;
  }
  .carousel svg {
    position: absolute;
    top: calc(50% + 16px);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    opacity: 0;
  }
  .carousel svg:last-child {
    left: -35px;
  }
  .carousel svg:first-of-type {
    right: -35px;
  }
   .carousel:hover svg {
    opacity: 1;
  }
    .carousel:hover svg:last-child {
    left: 35px;
  }
  .carousel:hover svg:first-of-type {
    right: 35px;
  }
</style>