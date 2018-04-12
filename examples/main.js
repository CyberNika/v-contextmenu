import Vue from 'vue'
import App from './App.vue'

import contextmenu from '../src'
import '../src/styles/index.styl'

// import contextmenu from '../'
// import '../dist/index.css'

Vue.use(contextmenu)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
})
