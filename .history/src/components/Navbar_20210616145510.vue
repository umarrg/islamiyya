<template>
  <nav>
    <v-app-bar app color="#F5F7F9" dense>
      <!-- <v-app-bar-nav-icon
        dark
        small
        @click="drawer = !drawer"
        class="black--text "
      ></v-app-bar-nav-icon> -->
      <v-text-field prepend-inner-icon="mdi-magnify" hide-details>

           <v-icon slot="prepend" color="teal">
          format_color_fill
       </v-icon>
      </v-text-field>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app mini-variant color="#F5F7F9">
      <v-layout align-center class="mb-5">
        <v-flex>
          <v-sheet color="teal" height="48" class="text-center">
            <v-icon color="white" class="mt-2"
              >mdi-book-open-page-variant</v-icon
            >
          </v-sheet>
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
        <div class="pa-2"></div>
      </template>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    links: [
      { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
      { icon: "mdi-map", text: "Map", route: "/about" },
    ],

    offset: true,
  }),
};
</script>

<style>
/* .border {
  border-bottom: 1px solid  blue;
} */
.custom__card {
  color: linear-gradient(to right top, #65dfc9, #6cdbeb);
}
</style>
