<template>
  <div>
    <v-btn
      text
      color="orange lighten-2"
      class="text-icon"
      small
      @click="getTranslations( {action}   )"
      >see tafseer
      <v-icon color="" small>mdi-arrow-right</v-icon>
    </v-btn>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data: () => ({
    hausaTran: "",
  }),

  getTranslations(key) {
    this.id = this.$route.params.id;

    axios
      .get(
        ` https://api.quran.com/api/v4/quran/translations/32?chapter_number=${this.id}&verse_key=${key}`
      )
      .then((res) => {
        this.hausaTran = res.data.translations;
        console.log(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => ((this.loading = false), (this.show = false)));
  },

  mounted() {
    this.getTranslations();
  },
};
</script>
