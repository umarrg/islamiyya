<template>
  <div>
    <v-toolbar extended color="primary">
      <v-toolbar-title>
        <v-switch
        v-model="$vuetify.theme.dark"
        hint="This toggles the global state of the Vuetify theme"
        inset
        label="Vuetify Theme Dark"
        persistent-hint
      ></v-switch>
      </v-toolbar-title>
    </v-toolbar>

    <v-card
      class="mx-auto"
      max-width="900"
      style="margin-top: -64px;"
      color="#F5F7F9"
    >
      <v-toolbar flat color="#F5F7F9">
        <v-spacer></v-spacer>
        <v-toolbar-title class="text-center">
          <span class="custom__title">ISLAMIYYA</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-divider></v-divider>

      <v-card-text>
        <v-row>
          <v-col cols="12" md="4" v-for="item in items" :key="item.title">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card
                  class="text-center pa-5"
                  :to="item.to"
                  rounded="lg"
                  :elevation="hover ? 15 : 6"
                >
                  <p class=" text-h6">{{ item.title }}</p>
                </v-card>
              </template>
            </v-hover>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "Alquran",
        to: "/quran",
        color: "#004D40",
      },
      {
        title: "Hadith",
        to: "/hadith",
        color: "#EF6C00",
      },
      {
        title: "Fiqhu",
        to: "/hadith",
        color: "#4E342E",
      },
      {
        title: "Tauhid",
        to: "/tauhid",
        color: "#424242",
      },
      {
        title: "Sirah",
        to: "/sirah",
        color: "#BF360C",
      },
      {
        title: "Arabiyya",
        to: "/arabiyya",
        color: "#2E7D32",
      },
    ],
  }),
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>

<style scoped>
.custom__title {
  text-transform: capitalize;
  text-align: center;
  text-decoration: none;
  color: #004d40;
  font-family: "Times New Roman", Times, serif;
  font-weight: 800;
}
</style>
