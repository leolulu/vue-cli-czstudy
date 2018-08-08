import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mainpage',
      name: 'mainpage',
      component: () => import('./components/mainpage/mainpage.vue')
    },
    {
      path: '/premire',
      name: 'premire',
      component: () => import('./components/premire/premire.vue')
    },
    {
      path: '/chrt',
      name: 'chrt',
      component: () => import('./components/chrt/chrt.vue')
    },
    {
      path: '/serch',
      name: 'serch',
      component: () => import('./components/serch/serch.vue')
    },
  ]
})
