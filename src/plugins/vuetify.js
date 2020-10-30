import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },

  themes: {
    dark: {
      primary: '#000000',
      secondary: '#ffff1a',
      accent: '#D8EBF1',
      info: '#5B5C79',
    },
    light: {
      primary: '#000000',
      secondary: '#ffff1a',
      accent: '#D8EBF1',
      info: '#5B5C79'
    },
  },
})
