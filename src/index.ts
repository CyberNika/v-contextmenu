import { App } from "vue";

import directive from "./directive";

import Contextmenu from "./components/Contextmenu";
import ContextmenuItem from "./components/ContextmenuItem";
import ContextmenuDivider from "./components/ContextmenuDivider";
import ContextmenuSubmenu from "./components/ContextmenuSubmenu";
import ContextmenuGroup from "./components/ContextmenuGroup";

import { version } from "../package.json";

const install = (app: App): void => {
  app.directive("contextmenu", directive);

  app.component(Contextmenu.name, Contextmenu);
  app.component(ContextmenuItem.name, ContextmenuItem);
  app.component(ContextmenuDivider.name, ContextmenuDivider);
  app.component(ContextmenuSubmenu.name, ContextmenuSubmenu);
  app.component(ContextmenuGroup.name, ContextmenuGroup);
};

export {
  directive,
  Contextmenu,
  ContextmenuItem,
  ContextmenuDivider,
  ContextmenuSubmenu,
  ContextmenuGroup,
  version,
};

const VContextmenu = {
  install,
  version,
};

export default VContextmenu;
