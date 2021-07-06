<template>
  <v-app>
    <v-container fill-height>
      <v-row>
        <v-col cols="12" md="7">
          <v-card outlined v-for="item in Likes" :key="item._id">
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <v-avatar color="primary">
                    <span>{{ item.verse_key }}</span>
                  </v-avatar>
                </v-list-item-avatar>
                <v-list-item-action>
                  <span>{{ item.arabic_text }}</span>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    likes: {},
    userId: JSON.parse(localStorage.getItem("user._id"))
  }),
  methods: {
    getLikes() {
      this.$store.dispatch("fetchLikes", this.userId);
    },
  },
  mounted() {
    this.getLikes();
  },
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"]),

    Likes() {
      return this.$store.getters.getLikes;
    },
  },
};
</script>
