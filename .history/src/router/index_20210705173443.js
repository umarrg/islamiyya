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
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    meta: {
      showHeader: true,
      requiresAuth: true,
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
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      showHeader: false,
      showAppbar: true,
    },
  },
  {
    path: "/signUp",
    name: "Sign up",
    component: () => import("../views/signUp.vue"),
    meta: {
      showHeader: false,
      showAppbar: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


export default router;
