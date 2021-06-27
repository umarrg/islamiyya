<template>
  <div>
    <v-card
      v-for="item in surahs"
      :key="item.id"
      rounded="lg"
      flat
      class="my-2"
    >
      <v-card-text class="pa-10">
        <v-row>
          <div>
            <span class="teal--text">1: {{ item.position }}</span>
          </div>
          <v-spacer></v-spacer>
          <div>
            <span class="black--text"> {{ item.text }} </span>
          </div>
        </v-row>
        <v-row>
          <v-col class="px-0">
            <div>
              <span class="teal--text"
                >English Sahih International |<v-btn
                  text
                  color="orange lighten-2"
                  class="text-icon"
                  small
                  >see tafseer
                  <v-icon color="" small>mdi-arrow-right</v-icon>
                </v-btn></span
              >
            </div>
            <div>
              <span class="black--text"
                >In the Name of Allah—the Most Compassionate, Most Merciful.
              </span>
            </div>
            <div class="mt-5">
              <v-divider></v-divider>
              <v-divider></v-divider>
            </div>
            <div class="d-flex align-start justify-start mt-3">
              <v-btn icon>
                <v-icon small>mdi-heart-outline</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-motion-play-outline</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    surahs: {},
    number: "",
    surah: null,
    ayahs: [],
  }),

  created() {
    axios
      .get(
        " https://api.quran.com/api/v4/verses/by_chapter/1?language=ur&words=true&page=1&per_page=10"
      )
      .then((response) => {
        this.surahs = response.data.verses;

        console.log(response.data.verses);
      });
    // setTimeout(() => {
    //   this.$router.push({ path: "/quran/1" });
    // }, 1000);
  },
};
</script>
