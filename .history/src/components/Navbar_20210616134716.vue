<template>
  <nav>
    <v-app-bar app color="white">
      <v-app-bar-nav-icon
        dark
        small
        @click="drawer = !drawer"
        class="black--text "
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <div>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon small class="mr-2" v-on="on" v-bind="attrs">
              <v-icon color="black">mdi-cog-outline</v-icon>
            </v-btn>
          </template>
        </v-menu>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app mini-variant>
      <v-layout align-center>
        <v-flex> </v-flex>
      </v-layout>
      
       
      <v-list dense nav>
         
        <v-list-item
          class=""
          active-class="  border"
          v-for="link in links"
          :key="link.icon"
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
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
.border {
  border-bottom: 1px solid brown;
}
.custom__card {
  color: linear-gradient(to right top, #65dfc9, #6cdbeb);
}
</style>
