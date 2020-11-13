import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/daping'
  },
  {
    path: '/daping',
    name: 'DaPing',
    component: () => import( '../views/DaPing//DaPing')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
