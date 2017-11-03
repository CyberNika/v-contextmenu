import Vue from 'vue'

import directive from './directive'

import Contextmenu from './components/Contextmenu.vue'
import ContextmenuItem from './components/ContextmenuItem.vue'
import ContextmenuSubmenu from './components/ContextmenuSubmenu.vue'

Vue.directive('contextmenu', directive)

Vue.component(Contextmenu.name, Contextmenu)
Vue.component(ContextmenuItem.name, ContextmenuItem)
Vue.component(ContextmenuSubmenu.name, ContextmenuSubmenu)

export default Contextmenu
