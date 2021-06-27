<template>
  <div>

  </div>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    surahs: {},
    number: "",
    surah: null,
    ayahs: [],
  }),
  methods: {
    setSurahs(value) {
      this.surah = value;
    },
  },
  watch: {
    "$route.params.id": function(surah) {
      this.setSurahs(surah);

      console.log(surah);
    },
  },
  mounted() {
    axios
      .get("http://api.alquran.cloud/v1/quran/quran-uthmani" + this.surah)
      .then((response) => {
        this.surahs = response.data.data.surahs[0].ayahs;
       
        console.log(response.data.data.surahs[0].ayahs);
      });
  },
};
</script>
