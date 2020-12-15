import { computed, defineComponent, inject, ref } from "vue";

import { CLASSES } from "../constants";

const ContextmenuItem = defineComponent({
  name: "VContextmenuItem",

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    hideOnClick: {
      type: Boolean,
      default: true,
    },
  },

  emits: ["click", "mouseenter", "mouseleave"],

  setup(props, { emit }) {
    const rootHide = inject<() => void>("hide");

    const hover = ref(false);
    const classes = computed(() => ({
      [CLASSES.contextmenuItem]: true,
      [CLASSES.contextmenuItemDisabled]: props.disabled,
      [CLASSES.contextmenuItemHover]: hover.value,
    }));

    const handleClick = (evt: Event) => {
      if (props.disabled) return;

      emit("click", evt);

      props.hideOnClick && rootHide?.();
    };

    const handleMouseenter = (evt: Event) => {
      if (props.disabled) return;

      hover.value = true;

      emit("mouseenter", evt);
    };

    const handleMouseleave = (evt: Event) => {
      if (props.disabled) return;

      hover.value = false;

      emit("mouseleave", evt);
    };

    return {
      classes,

      handleClick,
      handleMouseenter,
      handleMouseleave,
    };
  },

  render() {
    return (
      <li
        class={this.classes}
        onClick={this.handleClick}
        onMouseenter={this.handleMouseenter}
        onMouseleave={this.handleMouseleave}
      >
        {this.$slots.default?.()}
      </li>
    );
  },
});

export default ContextmenuItem;
