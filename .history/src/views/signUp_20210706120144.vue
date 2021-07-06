<template>
  <v-app class="custom__bg">
    <v-container fill-height>
      <v-row align="center" justify="center">
        <div class="d-flex justify-center align-center"></div>
        <v-col cols="12" md="12">
          <div class="d-flex justify-center align-center">
            <v-card width="400" rounded="lg">
              <v-card-text>
                <div
                  class="d-flex align-center justify-center
                  "
                >
                  <v-divider></v-divider>
                  <span class="mx-2 subtitle-1 secondary--text"
                    >Create Account</span
                  >
                  <v-divider></v-divider>
                </div>
                <v-form @submit.prevent ref="form">
                  <v-col cols="12" md="12">
                    <v-text-field
                      outlined
                      placeholder="Name"
                      v-model="name"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12">
                    <v-text-field
                      outlined
                      placeholder="Email"
                      v-model="email"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" class="py-0">
                    <v-text-field
                      outlined
                      placeholder="Password"
                      v-model="password"
                    ></v-text-field>
                  </v-col>
                </v-form>

                <v-col cols="12" md="12" class="py-0">
                  <v-btn
                    block
                    :loading="signInMetaData.signInLoading"
                    :disabled="signInMetaData.signInDisabled"
                    large
                    class="text-capitalise"
                    color="primary"
                    @click="signUp()"
                    >Sign Up</v-btn
                  >
                </v-col>

                <v-col cols="12" md="12" class="py-3">
                  <div
                    class="d-flex align-center justify-center
                  "
                  >
                    <v-divider></v-divider>
                    <span class="mx-2 custom__t">OR SIGN UP WITH</span>
                    <v-divider></v-divider>
                  </div>
                </v-col>
                <v-col cols="12" md="12" class="py-0">
                  <div class="d-flex align-center justify-center text-wrap">
                    <v-btn
                      outlined
                      color="primary"
                      class="px-10 mx-2"
                      v-for="item in icon"
                      :key="item"
                    >
                      <v-icon> {{ item }}</v-icon>
                    </v-btn>
                  </div>
                </v-col>
              </v-card-text>
            </v-card>
          </div>
          <v-snackbar
          bottom
          color="red"
          timeout="5000"
          v-model="signUpMetaData.signUpErrorSnackbar"
        >
          {{ signUpMetaData.signUpErrorPayload }}
        </v-snackbar>
        </v-col>
        
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    icon: ["mdi-facebook", "mdi-twitter", "mdi-google"],
    email: "",
    password: "",
    name: "",
  }),
  methods: {
    signUp() {
      const signUpData = {
        email: this.email,
        password: this.password,
        name: this.name,
      };

      this.$store.dispatch("SIGN_UP", signUpData);
    },
  },
  computed: {
    signUpMetaData() {
      return this.$store.state.signUp;
    },
  },
};
</script>

<style scoped>
.custom__bg {
  background: #f2f5f8;
}
.custom__bt {
  text-decoration-line: underline;
}
.custom__text {
  font-size: 12px;
  text-decoration-line: underline;
  color: blue;
}
.custom__t {
  font-size: 11px;
}
</style>
