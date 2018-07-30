import Vue from 'vue'
import Router from 'vue-router'
import Typing from '@/components/Typing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Typing',
      component: Typing
    }
  ]
})
