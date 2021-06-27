<template>
  <div>
    <v-card  v-for="item in quran" :key="item.surahs" rounded="lg" flat class="my-2">
      <v-card-text class="pa-10">
        <v-row>
          <div>
            <span class="teal--text">1:{}</span>
          </div>
          <v-spacer></v-spacer>
          <div>
            <span>بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ </span>
          </div>
        </v-row>
        <v-row>
          <v-col class="px-0">
            <div>
              <span class="teal--text"
                >English Sahih International |<v-btn
                  text
                  color="orange lighten-2"
                  class="text-icon"
                  small
                  >see tafseer
                  <v-icon color="" small>mdi-arrow-right</v-icon>
                </v-btn></span
              >
            </div>
            <div>
              <span
                >In the Name of Allah—the Most Compassionate, Most Merciful.
              </span>
            </div>
            <div class="mt-5">
              <v-divider></v-divider>
              <v-divider></v-divider>
            </div>
            <div class="d-flex align-start justify-start mt-3">
              <v-btn icon>
                <v-icon small>mdi-heart-outline</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-motion-play-outline</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>
