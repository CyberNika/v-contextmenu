import { defineComponent, inject } from "vue";

const ContextmenuItem = defineComponent({
  name: "VContextmenuItem",

  props: {
    divider: Boolean,
    disabled: Boolean,
    hideOnClick: {
      type: Boolean,
      default: true,
    },
  },

  setup(props) {
    const rootVisible = inject("visible");
    const rootHide = inject("hide");
  },

  render() {
    if (this.divider) {
      return <div class="v-contextmenu-item v-contextmenu-item--divider" />;
    }

    return <div class="v-contextmenu-item">ContextmenuItem</div>;
  },
});

export default ContextmenuItem;
