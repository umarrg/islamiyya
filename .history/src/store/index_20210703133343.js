import Vue from "vue";
import Vuex from "vuex";
import * as fb from "../firebase";
import router from "../router/index";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userProfile: {},
    isUserLoggedIn: localStorage.getItem("user") || false,
   
  },
  getters: {
    isAuthenticated: (state) => state.isUserLoggedIn,
  },
  mutations: {
   
    setUserProfile(state, val) {
      state.userProfile = val;
    },
  },
  actions: {
    async login({ dispatch }, form) {
      // sign user in
      const { user } = await fb.auth.signInWithEmailAndPassword(
        form.email,
        form.password
      );
      localStorage.setItem("user", JSON.stringify(user));

      // fetch user profile and set in state
      dispatch("fetchUserProfile", user);
    },
    async signup({ dispatch }, form) {
      // sign user up
      const { user } = await fb.auth.createUserWithEmailAndPassword(
        form.email,
        form.password
      );
      localStorage.setItem("user", JSON.stringify(user));
      // create user profile object in userCollections
      await fb.usersCollection.doc(user.uid).set({
        name: form.name,
      });

      // fetch user profile and set in state
      dispatch("fetchUserProfile", user);
    },
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get();

      // set user profile in state
      commit("setUserProfile", userProfile.data());

      // change route to dashboard
      if (router.currentRoute.path === "/login") {
        router.push("/");
      }
      // change route to dashboard
      if (router.currentRoute.path === "/signUp") {
        router.push("/");
      }
    },
    async logout({ commit }) {
      await fb.auth.signOut();

      // clear userProfile and redirect to /login
      commit("setUserProfile", {});
      router.push("/login");
      localStorage.clear()
    },
  },
  modules: {},
});
