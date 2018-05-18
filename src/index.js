import directive from './directive'

import Contextmenu from './components/Contextmenu.vue'
import ContextmenuItem from './components/ContextmenuItem.vue'
import ContextmenuSubmenu from './components/ContextmenuSubmenu.vue'
import ContextmenuGroup from './components/ContextmenuGroup.vue'

const install = (Vue) => {
  Vue.directive('contextmenu', directive)

  Vue.component(Contextmenu.name, Contextmenu)
  Vue.component(ContextmenuItem.name, ContextmenuItem)
  Vue.component(ContextmenuSubmenu.name, ContextmenuSubmenu)
  Vue.component(ContextmenuGroup.name, ContextmenuGroup)
}

export {
  directive,

  Contextmenu,
  ContextmenuItem,
  ContextmenuSubmenu,
  ContextmenuGroup,
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
}
