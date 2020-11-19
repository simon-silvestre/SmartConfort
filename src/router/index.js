import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../views/Accueil.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/alarme',
    name: 'alarme',
    
    component: () => import('../views/Alarme.vue')
  },
  {
    path: '/video',
    name: 'video',
    
    component: () => import('../views/Video.vue')
  },
  {
    path: '/domotique',
    name: 'domotique',
    
    component: () => import('../views/Domotique.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    
    component: () => import('../views/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
