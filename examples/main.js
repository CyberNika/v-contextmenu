import Vue from 'vue'
import App from './App.vue'

import contextmenu from '../src'
import '../src/styles/index.styl'

// import contextmenu from '../'
// import '../dist/index.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(contextmenu)
Vue.use(ElementUI)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
})
