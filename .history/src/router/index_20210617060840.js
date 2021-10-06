import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      showHeader: true,
    },
    children: [
      {
        path: '', name: 'Chat', component: () => import('../components/quran.vue'), meta: {
          showHeader: true,
         
        },
      },
      {
        path: '/chat/:id',
        name: 'ChatCentre',
        component: () => import('../components/quranView.vue'),
        meta: {
          showHeader: true,
         
        },
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      showHeader: true,
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
