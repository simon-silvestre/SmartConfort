<template>
  <div class="Mobile_nav">
    <div class="header_bar">
        <img src="../assets/logo_smartconfort.webp" alt="Logo entreprise">
        <img src="@/assets/menu_icon.webp" alt="icon menu hamburger" @click="showNav = !showNav">
    </div>
    <nav @click="showNav = !showNav" :class="{'open':showNav}">
      <router-link to="/">Accueil</router-link> 
      <router-link to="/alarme">Alarme</router-link>
      <router-link to="/video">VideoProtection</router-link>
      <router-link to="/domotique">Domotique</router-link>
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
    height: auto;
  }
  .header_bar img:nth-child(2) {
    width: 20px;
    height: auto;
    cursor: pointer;
  }
  .Mobile_nav nav {
    position: absolute;
    width: 75%;
    height: 220px;
    max-height: 0;
    top: 81px;
    padding: 0 3%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #fff;
    transition: all 0.4s ease-in-out;
    border-top: 3px solid #1faf8e;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    visibility: hidden;
  }
  .Mobile_nav nav a {
    width: 80%;
    color: #595959;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    padding: 12px 5%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  }
  .Mobile_nav nav a:hover {
    opacity: 0.7;
    transition: ease-in-out 0.3s;
  }
  .Mobile_nav nav a.router-link-exact-active {
   color: #126451;
  }
  .Mobile_nav .open {
    visibility: visible;
    max-height: 220px;
    padding: 3%;
  }
</style>
