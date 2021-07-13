<template>

   <v-app>
    <div v-if="error">
      <h1>error</h1>
    </div>
    <div v-if="loading">
      <v-progress-linear indeterminate color="primary"></v-progress-linear>
    </div>
    <v-container>

   
    <div class="custom__overflow" >
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
                  >Hausa Abubakar Gumi |
                  <v-btn
                    text
                    color="orange lighten-2"
                    class="text-icon"
                    small
                    @click="getTranslations(item.verse_key)"
                    >see tafseer
                    <v-icon color="" small>mdi-arrow-right</v-icon>
                  </v-btn>
                  <!-- <Translation :action=" /> -->
                </span>
              </div>
              <div v-for="(trans, index) in hausaTran" :key="index">
                <span v-show="!show && currentTafsir == item.verse_key"> {{ trans.text }}</span>
              </div>
              <div class="mt-5">
                <v-divider></v-divider>
                <v-divider></v-divider>
              </div>
              <div class="d-flex align-start justify-start mt-3">
                <v-btn icon @click="like(item)" v-bind:color="type === 1 ? 'error' : 'gray'">
                  <v-icon small>mdi-heart</v-icon>
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
    </v-container>
   </v-app>
</template>
<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  data: () => ({
    surahs: {},
    number: "",
    show: true,
    currentTafsir: null,
    type:2,
    loading: true,
    error: false,
    ayahs: [],
    hausaTran: "",
  }),
  methods: {
    like(item) {
      if (!this.isAuthenticated) return this.$router.push("/login");

      const likesData = {
        id: item.id,
        verse_key: item.verse_key,
        verse_number: item.verse_number,
        arabic_verse: item.text_uthmani,
      };
      console.log(likesData);

      // this.$store.dispatch("createLike", likesData);
      // this.type = 1;
    },
    getChapters() {
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
    },

    getTranslations(key) {
      this.id = this.$route.params.id;

      axios
        .get(
          ` https://api.quran.com/api/v4/quran/translations/32?chapter_number=${this.id}&verse_key=${key}`
        )
        .then((res) => {
          this.hausaTran = res.data.translations;
          console.log(res.data);
        })
        .catch((e) => console.log(e))
        .finally(() => ((this.loading = false), (this.show = false), (this.currentTafsir = key)));
    },
  },

  mounted() {
    this.getChapters();
    this.getTranslations();
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
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
