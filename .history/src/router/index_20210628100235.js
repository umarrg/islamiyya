import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",/* webpackChunkName: "about" */
    name: "Home",
    component: Home,
    meta: {
      showHeader: false,
    },
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
    component: () => import("../views/Quran.vue"),
    meta: {
      showHeader: false,
    },
    children: [
      {
        path: "",
        name: "Quran",
        component: () => import("../components/quran.vue"),
        meta: {
          showHeader: true,
        },
      },
      {
        path: "/quran/:id",
        name: "QuranView",
        component: () => import("../components/quranView.vue"),
        meta: {
          showHeader: true,
        },
      },
    ],
  },

  {
    path: "/hadith",
    name: "Hadith",
    component: () => import("../views/Hadith.vue"),
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
