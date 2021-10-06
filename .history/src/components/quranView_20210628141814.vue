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
                    @click="tran(item.verse_key)"
                    text
                    color="orange lighten-2"
                    class="text-icon"
                    small
                    >see tafseer
                    <v-icon color="" small>mdi-arrow-right</v-icon>
                  </v-btn></span
                >
              </div>
              <div v-for="item in hausaTran" :key="item.text">
                <span class="" v-show="!show">{{ item.text }} </span>
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
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    surahs: {},
    number: "",
    show: true,
    loading: true,
    error: false,
    ayahs: [],
    hausaTran: "",
  }),
  methods: {
    tran() {
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
  },

  mounted() {
    this.tran();
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
};
</script>

<style scoped>
.custom__overflow {
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 800px;
}
</style>
