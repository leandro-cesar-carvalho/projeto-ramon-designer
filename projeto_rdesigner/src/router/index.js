import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/artworks',
    name: 'Artworks',
    component: () => import(/* webpackChunkName: "about" */ '../views/Artworks.vue')
  },
  {
    path: '/logos',
    name: 'Logos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Logos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
