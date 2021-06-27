<template>
  <div   class="custom__overflow">
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
            <span class="teal--text">{{ item.verse_key }}</span>
          </div>
          <v-spacer></v-spacer>
          <div>
            <span class="black--text"> {{ item.text_uthmani }} </span>
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
            <div v-for="item in hausaTran" :key="item.verse_key">
              <span class="black--text"
                >{{item.text}}
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
    id: "",
    ayahs: [],
    hausaTran: "",
  }),
  methods: {
    setSurahs(value) {
      this.id = value;
    },
  },
  watch: {
    "$route.params.id": function(id) {
      this.setSurahs(id);

      console.log(id);
    },
  },
  mounted() {
    this.id = this.$route.params.id;
     this.key = this.surahs.verse_key;
    axios
      .get(
        ` https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${this.id}`
      )
      .then((response) => {
        this.surahs = response.data.verses;

        console.log(response.data);
      }).catch(e => console.log(e));
     

      axios.get(` https://api.quran.com/api/v4/quran/translations/32?chapter_number=${this.id}&verse_key=${this.key}`).then((res) => {
        this.hausaTran = res.data.translations;
        console.log(res.data);
      }).catch(e => console.log(e));
  },
};
</script>

<style scoped>
.custom__overflow {
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 800px
}
</style>
