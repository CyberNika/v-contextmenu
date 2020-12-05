import {
  ref,
  computed,
  defineComponent,
  Transition,
  inject,
  nextTick,
} from "vue";

import ContextmenuIcon from "./ContextmenuIcon";
import { CLASSES } from "../constants";

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
    const submenuRef = ref<HTMLDivElement | null>(null);
    const autoAjustPlacement = inject<boolean>("autoAjustPlacement");
    const placements = ref(["top", "right"]);
    const hover = ref(false);
    const handleMouseenter = async (evt: Event) => {
      if (props.disabled) return;

      hover.value = true;

      emit("mouseenter", evt);

      await nextTick();

      const targetPlacements = [];

      if (autoAjustPlacement) {
        const { target } = evt;
        const targetDimension = target.getBoundingClientRect();

        const submenuWidth = submenuRef.value!.clientWidth;
        const submenuHeight = submenuRef.value!.clientHeight;

        if (targetDimension.right + submenuWidth >= window.innerWidth) {
          targetPlacements.push("left");
        } else {
          targetPlacements.push("right");
        }

        if (targetDimension.bottom + submenuHeight >= window.innerHeight) {
          targetPlacements.push("bottom");
        } else {
          targetPlacements.push("top");
        }
      }

      placements.value = targetPlacements;
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
      [CLASSES.contextmenuSubmenuMenusTop]: placements.value.includes("top"),
      [CLASSES.contextmenuSubmenuMenusRight]: placements.value.includes(
        "right",
      ),
      [CLASSES.contextmenuSubmenuMenusBottom]: placements.value.includes(
        "bottom",
      ),
      [CLASSES.contextmenuSubmenuMenusLeft]: placements.value.includes("left"),
    }));

    return {
      hover,
      submenuRef,
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
            <div ref="submenuRef" class={this.menusClasses}>
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
