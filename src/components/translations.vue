<template>
  <div>
    <div>
      <span> {{ text }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    hausaTran: "",
  }),

  // getTranslations(key) {
  //   this.id = this.$route.params.id;

  //   axios
  //     .get(
  //       ` https://api.quran.com/api/v4/quran/translations/32?chapter_number=${this.id}&verse_key=${key}`
  //     )
  //     .then((res) => {
  //       this.hausaTran = res.data.translations;
  //       console.log(res.data);
  //     })
  //     .catch((e) => console.log(e))
  //     .finally(() => ((this.loading = false), (this.show = false)));
  // },

  // mounted() {
  //   this.getTranslations();
  // },
};
</script>
