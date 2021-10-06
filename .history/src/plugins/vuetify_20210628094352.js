import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      themeCache: {
        get: (key) => localStorage.getItem(key),
        set: (key, value) => localStorage.setItem(key, value),
      },
    },
    themes: {
      light: {
        primary: colors.teal.darken4,
        secondary: colors.grey.darken4,
        accent: colors.pink.darken1,
        error: colors.red.accent3,
        background: colors.grey.lighten4,
        info: colors.grey.lighten4,
      },
      dark: {
        primary: colors.teal.darken4,
        background: colors.grey.darken4,
        secondary: colors.grey.lighten5,
        info: colors.teal.lighten1,
      },
    },
  },
});
