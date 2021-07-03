<template>
  <v-dialog transition="dialog-bottom-transition" max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text small v-on="on" v-bind="attrs" class="custom__bt text-capitalise" color="blue">
        forgot password?
      </v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar color="blue" dark>Reset password</v-toolbar>
        <v-card-text v-if="!showSuccess">
       <v-form  @submit.prevent ref="form" >
           <v-text-field outlined placeholder="Enter your email" class="mt-5" v-model="email"></v-text-field>
       </v-form>
        <div class="d-flex align-center justify-center">
            <v-btn color="primary" large @click="resetPassword()" >Reset</v-btn>

        </div>
        </v-card-text>
        <p v-else>Success! Check your email for a reset link.</p>
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