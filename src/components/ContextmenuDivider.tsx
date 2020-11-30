import { defineComponent } from "vue";

import { CLASSES } from "../constants";

const ContextmenuDivider = defineComponent({
  name: "VContextmenuDivider",

  render() {
    return <li class={CLASSES.contextmenuDivider} />;
  },
});

export default ContextmenuDivider;
