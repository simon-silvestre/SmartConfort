<template>
  <div class="NavBar">
    <img src="../assets/logo_smartconfort.webp">
    <router-link to="/">Accueil</router-link> 
    <router-link to="/services">Nos Services</router-link>
    <router-link to="/contact">Contact</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
  .NavBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;

    width: 100%;
    height: 80px;
    border-bottom: 1px solid #e5e5e5;
  }
  .NavBar img {
    width: 135px;
    margin-left: 25px;
  }
</style>
