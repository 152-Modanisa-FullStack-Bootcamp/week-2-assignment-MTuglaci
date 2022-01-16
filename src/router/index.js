import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Favorite from '../views/Favorite.vue'
import Watch from "@/components/Watch";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favorites/:userID',
    name: 'Favorite',
    // route level code-splitting
    // this generates a separate chunk (favorite.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Favorite
  },
  {
    path: '/watch',
    name: 'Watch',
    // route level code-splitting
    // this generates a separate chunk (favorite.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Watch
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
