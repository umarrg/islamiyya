<template>
  <div>
   <v-btn
                    text
                    color="orange lighten-2"
                    class="text-icon"
                    small
                    @click="getTranslations(item.verse_key)"
                    >see tafseer
                    <v-icon color="" small>mdi-arrow-right</v-icon>
                  </v-btn>
  </div>
</template>
