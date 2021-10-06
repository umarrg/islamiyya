import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      showHeader: false,
    },
    children: [
      {
        path: "",
        name: "Chat",
        component: () => import("../components/quran.vue"),
        meta: {
          showHeader: false,
        },
      },
      {
        path: "/quran/:id",
        name: "QuranView",
        component: () => import("../components/quranView.vue"),
        meta: {
          showHeader: false,
        },
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      showHeader: true,
    },
  },

  {
    path: "/quran",
    name: "Quran",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Quran.vue"),
    meta: {
      showHeader: false,
    },
  },

  {
    path: "/hadith",
    name: "Hadith",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Hadith.vue"),
    meta: {
      showHeader: true,
    },
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
