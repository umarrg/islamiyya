// import Vue from "vue";
// import Vuex from "vuex";

// import router from "../router/index";
// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     userProfile: {},
//     isUserLoggedIn: localStorage.getItem("user") || false,
//     user: JSON.parse(localStorage.getItem("user")) || null,
//     posts: [],
//   },
//   getters: {
//     isAuthenticated: (state) => state.isUserLoggedIn,
//   },
//   mutations: {
//     setUserProfile(state, val) {
//       state.userProfile = val;
//     },
//     setPosts(state, val) {
//       state.posts = val;
//     },
//   },
//   actions: {
//     async login({ dispatch }, form) {
//       // sign user in
//       const { user } = await fb.auth.signInWithEmailAndPassword(
//         form.email,
//         form.password
//       );
//       localStorage.setItem("user", JSON.stringify(user));

//       // fetch user profile and set in state
//       dispatch("fetchUserProfile", user);
//     },
//     async signup({ dispatch }, form) {
//       // sign user up
//       const { user } = await fb.auth.createUserWithEmailAndPassword(
//         form.email,
//         form.password
//       );
//       localStorage.setItem("user", JSON.stringify(user));
//       // create user profile object in userCollections
//       await fb.usersCollection.doc(user.uid).set({
//         name: form.name,
//       });

//       // fetch user profile and set in state
//       dispatch("fetchUserProfile", user);
//     },
//     async fetchUserProfile({ commit }, user) {
//       // fetch user profile
//       const userProfile = await fb.usersCollection.doc(user.uid).get();

//       // set user profile in state
//       commit("setUserProfile", userProfile.data());

//       // change route to dashboard
//       if (router.currentRoute.path === "/login") {
//         router.push("/");
//       }
//       // change route to dashboard
//       if (router.currentRoute.path === "/signUp") {
//         router.push("/");
//       }
//     },

//     async logout({ commit }) {
//       await fb.auth.signOut();

//       commit("setUserProfile", {});
//       router.push("/login");
//       (this.state.user = null), localStorage.clear();
//     },
//   },
//   modules: {},
// });
