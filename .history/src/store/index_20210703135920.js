import Vue from "vue";
import Vuex from "vuex";
import * as fb from "../firebase";
import router from "../router/index";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userProfile: {},
    isUserLoggedIn: localStorage.getItem("user") || false,
    user: JSON.parse(localStorage.getItem("user")) || null,
    signUp: {
      signUpLoading: false,
      signUpDisabled: false,
      signUpErrorSnackbar: false,
      signUpErrorPayload: null,
    },
  },
  getters: {
    isAuthenticated: (state) => state.isUserLoggedIn,
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val;
    },
    registerUser(state, userData) {
      state.signUp.signUpLoading = true;
      state.signUp.signUpDisabled = true;
      state.user = userData.user;
    },

    signUpError(state, error) {
      state.signUp.signUpErrorSnackbar = true;
      state.signUp.signUpErrorPayload = error;
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
    async signup({ commit }, form) {

      // sign user up
      commit('startLoader')
      const { user } = await fb.auth.createUserWithEmailAndPassword(
        form.email,
        form.password
      );
      if (user === 'failed') {
        commit('signInError', user.message)
        commit('stopLoader')
      } else {
        commit('registerUser', { user: user })
        commit('SignUpSuccessful')
        commit('stopLoader')
      }
    
      
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
      (this.state.user = null), localStorage.clear();
    },
  },
  modules: {},
});
