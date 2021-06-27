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
export default {
  data: () => ({
    quran: "",
  }),
  methods:{
   getNames() {
      fetch("http://api.alquran.cloud/v1/surah")
      .then((res) => res.json())
      .then((data) => (this.quran = data));
   }
  }}
  mounted: {
   getNames()
  
  }

};
</script>
<style scoped>
.custom__bg {
  background: #f4f5f9;
}
</style>
