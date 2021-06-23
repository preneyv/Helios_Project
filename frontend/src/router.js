
import { createRouter, createWebHistory } from "vue-router"
import Home from './views/Home.vue'
import NewsFeed from './views/NewsFeed.vue'
import MyProfil from './views/MyProfil.vue'
import Agenda from './views/Agenda.vue'


const routes = [
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
      component: NewsFeed
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/mon-profil',
      name: 'profil',
      component: MyProfil
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/mon-agenda',
      name: 'agenda',
      component: Agenda
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }

  ]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
