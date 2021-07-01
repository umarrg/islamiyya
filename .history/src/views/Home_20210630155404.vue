<template>
 <v-app>
   <v-app-bar
   color="white"
     app
     outlined
   >

   <v-app-bar-title class="text-h6">ISLAMIYYA</v-app-bar-title>
   <v-spacer></v-spacer>
   <v-btn color="primary" outlined class="mx-2" large text>Sign in</v-btn>
    <v-btn color="primary" large>Sign Up</v-btn>
   </v-app-bar>
   <v-container >
     <v-row justify="center">
      
       <v-col cols="12" md="6">
         
        <v-row>
        <v-col cols="12" md="6" v-for="item in items" :key="item.title">
           <v-hover>
              <template v-slot:default="{ hover }">
                <v-card
                 class="text-center pa-12"
                 :to="item.to"
                 color="#F2F5F8"
                 outlined
                  rounded="lg"
                  :elevation="hover ? 15 : 6"
               >
                <p class=" text-h6">{{ item.title }}</p>
                </v-card>
              </template>
             </v-hover>
          </v-col>
        </v-row>
       
 
       </v-col>
        <v-col cols="12" md="6">
      <v-card rounded="lg">
         <v-img src="../assets/islamiyya.jpg" ></v-img>
      </v-card>
       
       </v-col>
     </v-row>
   </v-container>
   
     <v-footer
    
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      
    </v-card>
  </v-footer>
   
   
   
 </v-app>
</template>

<script>
export default {
  data: () => ({
          icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],

    items: [
      {
        title: "Alquran",
        to: "/quran",
        color: "#004D40",
      },
      {
        title: "Hadith",
        to: "/hadith",
        color: "#EF6C00",
      },

      {
        title: "Tauhid",
        to: "/tauhid",
        color: "#424242",
      },
      
      {
        title: "Arabiyya",
        to: "/arabiyya",
        color: "#2E7D32",
      },
    ],
  }),
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style scoped>
.custom__title {
  text-transform: capitalize;
  text-align: center;
  text-decoration: none;
  color: #004d40;
  font-family: "Times New Roman", Times, serif;
  font-weight: 800;
}
</style>


//  <div>
//     <v-toolbar extended color="primary">
//       <v-toolbar-title>
//         <v-btn icon v-if="!$vuetify.theme.dark" @click="toggleTheme()">
//           <v-icon class="mr-1" color="blue-grey darken-4">mdi-lightbulb</v-icon>
//         </v-btn>
//         <v-btn icon v-if="$vuetify.theme.dark" @click="toggleTheme()">
//           <v-icon color="yellow darken-3">mdi-lightbulb-outline</v-icon>
//         </v-btn>
//       </v-toolbar-title>
//     </v-toolbar>

//     <v-card
//       class="mx-auto"
//       max-width="900"
//       style="margin-top: -64px;"
//       color="#F5F7F9"
//     >
//       <v-toolbar flat color="#F5F7F9">
//         <v-spacer></v-spacer>
//         <v-toolbar-title class="text-center">
//           <span class="custom__title">ISLAMIYYA</span>
//         </v-toolbar-title>
//         <v-spacer></v-spacer>
//       </v-toolbar>

//       <v-divider></v-divider>

//       <v-card-text>
//         <v-row>
//           <v-col cols="12" md="4" v-for="item in items" :key="item.title">
//             <v-hover>
//               <template v-slot:default="{ hover }">
//                 <v-card
//                   class="text-center pa-5"
//                   :to="item.to"
//                   outlined
//                   rounded="lg"
//                   :elevation="hover ? 15 : 6"
//                 >
//                   <p class=" text-h6">{{ item.title }}</p>
//                 </v-card>
//               </template>
//             </v-hover>
//           </v-col>
//         </v-row>
//       </v-card-text>
//     </v-card>
//   </div>