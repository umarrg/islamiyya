<template>
  <v-app class="custom__bg">
    <v-container fill-height>
      <v-row align="center" justify="center\">
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
                  <span class="mx-2 subtitle-1">Sign in</span>
                  <v-divider></v-divider>
                </div>

                <v-col cols="12" md="12">
                  <v-text-field outlined placeholder="Email"></v-text-field>
                </v-col>
                <v-col cols="12" md="12" class="py-0">
                  <v-text-field outlined placeholder="Password"></v-text-field>
                </v-col>
                <v-col cols="12" md="12" class="py-0">
                  <v-checkbox
                    label="Remember me"
                    class="ma-0"
                    v-model="value"
                    value="value"
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" md="12" class="py-0">
                  <v-btn block large class="text-capitalise" color="primary"
                    >Sign In</v-btn
                  >
                </v-col>
                <v-col cols="12" md="12">
                  <div class="d-flex align-center justify-center">
                    <v-btn
                      text
                      small
                      class="custom__bt text-capitalise"
                      color="blue"
                    >
                      forgot password?
                    </v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="12" class="py-0">
                  <div
                    class="d-flex align-center justify-center
                  "
                  >
                    <v-divider></v-divider>
                    <span class="mx-2">OR SIGN IN WITH</span>
                    <v-divider></v-divider>
                  </div>
                </v-col>
                <v-col cols="12" md="12" class="py-0">
                  <div class="d-flex align-center justify-center text-wrap">
                    <v-btn
                      outlined
                      class="px-10 mx-2"
                      v-for="item in icon"
                      :key="item"
                    >
                      <v-icon> {{ item.name }}</v-icon>
                    </v-btn>
                  </div>
                </v-col>
              </v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    icon: ["mdi-facebook", "mdi-twitter", "mdi-google"],
  }),
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
</style>
