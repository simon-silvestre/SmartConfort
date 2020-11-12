<template>
  <div class="Mobile_nav">
    <div class="header_bar">
        <img src="../assets/logo_smartconfort.webp" alt="Logo entreprise">
        <img src="@/assets/menu_icon.webp" @click="showNav = !showNav">
    </div>
    <nav :class="{'open':showNav}">
      <router-link to="/">Accueil</router-link> 
      <router-link to="/services">Nos Services</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Mobile_navMobile',
  data() {
      return {
          showNav: false
      }
  }
}
</script>

<style scoped>
  .Mobile_nav {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
    z-index: 100;

  }
  .header_bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 80%;
  }
  .header_bar img:first-child {
    width: 100px;
  }
  .header_bar img:nth-child(2) {
    width: 20px;
    cursor: pointer;
  }

  .Mobile_nav nav {
    position: absolute;
    width: 75%;
    height: 130px;
    top: 81px;
    padding: 3%;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    background-color: #fff;
    border-top: 3px solid #05aeea;
    z-index: 101;
    transition: All 1s ease-in-out;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  .Mobile_nav nav a {
    width: 80%;
    color: #666666;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    padding: 10px 5%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  }
  .Mobile_nav nav span {
    position: absolute;
    top: 20px;
    left: 25px;
    color: #05aeea;
    font-weight: 900;
    font-size: 20px;
    cursor: pointer;
  }
  .Mobile_nav nav a:hover {
    opacity: 0.7;
    transition: ease-in-out 0.3s;
  }
  .Mobile_nav nav a.router-link-exact-active {
   color: #05aeea;
  }
  .Mobile_nav .open {
    display: flex;
  }
</style>
