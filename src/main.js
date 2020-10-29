import Vue from 'vue'
import vuetify  from "./plugins/vuetify"
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.min.css'

Vue.config.productionTip = false


import style from './styles/app.scss'

new Vue({
  vuetify,
  style,
  render: h => h(App)
}).$mount('#app')
