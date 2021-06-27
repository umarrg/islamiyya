<template>
  <v-app class="custom__bg">
    <v-container class="mx-1">
      <v-row>
        <v-col cols="3" v-for="item in quran" :key="item.number">
          <v-card>
            <v-list dense>
              <v-list-item>
                <v-list-item-avatar size="25">
                  <v-avatar color="teal">
                    <span class="white--text">1</span>
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
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import axios from 'axios'
export default {
  data: () => ({
    quran: "",
  }),
  mounted() {
    axios.get('http://api.alquran.cloud/v1/surah').then((response) => {
      this.quran = data,
      console.log(response.data);
    });
  },
};
</script>
<style scoped>
.custom__bg {
  background: #f4f5f9;
}
</style>
