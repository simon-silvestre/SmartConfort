<template>
  <div class="carousel" v-touch:swipe.left="slideNext" v-touch:swipe.right="slidePrev">
    <slot></slot>
      <svg class="slideNext" @click.prevent="slideNext" enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="28px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  
        L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z" 
        fill="#fff"/>
      </svg>
      <svg class="slidePrev" @click.prevent="slidePrev" enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="28px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M7.701,14.276l9.586-9.585c0.879-0.878,2.317-0.878,3.195,0l0.801,0.8c0.878,0.877,0.878,2.316,0,3.194  
        L13.968,16l7.315,7.315c0.878,0.878,0.878,2.317,0,3.194l-0.801,0.8c-0.878,0.879-2.316,0.879-3.195,0l-9.586-9.587  C7.229,17.252,7.02,16.62,7.054,16C7.02,15.38,7.229,14.748,7.701,14.276z" 
        fill="#fff"/>
      </svg>
      <div class="carousel__pagination">
        <span v-for="n in slidesCount" :key='n' :class="{ active: n-1 == index}"></span>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      slides: [],
      transition: null,
      timer: null
    }
  },
  mounted() {
    this.slides = this.$children
    this.slides.forEach((slide, i) => {
      slide.index = i
    })
    this.slideTimer()
  },
  computed: {
    slidesCount () { return this.slides.length }
  },
  methods: {
    slideNext() {
      this.index++
      this.transition = 'fade'
      if(this.index >= this.slidesCount) {
        this.index = 0
      }
      this.slideTimer()
    },
    slidePrev() {
      this.index--
      this.transition = 'fade'
      if(this.index < 0) {
        this.index = this.slidesCount -1
      }
      this.slideTimer()
    },
    slideTimer() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {this.slideNext()}, 8000)
    }
  }
}
</script>

<style scoped>
  .carousel {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 400px;
    transition: all 0.2s ease-in-out;
  }
  .carousel svg {
    position: absolute;
    top: calc(50% - 16px);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    opacity: 0;
  }
  .carousel .slidePrev {
    left: -35px;
  }
  .carousel .slideNext {
    right: -35px;
  }
  .carousel:hover svg {
    opacity: 1;
  }
  .carousel:hover .slidePrev{
    left: 35px;
  }
  .carousel:hover .slideNext {
    right: 35px;
  }
  .carousel__pagination {
    position: absolute;
    bottom: 30px;
    margin: 0 auto;
  }
  .carousel__pagination span {
    display: inline-block;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.5;
    margin: 5px;
  }
  .carousel__pagination span.active {
    background-color: #1faf8e;
    opacity: 1;
    transition: all 1s ease-in-out;
  }
  @media screen and (min-width:1920px) {
    .carousel div{
      width: 100%;
    }
  }
  @media screen and (max-width: 650px) {
    .carousel {
      height: 300px;
    }
    .carousel svg {
      width: 25px;
      height: 25px;
      top: calc(50% - 12px);
    }
    .carousel:hover .slidePrev {
      left: 15px;
    }
    .carousel:hover .slideNext {
      right: 15px;
    }
  }
  @media screen and (max-width: 499px) {
    svg {
      display: none;
    }
  }
</style>