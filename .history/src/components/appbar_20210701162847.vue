<template>
  <v-app-bar color="background" app outlined>
    <v-app-bar-title class="text-h6"
      ><router-link to="/"> ISLAMIYYA</router-link>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn color="primary" outlined class="mx-2" large text to="/login"
      >Sign in</v-btn
    >
    <v-btn color="primary" large to="/signUp"  >Sign Up</v-btn>
  </v-app-bar>
</template>
