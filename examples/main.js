import Vue from 'vue'
import App from './App.vue'

import contextmenu from '../src'
import '../src/styles/index.styl'

// import contextmenu from 'v-contextmenu'
// import 'v-contextmenu/dist/index.css'

Vue.use(contextmenu)

new Vue({
  el: '#app',
  render: h => h(App)
})
