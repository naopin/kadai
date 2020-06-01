import Vue from 'vue'
import VueRouter from 'vue-router'
import Information from '../views/Information.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Information',
    component: Information
  },
  {
    path: '/questionary',
    name: 'Questionary',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Questionary.vue')
  },
  {
    path: '/consult',
    name: 'Consult',

    component: () => import('../views/Consult.vue')
  },
  {
    path: '/summary',
    name: 'Summary',
    component: () => import('../views/Summary.vue')
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
