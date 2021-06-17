import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FilActu from './views/FilActu.vue'
import ProfileInfo from './components/ProfileInfo.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/fil-actu',
      name: 'filActu',
      component: FilActu
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/my-profil',
      name: 'profil',
      component: ProfileInfo
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }

  ]
})
