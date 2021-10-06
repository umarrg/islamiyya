<template>
  <div></div>
</template>
<script>
export default {
    created() {
        setTimeout(() => {
            this.$router.push('"/quran/:englishName"')
        }, 1000);
    }
}
</script>
