<template>
  <v-app class="custom__bg">
    <v-container class="">
      <v-row>
        <v-col cols="12" md="3">
          <v-card
            v-for="item in quran"
            :key="item.number"
            class="my-2"
            rounded="lg"
            flat
            active-class="border"
            :to="`/quran/${item.number}`"
          >
            <v-list dense>
              <v-list-item>
                <v-list-item-avatar size="25">
                  <v-avatar color="teal">
                    <span class="white--text number_text">{{
                      item.number
                    }}</span>
                  </v-avatar>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    <span>{{ item.englishName }}</span>
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <span>{{ item.englishNameTranslation }}</span>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" md="9">
          <!-- <v-card rounded="lg" flat class="my-2">
            <v-card-text class="pa-10">
              <v-row>
                <div>
                  <span class="teal--text">1:1</span>
                </div>
                <v-spacer></v-spacer>
                <div>
                  <span>بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ </span>
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
                    <span
                      >In the Name of Allah—the Most Compassionate, Most
                      Merciful.
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
          </v-card> -->
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    quran: "",
  }),
  methods: {
    setId(value) {
      this.id = value;
    },
  },
  
  mounted() {
    axios
      .get("http://api.alquran.cloud/v1/quran/quran-uthmani")
      .then((response) => {
        (this.quran = response.data.data.surahs),
          console.log(response.data.data.surahs);
      });
  },
};
</script>
<style scoped>
.custom__bg {
  background: #f4f5f9;
}
.number_text {
  font-size: 10px;
}
.border {
  border: solid 2px teal;
}
</style>
