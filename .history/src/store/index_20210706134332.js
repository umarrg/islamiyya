import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token") || null,
    user: JSON.parse(localStorage.getItem("user")) || null,
    isUserLoggedIn: localStorage.getItem("token") || false,
    signIn: {
      signInLoading: false,
      signInDisabled: false,
      signInErrorSnackbar: false,
      signInErrorPayload: null,
      signInSuccessSnackbar: false,
      signInSuccessPayload: null,
    },
    signUp: {
      signUpLoading: false,
      signUpDisabled: false,
      signUpErrorSnackbar: false,
      signUpErrorPayload: null,
    },

    likes: [],
  },
  getters: {
    getToken: (state) => state.token,
    isAuthenticated: (state) => state.isUserLoggedIn,
    currentUser: (state) => state.user,
    getLikes: (state) => state.likes,
  },
  mutations: {
    SET_LIKES(state, likes) {
      state.likes = likes;
    },

    setToken(state, token) {
      state.token = token;
      if (token) {
        state.isUserLoggedIn = true;
      } else {
        state.isUserLoggedIn = false;
      }
    },
    loginUser(state, userData) {
      state.token = userData.token;
      state.user = userData.user;
    },
    registerUser(state, userData) {
      state.signUp.signUpLoading = true;
      state.signUp.signUpDisabled = true;
      state.user = userData.user;
    },

    createLike(state, likeData) {
      state.likes.data = likeData;
    },
    signOut(state) {
      state.user = null;
      state.token = null;
      state.refreshToken = null;
      localStorage.clear();
    },
    startLoader(state) {
      state.signIn.signInLoading = true;
      state.signIn.signInDisabled = true;
    },
    stopLoader(state) {
      state.signIn.signInLoading = false;
      state.signIn.signInDisabled = false;
    },

    SignUpSuccessful(state) {
      state.step = 3;
    },
    signInError(state, error) {
      state.signIn.signInErrorSnackbar = true;
      state.signIn.signInErrorPayload = error;
    },
    signUpError(state, error) {
      state.signUp.signUpErrorSnackbar = true;
      state.signUp.signUpErrorPayload = error;
    },
    signInSuccess(state, payload) {
      state.signIn.signInSuccessSnackbar = true;
      state.signIn.signInSuccessPayload = payload;
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit("setToken", token);
      localStorage.setItem("token", token);
    },

    fetchLikes({ commit }, userId) {
      return fetch(
        `https://ancient-meadow-78729.herokuapp.com/api/v1/like/${userId}`,
        {
          method: "get",
          headers: {
            "content-type": "application/json",
          },
        }
      )
        .then((r) => r.json())
        .then((response) => {
          commit("SET_LIKES", response.payload);
        })
        .catch((error) => console.log("Error>>>", error));
    },

    SIGN_IN({ commit }, authData) {
      commit("startLoader");
      fetch("https://ancient-meadow-78729.herokuapp.com/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: authData.email,
          password: authData.password,
        }),
      })
        .then((r) => r.json())
        .then((response) => {
          //status failed or false
          if (response.status === "failed") {
            commit("stopLoader");
            commit("signInError", response.message);
          } else {
            const { token, user } = response.payload;
            commit("loginUser", {
              token: token,
              user: user,
            });
            commit("signInSuccess", response.message);

            localStorage.setItem("token", response.payload.token);
            localStorage.setItem("user", JSON.stringify(response.payload.user));
            if (user.userType === "user") {
              router.back();
            }

            commit("stopLoader");
          }
        })
        .catch((error) => {
          console.log("Error>>>", error);
          commit("signInError", error);
          commit("stopLoader");
        });
    },
    SIGN_UP({ commit }, authData) {
      const data = {
        name: authData.name,
        email: authData.email,
        password: authData.password,
      };
      commit('startLoader')
      fetch("https://ancient-meadow-78729.herokuapp.com/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((r) => r.json())
        .then((response) => {
          if (response.status === "failed") {
            commit("signUpError", response.message);
            commit("stopLoader");
            console.log("error");
          } else {
            commit("registerUser", { user: response.payload });
            commit("SignUpSuccessful");
            commit("stopLoader");
          }
          router.push('/')
        })

        .catch((error) => {
          console.log("Error>>>>>>>>>>>>>", error);
          commit("signUpError", error);
        });
    },

    createLike({ commit }, likesData) {
      const data = {
        verse_key: likesData.verse_key,
        verse_number: likesData.verse_number,
        id: likesData.id,
        arabic_text: likesData.text_uthmani,
       
      };

      fetch("https://ancient-meadow-78729.herokuapp.com/api/v1/like/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((r) => r.json())
        .then((response) => {
          if (response.status === "failed") {
            console.log("error");
          } else {
            commit("createLike", response.payload);
          }
        })

        .catch((error) => {
          console.log("Error>>>>>>>>>>>>>", error);
        });
    },

    logout({ commit }) {
      commit("user", {});
      router.push("/login");
      (this.state.user = null), localStorage.clear();
    },
  },

  modules: {},
});

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
