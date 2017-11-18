import directive from './directive'

import Contextmenu from './components/Contextmenu.vue'
import ContextmenuItem from './components/ContextmenuItem.vue'
import ContextmenuSubmenu from './components/ContextmenuSubmenu.vue'

export { Contextmenu }
export { ContextmenuItem }
export { ContextmenuSubmenu }

export default {
  install (Vue) {
    Vue.directive('contextmenu', directive)

    Vue.component(Contextmenu.name, Contextmenu)
    Vue.component(ContextmenuItem.name, ContextmenuItem)
    Vue.component(ContextmenuSubmenu.name, ContextmenuSubmenu)
  },
}
