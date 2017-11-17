import Vue from 'vue'
import App from './App.vue'

import contentmenu from '../src'
import '../src/styles/index.styl'

Vue.use(contentmenu)

new Vue({
  el: '#app',
  render: h => h(App)
})
