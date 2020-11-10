<template>
  <div class="NavBar">
    <img src="../assets/logo_smartconfort.webp">
    <nav>
      <router-link to="/">Accueil</router-link> 
      <router-link to="/services">Nos Services</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
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
    height: 90px;
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
    z-index: 100;
  }
  .NavBar img {
    width: 135px;
    margin-left: 25px;
  }
  .NavBar nav {
    margin-right: 25px;
  }
  .NavBar nav a {
    margin: 0 15px;
    color: #666666;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
  }
  .NavBar nav a:hover {
    opacity: 0.7;
    transition: ease-in-out 0.3s;
  }
  .NavBar nav a.router-link-exact-active {
   color: #05aeea;
  }
</style>
