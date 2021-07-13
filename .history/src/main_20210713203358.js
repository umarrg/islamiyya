import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueClipboard from 'vue-clipboard2'
import shareIt from 'vue-share-it';


Vue.use(VueAudio)
Vue.use(shareIt);
Vue.use(VueClipboard)

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
