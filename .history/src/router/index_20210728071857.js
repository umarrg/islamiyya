import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
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
    path: "/",
    name: "Quran",
    component: () => import("../views/Quran.vue"),
    meta: {
      showHeader: false,
    },
   
  },

  {
    path: "/quran/:id",
    name: "Quran",
    component: () => import("../components/quranView.vue"),
    meta: {
      showHeader: true,
      showAppbar: false,
    },
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
      showAppbar: false,
    },
  },
  {
    path: "/signUp",
    name: "Sign up",
    component: () => import("../views/SignUp.vue"),
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
