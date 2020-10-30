import { App } from 'vue'

import directive from './directive'

import Contextmenu from './components/Contextmenu'
import ContextmenuItem from './components/ContextmenuItem'
import ContextmenuSubmenu from './components/ContextmenuSubmenu'
import ContextmenuGroup from './components/ContextmenuGroup'

const install = (app: App) => {
  app.directive('contextmenu', directive)

  app.component(Contextmenu.name, Contextmenu)
  app.component(ContextmenuItem.name, ContextmenuItem)
  app.component(ContextmenuSubmenu.name, ContextmenuSubmenu)
  app.component(ContextmenuGroup.name, ContextmenuGroup)
}

export {
  directive,
  Contextmenu,
  ContextmenuItem,
  ContextmenuSubmenu,
  ContextmenuGroup
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (typeof window !== 'undefined' && (window as any).Vue) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  install((window as any).Vue)
}

export default {
  install
}
