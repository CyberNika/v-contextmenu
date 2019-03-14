import { VueConstructor } from "vue";

import Contextmenu from "./components/Contextmenu.vue";

const install = (Vue: VueConstructor) => {
  // Vue.directive("contextmenu", directive);

  Vue.component(Contextmenu.name, Contextmenu);
  // Vue.component(ContextmenuItem.name, ContextmenuItem)
  // Vue.component(ContextmenuSubmenu.name, ContextmenuSubmenu)
  // Vue.component(ContextmenuGroup.name, ContextmenuGroup)
};

export {
  Contextmenu,
};

// if (typeof window !== "undefined" && window.Vue) {
//   install(window.Vue);
// }

export default {
  install,
};
