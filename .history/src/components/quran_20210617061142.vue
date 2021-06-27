<template>
  <div class="custom__card-height">
    <v-card
      outlined
      tile
      height="100%"
      class="d-flex justify-center align-center flex-column"
    >
      <v-img contain width="50%" height="50%" src="../assets/chat2.svg">
      </v-img>
      <p class="body-1 font-weight-light">
        Chat with your friends or fellow researchers.
      </p>
    </v-card>
  </div>
</template>

<style lang="scss">
.custom__card-height {
  height: calc(100vh - 48px);
}
</style>