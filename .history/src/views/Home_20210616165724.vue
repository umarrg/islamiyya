<template>
  <v-app class="custom__bg">
    <v-container class="mx-1">
      <v-row>
        <v-col cols="3">
          <v-card
            v-for="item in quran"
            :key="item.number"
            class="my-2"
            rounded="lg"
            flat
            active-class="border"
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
        <v-col cols="6"> 

          <v-card rounded="lg" flat>
            
          </v-card>
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
  mounted() {
    axios.get("http://api.alquran.cloud/v1/surah").then((response) => {
      (this.quran = response.data.data), console.log(response.data.data);
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
