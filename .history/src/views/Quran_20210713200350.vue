<template>
  <v-app class="custom__bg">
    <div v-if="loading">
      <v-progress-linear indeterminate color="primary"></v-progress-linear>
    </div>
    <v-container v-else>
      <v-row>
        <v-col cols="12" md="12">
          <v-form @submit.prevent ref="form">
            <v-autocomplete
              v-model="model"
              @click="navigate()"
              append-icon=""
              :items="users"
              placeholder="search here"
              :loading="isLoading"
              @keydown.enter="search()"
              :search-input.sync="search"
              hide-details
              rounded
              :menu-props="{
                nudgeBottom: 5 + 'px',
                zIndex: 2,
                rounded: 'lg',
              }"
              clearable
              solo
              item-text="name"
              item-value="symbol"
            >
              <template slot="append">
                <v-btn icon @click="search()">
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </template>
              <template slot="keydown"> </template>
              <template v-slot:item="{ item }">
                <v-list>
                  <v-list-item class="ma-0 pa-0">
                    <v-list-item-content class="mb-0">
                      <v-list-item-title class="black--text">
                        <span>{{ item.text }}</span>
                      </v-list-item-title>
                      <v-list-item-subtitle
                        v-text="item.verse_id"
                        style="font-size: 10px;"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </template>
            </v-autocomplete>
          </v-form>
        </v-col>
        <v-col cols="12" md="3" v-for="item in quran" :key="item.number">
          <v-card outlined max-height="800" class="custom__overflow pa-4">
            <v-card
              class="my-2"
              rounded="lg"
              active-class="border"
              :to="`/quran/${item.id}`"
            >
              <v-list dense>
                <v-list-item>
                  <v-list-item-avatar size="25" class="hidden-sm-and-down">
                    <v-avatar color="primary">
                      <span class=" number_text white--text">{{
                        item.id
                      }}</span>
                    </v-avatar>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>
                      <span>{{ item.name_simple }}</span>
                    </v-list-item-title>
                    <v-list-item-subtitle class="hidden-sm-and-down">
                      <span>{{ item.translated_name.name }}</span>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action class="hidden-sm-and-down">
                    <span>{{ item.name_arabic }}</span>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-card>
          </v-card>
        </v-col>
        <v-col cols="8" md="9">
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
    isLoading: false,
    users: "",
    model: null,
    search: null,
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
  
  created() {
    this.fetchData();
  },
};
</script>

<style scoped>
.custom__overflow {
  overflow-x: hidden;
  overflow-y: auto;
}
.number_text {
  font-size: 11px;
}
</style>
