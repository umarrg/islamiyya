<template>
  <v-dialog transition="dialog-bottom-transition" max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text small v-on="on" v-bind="attrs" class="custom__bt text-capitalise" color="blue">
        forgot password?
      </v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar color="primary" dark>Reset password</v-toolbar>
        <v-card-text>
       <v-form>
           <v-text-field outlined placeholder="Enter your email"></v-text-field>
       </v-form>
        <div class="d-flex align-center justify-center">

        </div>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog.value = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>
.custom__bt {
  text-decoration-line: underline;
}
</style>