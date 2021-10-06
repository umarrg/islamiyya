<template>
  <v-app class="custom__bg">
    <v-container fill-height>
      <v-row align="center" justify="center\">
        <div class="d-flex justify-center align-center"></div>
        <v-col cols="12" md="12">
          <div class="d-flex justify-center align-center">
            <v-card width="370" rounded="lg">
              <v-card-text>
                <v-col cols="12" md="12">
                  <v-text-field outlined placeholder="Email"></v-text-field>
                </v-col>
                <v-col cols="12" md="12" class="py-0-0">
                  <v-text-field outlined placeholder="Password"></v-text-field>
                  <v-checkbox
                    label="Remember me"
                    v-model="value"
                    value="value"
                  ></v-checkbox>
                </v-col>
              </v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped>
.custom__bg {
  background: #f2f5f8;
}
</style>
