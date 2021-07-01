<template>
  <div>
    <div v-if="error">
      <h1>error</h1>
    </div>
    <div v-if="loading">
      <v-progress-linear indeterminate color="primary"></v-progress-linear>
    </div>
    <div class="custom__overflow" v-else>
      <v-card
        v-for="item in surahs"
        :key="item.id"
        rounded="lg"
        flat
        outlined
        class="my-2"
      >
        <v-card-text class="pa-10">
          <v-row>
            <div>
              <span class="primary--text">{{ item.verse_key }}</span>
            </div>
            <v-spacer></v-spacer>
            <div>
              <span class="text-h5"> {{ item.text_uthmani }} </span>
            </div>
          </v-row>
          <v-row>
            <v-col class="px-0">
              <div>
                <span class="primary--text"
                  >English Sahih Ibnu-Khasir |<v-btn
                    text
                    color="orange lighten-2"
                    class="text-icon"
                    small
                    >see tafseer
                    <v-icon color="" small>mdi-arrow-right</v-icon>
                  </v-btn></span
                >
              </div>
              <div v-for="item in hausaTran" :key="indexOf(item.resource_id) "   >
                 {{item}} 
              </div>
              <div class="mt-5">
                <v-divider></v-divider>
                <v-divider></v-divider>
              </div>
              <div class="d-flex align-start justify-start mt-3">
                <v-btn icon>
                  <v-icon small>mdi-heart-outline</v-icon>
                </v-btn>
                <!-- <vuetify-audio :file="file" color="gray" :ended="audioFinish" downloadable flat class="pa-0 ma-0"></vuetify-audio> -->
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
  </div>
</template>
<script>
import axios from "axios";
export default {
  // components: {
  //   VuetifyAudio: () => import("vuetify-audio"),
  // },
  data: () => ({
    surahs: {},
    file: "http://www.hochmuth.com/mp3/Boccherini_Concerto_478-1.mp3",

    number: "",
    show: true,
    loading: true,
    error: false,
    ayahs: [],
    hausaTran: "",
  }),
  methods: {
    
  },
  

  mounted() {
    this.id = this.$route.params.id;

    axios
      .get(
        ` https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${this.id}`
      )
      .then((response) => {
        this.surahs = response.data.verses;

        console.log(response.data.verses);
      })
      .catch((e) => {
        (this.error = true), console.log(e);
      });
  
    axios
      .get(
        ` https://api.quran.com/api/v4/quran/translations/32?chapter_number=${this.id}` 
      )
      .then((res) => {
        this.hausaTran = res.data.translations;
        console.log(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => ((this.loading = false), (this.show = false)));
  },
};
</script>

<style scoped>
.custom__overflow {
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 800px;
}
</style>
