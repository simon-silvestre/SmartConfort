<template>
  <div id="app">
    <NavBar v-if="!mobileView" />
    <MobileNav v-if="mobileView" />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import MobileNav from '@/components/NavBarMobile.vue'

export default {
  name: 'Accueil',
  components: {
    NavBar,
    MobileNav
  },
  data() {
    return {
        mobileView: false,
    }
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 830;
    }
  },
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  }
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
  }
  #app {
    font-family: "Open Sans", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateX(2em);
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .3s ease;
  }
</style>
