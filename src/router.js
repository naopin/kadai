import Vue from 'vue'
import Router from 'vue-router'
import Questionary from './components/Questionary.vue';
import Consult from './components/Consult.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/ques',
      component: Questionary
    },
    {
        path: '/con',
        component: Consult
      }

  ]
})