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
            :to="`/quran/${item.englishName}`"
          >
            <v-list dense>
              <v-list-item>
                <v-list-item-avatar size="25">
                  <v-avatar color="teal">
                    <span class="white--text number_text">{{
                      item.id
                    }}</span>
                  </v-avatar>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    <span>{{ item.name_complex }}</span>
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <span>{{ item.translated }}</span>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" md="9">
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
    quran: [],
  }),

  created() {
    axios
      .get(" https://api.quran.com/api/v4/chapters?language=en")
      .then((response) => {
        (this.quran = response.data),
          console.log(response.data);
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
  border: solid 1px teal;
}
</style>
