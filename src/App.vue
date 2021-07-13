<template>
  <v-app>
    <navbar v-if="$route.meta.showHeader == true"/>
    <Appbar v-else />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Appbar from '../src/components/appbar.vue'
import navbar from '../src/components/navbar'
export default {
  name: 'App',

  components: {
   navbar,
   Appbar,
  },

  data: () => ({
    //
  }),
};
</script>
