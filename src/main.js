import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollReveal from 'vue-scroll-reveal';
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(VueScrollReveal);
Vue.use(Vue2TouchEvents)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
