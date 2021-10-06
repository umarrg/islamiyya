<template>
  <div>
    <v-toolbar color="#263238" dark extended flat> </v-toolbar>

    <v-card class="mx-auto" max-width="900" style="margin-top: -64px;">
      <v-toolbar flat>
        <v-spacer></v-spacer>
        <v-toolbar-title class="text-center">
          <span class="custom__title">ISLAMIYYA</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-divider></v-divider>

      <v-card-text>
        <v-row>
          <v-col cols="12" md="4">
            <v-card class="text-center">
              <p>Alqur'an</p>
            </v-card>
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
      },
      {
        title: "Hadith",
        to: "/hadith",
      },
      {
        title: "Fiqhu",
        to: "/hadith",
      },
      {
        title: "Tauhid",
        to: "/tauhid",
      },
    ],
  }),
};
</script>

<style scoped>
.custom__title {
  text-transform: capitalize;
  text-align: center;
  text-decoration: none;
  color: teal;
  font-family: "Times New Roman", Times, serif;
  font-weight: 800;
}
</style>
