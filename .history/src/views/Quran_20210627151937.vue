<template>
  <v-app class="custom__bg">
    <v-container>
      <div v-if="loading">
        <v-progress-linear indeterminate></v-progress-linear>
      </div>
      <v-row v-else>
        <v-col cols="12" md="3">
          <v-card outlined  max-height="800" class="custom__overflow pa-4">
            <v-card
              v-for="item in quran"
              :key="item.number"
              class="my-2"
              rounded="lg"
              active-class="border"
              :to="`/quran/${item.id}`"
            >
              <v-list dense>
                <v-list-item>
                  <v-list-item-avatar size="25">
                    <v-avatar color="teal">
                      <span class="white--text number_text">{{ item.id }}</span>
                    </v-avatar>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>
                      <span>{{ item.name_simple }}</span>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      <span>{{ item.translated_name.name }}</span>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <span>{{ item.name_arabic }}</span>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-card>
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
    loading: false,
  }),

  methods: {
    fetchData() {
      this.loading = true;
      axios
        .get("https://api.quran.com/api/v4/chapters?language=en")
        .then((response) => {
          (this.quran = response.data.chapters), console.log(response);
        })
        .catch((err) => console.log(err))
        .finally(() => (this.loading = false));
    },
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData",
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped>
.custom__bg {
  background: #f5f7f9;
}
.custom__overflow {
  overflow-x: hidden;
  overflow-y: auto;
}
.number__text{
    font-size: 11px;
}
</style>
