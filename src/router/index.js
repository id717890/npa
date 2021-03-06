import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Glister',
    component: () => import('../views/Glister.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/body',
    name: 'Body',
    component: () => import('../views/Body.vue')
  },
  {
    path: '/hair',
    name: 'Hair',
    component: () => import('../views/Hair.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
