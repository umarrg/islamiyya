<template>
  <v-app>
    <div v-if="error">
      <h1>error</h1>
    </div>
    <div v-if="loading">
      <v-progress-linear indeterminate color="primary"></v-progress-linear>
    </div>
    <v-container v-else>
      <div class="custom__overflow">
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
              <div class="text-right">
                <span class="text-h5 "> {{ item.text_imlaei }} </span>
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
                  <span v-show="!show && currentTafsir == item.verse_key">
                    {{ trans.text }}</span
                  >
                </div>
                <div class="mt-5">
                  <v-divider></v-divider>
                  <v-divider></v-divider>
                </div>
                <div class="d-flex align-start justify-start mt-3">
                  <v-btn
                    icon
                    @click="like(item)"
                    v-bind:color="type === 1 ? 'error' : 'gray'"
                  >
                    <v-icon small>mdi-heart</v-icon>
                  </v-btn>

                  <v-btn icon @click="getAudio(item.verse_key)">
                    <v-icon>mdi-motion-play-outline</v-icon>
                  </v-btn>
                  <v-dialog transition="dialog-top-transition" max-width="400">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="" icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-share-variant</v-icon>
                      </v-btn>
                    </template>
                    <template v-slot:default="dialog">
                      <v-card>
                        <div class="d-flex align-center justfy-center">
                          <v-card-title> share to social media</v-card-title>
                          <v-spacer></v-spacer>
                          <v-card-title>
                            <v-btn icon @click="dialog.value = false">
                              <v-icon> mdi-close </v-icon>
                            </v-btn>
                          </v-card-title>
                        </div>
                        <v-card-text>
                          <share-it
                            :text="item.text_imlaei"
                            :targets="[
                              'twitter',
                              'facebook',
                              'whatsapp',
                              'email',
                            ]"
                            dense
                            url="https://www.google.com"
                          >
                            <template v-slot:twitter-icon>
                              <v-icon color="white">mdi-twitter</v-icon>
                            </template>
                            <template v-slot:twitter-label>
                              <em>Tweet it!</em>
                            </template>
                            <template v-slot:whatsapp-icon>
                              <v-icon color="white">mdi-whatsapp</v-icon>
                            </template>

                            <template v-slot:whatsapp-label>
                              <em>Share on Whatsapp</em>
                            </template>
                            <template v-slot:email-icon>
                              <v-icon color="white">mdi-gmail</v-icon>
                            </template>
                          </share-it>
                        </v-card-text>
                      </v-card>
                    </template>
                  </v-dialog>

                  <v-btn
                    icon
                    v-clipboard:copy="item.text_imlaei"
                    v-clipboard:success="onCopy"
                    v-clipboard:error="onError"
                  >
                    <v-icon>mdi-content-copy</v-icon>
                  </v-btn>
                </div>
                <div class="d-flex align-center justify-center">
                  <vuetify-audio
                    v-show="!audio && currentAudio == item.verse_key"
                    flat
                    :file="file"
                    autoPlay
                    color="primary"
                    downloadable
                  ></vuetify-audio>
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
  components: {
    VuetifyAudio: () => import("vuetify-audio"),
  },
  data: () => ({
    surahs: {},
    number: "",
    audio: true,
    file: "",
    show: true,
    currentTafsir: null,
    currentAudio: null,
    type: 2,
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

        arabic_verse: item.text_imlaei,
      };
      console.log(likesData);

      // this.$store.dispatch("createLike", likesData);
      // this.type = 1;
    },
    getChapters() {
      this.id = this.$route.params.id;

      axios
        .get(
          `  https://api.quran.com/api/v4/quran/verses/imlaei?chapter_number=${this.id}`
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
        .finally(
          () => (
            (this.loading = false),
            (this.show = false),
            (this.currentTafsir = key)
          )
        );
    },
    onCopy: function(e) {
      alert("Copied to clipboard: " + e.text);
    },
    onError: function(e) {
      alert("Failed to copy the text to the clipboard");
      console.log(e);
    },

    getAudio(key) {
      (this.audio = true),
        axios
          .get(`http://api.alquran.cloud/v1/ayah/${key}/ar.alafasy`)
          .then((response) => {
            this.file = response.data.data.audio;

            console.log(response.data.data.audio);
          })
          .catch((e) => {
            console.log(e);
          })
          .finally(() => (this.audio = false), (this.currentAudio = key));
    },
  },

  mounted() {
    this.getChapters();
    this.getTranslations();
    this.getAudio();
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
