<template>
  <nav>
    <v-app-bar app dense>
      <v-app-bar-nav-icon
        dark
        small
        @click="drawer = !drawer"
        color="secondary"
      ></v-app-bar-nav-icon>
      <!-- <v-text-field
        prepend-inner-icon="mdi-magnify"
        hide-details
        color="#F5F7F9"
        class="text-input-blue"
        placeholder="Search here for sura, ayah"
      >
        <v-icon slot="prepend-inner" color="teal">
          mdi-magnify
        </v-icon>
      </v-text-field> -->
      <v-spacer></v-spacer>
      <v-btn icon v-if="!$vuetify.theme.dark" @click="toggleTheme()">
        <v-icon class="mr-1" color="blue-grey darken-4">mdi-lightbulb</v-icon>
      </v-btn>
      <v-btn icon v-if="$vuetify.theme.dark" @click="toggleTheme()">
        <v-icon color="yellow darken-3">mdi-lightbulb-outline</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app mini-variant>
      <v-layout align-center class="mb-5">
        <v-flex>
          <router-link to="/">
            <v-sheet color="teal" height="48" class="text-center">
              <v-icon color="white" class="mt-2"
                >mdi-book-open-page-variant</v-icon
              >
            </v-sheet>
          </router-link>
        </v-flex>
      </v-layout>

      <v-list dense nav>
        <v-list-item
          class=""
          active-class="black--text  border"
          v-for="link in links"
          :key="link.icon"
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon color="gray">{{ link.icon }}</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block icon color="#ef6c00" @click="logout()">
           <v-icon color="">mdi-lo</v-icon>
          
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    links: [
      { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
      { icon: "mdi-heart", text: "Map", route: "/likes" },
    ],

    offset: true,
  }),
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },

    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style>
/* .border {
  border-bottom: 1px solid  blue;
} */
.text-input-blue .v-text-field__slot input {
  color: #00f !important;
}
</style>
