import { defineComponent } from "vue";

import { CLASSES } from "../constants";

const ContextmenuIcon = defineComponent({
  name: "VContextmenuIcon",

  props: {
    name: {
      type: String,
      required: true,
    },
  },

  render() {
    return (
      <i
        class={[
          CLASSES.contextmenuIcon,
          `${CLASSES.contextmenuIcon}-${this.name}`,
        ]}
      />
    );
  },
});

export default ContextmenuIcon;
