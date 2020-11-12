<template>
  <div id="app">
    <NavBar v-if="!mobileView" />
    <MobileNav v-if="mobileView" />
    <router-view />
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
      this.mobileView = window.innerWidth <= 650;
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
  }
  #app {
    font-family: "Open Sans", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
