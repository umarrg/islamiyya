<template>
  <v-app>
    <navbar v-if="$route.meta.showHeader == true"/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import navbar from '../src/components/Navbar'
export default {
  name: 'App',

  components: {
   navbar
  },

  data: () => ({
    //
  }),
};
</script>
