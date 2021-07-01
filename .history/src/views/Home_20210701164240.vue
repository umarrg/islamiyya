<template>
 <v-app class="custom__bg">
   <AppBar />
    
   <v-container fill >
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
                <p class=" text-h6 black--text">{{ item.title }}</p>
                </v-card>
              </template>
             </v-hover>
          </v-col>
        </v-row>
       
 
       </v-col>
        <v-col cols="12" md="6">
      <v-card rounded="lg">
         <v-img src="../assets/islamiyya.jpg" height="320" ></v-img>
      </v-card>
       
       </v-col>
     </v-row>
   </v-container>
   
     <v-footer
    bottom
    fixed
    
    padless
  >
    <v-card
      
      
      
    >
      <v-card-title class="">
        <strong class="subheading black--text" >Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          
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
import AppBar from '../components/appbar.vue'
export default {
  components:{
    AppBar,
  },
  data: () => ({
          icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-youtube',
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

.custom__bg {
  background: #F2F5F8;
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