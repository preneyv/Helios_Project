import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import FilActu from './views/FilActu.vue'
import MonProfil from './views/MonProfil.vue'
import Agenda from './views/Agenda.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Helios',
        metaTags: [
          {
            title: 'Helios',
            content: "Page d'accueil de l'application Helios"
          }
        ]
      }
    },
    {
      path: '/fil-actu',
      name: 'filActu',
      component: FilActu
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/mon-profil',
      name: 'profil',
      component: MonProfil
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/mon-agenda',
      name: 'agenda',
      component: Agenda
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }

  ]
})
