import { ref, computed, defineComponent, Transition } from "vue";

import ContextmenuIcon from "./ContextmenuIcon";
import { CLASSES } from "../constants";

// type SubmenuMenusPlacement = "left" | "right" | "top" | "bottom";

// const SUBMENU_MENUS_PLACEMENT_CLASSES = {
//   left: CLASSES.contextmenuSubmenuMenusLeft,
//   right: CLASSES.contextmenuSubmenuMenusRight,
//   top: CLASSES.contextmenuSubmenuMenusTop,
//   bottom: CLASSES.contextmenuSubmenuMenusBottom,
// };

const ContextmenuSubmenu = defineComponent({
  name: "VContextmenuSubmenu",

  props: {
    title: {
      type: String,
      required: true,
    },
    disabled: Boolean,
  },

  emits: ["mouseenter", "mouseleave"],

  setup(props, { emit }) {
    const hover = ref(false);
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

    const titleClasses = computed(() => ({
      [CLASSES.contextmenuItem]: true,
      [CLASSES.contextmenuSubmenuTitle]: true,
      [CLASSES.contextmenuItemHover]: hover.value,
      [CLASSES.contextmenuItemDisabled]: props.disabled,
    }));

    // const menusPlacement = ref<SubmenuMenusPlacement>(["right", "top"]);
    const menusClasses = computed(() => ({
      [CLASSES.contextmenu]: true,
      [CLASSES.contextmenuSubmenuMenus]: true,
      // [SUBMENU_MENUS_PLACEMENT_CLASSES[menusPlacement.value]]: true,
    }));

    return {
      hover,
      titleClasses,
      menusClasses,

      handleMouseenter,
      handleMouseleave,
    };
  },

  render() {
    return (
      <li
        class={CLASSES.contextmenuSubmenu}
        onMouseenter={this.handleMouseenter}
        onMouseleave={this.handleMouseleave}
      >
        <div class={this.titleClasses}>
          {this.$slots.title ? this.$slots.title() : this.title}

          <span class={CLASSES.contextmenuSubmenuArrow}>
            <ContextmenuIcon name="right-arrow" />
          </span>
        </div>

        <Transition name={CLASSES.contextmenu}>
          {this.hover ? (
            <div ref="submenu" class={this.menusClasses}>
              <ul class={CLASSES.contextmenuInner}>
                {this.$slots.default?.()}
              </ul>
            </div>
          ) : null}
        </Transition>
      </li>
    );
  },
});

export default ContextmenuSubmenu;
