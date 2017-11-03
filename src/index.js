import Vue from 'vue'

import directive from './directive'

import Contextmenu from './components/Contextmenu'
import ContextmenuItem from './components/ContextmenuItem'
import ContextmenuSubmenu from './components/ContextmenuSubmenu'

Vue.directive('contextmenu', directive)

Vue.component(Contextmenu.name, Contextmenu)
Vue.component(ContextmenuItem.name, ContextmenuItem)
Vue.component(ContextmenuSubmenu.name, ContextmenuSubmenu)

export default Contextmenu
