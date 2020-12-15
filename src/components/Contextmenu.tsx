import {
  computed,
  defineComponent,
  watch,
  ref,
  reactive,
  onBeforeUnmount,
  provide,
  Teleport,
  PropType,
  nextTick,
} from "vue";

import { CLASSES } from "../constants";
import {
  TriggerEventType,
  TriggerEventTypeOption,
  ReferenceOptions,
} from "../types";

interface ShowOptions {
  top?: number;
  left?: number;
  autoAjustPlacement?: boolean;
}
interface AddReferenceOptions {
  trigger?: TriggerEventTypeOption;
}

const DEFAULT_REFERENCE_OPTIONS: {
  trigger: TriggerEventType[];
} = {
  trigger: ["contextmenu"],
};

const Contextmenu = defineComponent({
  name: "VContextmenu",

  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    autoAjustPlacement: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    teleport: {
      type: [String, Object] as PropType<string | Element>,
      default: () => "body",
    },
    destroyOnHide: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["show", "hide", "update:modelValue"],

  setup(props, { emit }) {
    const contextmenuRef = ref<HTMLDivElement | null>(null);
    const visible = ref(props.modelValue || false);
    const toggle = (value: boolean) => {
      visible.value = value;
      emit("update:modelValue", value);
    };

    const position = ref({ top: 0, left: 0 });
    const style = computed(() => ({
      top: `${position.value.top}px`,
      left: `${position.value.left}px`,
    }));

    const currentOptions = ref(null);
    const show = async (
      evt: MouseEvent | ShowOptions,
      options?: ShowOptions,
    ) => {
      const targetOptions = evt instanceof Event ? options : evt;
      const autoAjustPlacement =
        targetOptions?.autoAjustPlacement || props.autoAjustPlacement;
      const targetPosition = {
        top: targetOptions?.top || 0,
        left: targetOptions?.left || 0,
      };

      if (evt instanceof Event) {
        evt.preventDefault();

        targetPosition.top = targetOptions?.top ?? evt.pageY;
        targetPosition.left = targetOptions?.left ?? evt.pageX;
      }

      toggle(true);

      await nextTick();

      if (autoAjustPlacement) {
        const el = contextmenuRef.value!;
        const width = el.clientWidth;
        const height = el.clientHeight;

        if (
          height + targetPosition.top >=
          window.innerHeight + window.scrollY
        ) {
          targetPosition.top -= height;
        }

        if (width + targetPosition.left >= window.innerWidth + window.scrollX) {
          targetPosition.left -= width;
        }
      }

      position.value = targetPosition;

      emit("show", contextmenuRef.value);
    };
    const hide = () => {
      currentOptions.value = null;

      toggle(false);

      emit("hide", contextmenuRef.value);
    };

    const references = reactive(new Map<Element, ReferenceOptions>());
    const currentReference = ref<Element>();
    const currentReferenceOptions = computed(
      () => currentReference.value && references.get(currentReference.value),
    );
    const addReference = (el: Element, options: AddReferenceOptions = {}) => {
      const triggers = (() => {
        if (options.trigger) {
          return Array.isArray(options.trigger)
            ? options.trigger
            : [options.trigger];
        }

        return DEFAULT_REFERENCE_OPTIONS.trigger;
      })();

      const handler = (evt: Event) => {
        currentReference.value = el;
        show(evt as MouseEvent, {});
      };

      triggers.forEach((eventType) => {
        el.addEventListener(eventType, handler);
      });

      references.set(el, {
        triggers,
        handler,
      });
    };
    const removeReference = (el: Element) => {
      const options = references.get(el);

      if (!options) return;

      options.triggers.forEach((eventType) => {
        el.removeEventListener(eventType, options.handler);
      });

      references.delete(el);
    };

    const onBodyClick = (evt: Event) => {
      if (!evt.target || !contextmenuRef.value || !currentReference.value)
        return;

      const notOutside =
        contextmenuRef.value.contains(evt.target as Node) ||
        (currentReferenceOptions.value &&
          currentReferenceOptions.value.triggers.includes("click") &&
          currentReference.value.contains(evt.target as Node));

      if (!notOutside) {
        toggle(false);
      }
    };

    // watch(props.modelValue, (value) => {
    //   if (value !== visible.value) {
    //     toggle(value);
    //   }
    // });
    watch(visible, (value) => {
      if (value) {
        document.addEventListener("click", onBodyClick);
      } else {
        document.removeEventListener("click", onBodyClick);
      }
    });

    onBeforeUnmount(() => {
      document.removeEventListener("click", onBodyClick);
    });

    provide("visible", visible);
    provide("autoAjustPlacement", props.autoAjustPlacement);

    provide("show", show);
    provide("hide", hide);

    return {
      visible,
      style,

      currentReferenceOptions,
      currentOptions,

      contextmenuRef,

      addReference,
      removeReference,

      toggle,
      show,
      hide,
    };
  },

  methods: {
    renderContent() {
      return (
        <div
          class={CLASSES.contextmenu}
          ref="contextmenuRef"
          v-show="visible"
          style={this.style}
        >
          <ul class={CLASSES.contextmenuInner}>
            {this.$slots.default?.({
              triggerOptions: "currentReferenceOptions",
              options: "currentOptions",
            })}
            <span>{this.style}</span>
          </ul>
        </div>
      );
    },
  },

  render() {
    if (!this.visible) return null;

    return this.teleport ? (
      <Teleport to={this.teleport}>{this.renderContent()}</Teleport>
    ) : (
      this.renderContent()
    );
  },
});

export default Contextmenu;
