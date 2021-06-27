<template>
  <nav>
    <v-app-bar app flat color="white">
      <v-app-bar-nav-icon
        tile
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

        <v-btn to="/profile" v-rounded icon>
          <v-list-item-avatar color="black" class="ml-4">
            <v-img
              src="../assets/bi.png"
              size="30"
            ></v-img>
          </v-list-item-avatar>
        </v-btn> background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3)
  );
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      overlay-opacity=""
      fixed
   
      clipped
      style=" 
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3)
  );
       box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);"
    >
      <v-layout column align-center>
        <v-flex>
          
        </v-flex>
      </v-layout>

      <v-list dense nav>
        <v-list-item
          class=""
          active-class=" brown--text border"
          v-for="link in links"
          :key="link.icon"
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="font-weight-light">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block to="/" outlined>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    links: [
      { icon: "mdi-view-dashboard", text: "Dashboard", route: "/home" },
      { icon: "mdi-map", text: "Map", route: "/map" },
      {
        icon: "mdi-cog-outline",
        text: "Setting",
        route: "/setting",
      },

      { icon: "mdi-credit-card-outline", text: "Payment", route: "/payment" },
      { icon: "mdi-clock", text: "About", route: "/about" },
    ],

    offset: true,
  }),
};
</script>

<style>
.border {
  border-bottom: 8px solid brown;
}
.custom__card {
  color: linear-gradient(to right top, #65dfc9, #6cdbeb);
}
</style>
