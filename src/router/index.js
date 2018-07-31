import Vue from 'vue'
import Router from 'vue-router'
import Typing from '@/components/Typing'
import Result from '@/components/Result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Typing',
      component: Typing
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    }
  ]
})
