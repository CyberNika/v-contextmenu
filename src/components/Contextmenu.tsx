import {
  computed,
  defineComponent,
  watch,
  ref,
  reactive,
  onBeforeUnmount,
  provide,
  readonly,
  Teleport,
  PropType,
} from "vue";

import { CLASSES } from "../constants";
import {
  TriggerEventType,
  TriggerEventTypeOption,
  ReferenceOptions,
} from "../types";

interface ShowOptions {
  triggers?: TriggerEventTypeOption;
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
      type: [String, Object] as PropType<"string" | Element>,
      default: () => "body",
    },
    destroyTooltipOnHide: Boolean,
  },

  emits: ["show", "hide", "update:visible", "addReference"],

  setup(props, { emit }) {
    const contextmenuRef = ref<HTMLDivElement | null>(null);
    const visible = ref(props.modelValue || false);
    const toggle = (value: boolean) => {
      visible.value = value;
      emit("update:visible", value);
    };

    const position = ref({ top: 0, left: 0 });
    const style = computed(() => ({
      top: `${position.value.top}px`,
      left: `${position.value.left}px`,
    }));

    const currentOptions = ref(null);
    const show = (evt: Event | ShowOptions, options?: ShowOptions) => {
      if (evt instanceof Event) {
        evt.preventDefault();

        const eventX = evt.pageX;
        const eventY = evt.pageY;

        const top = eventY;
        const left = eventX;

        position.value = { top, left };
      }

      // options = evt;

      toggle(true);
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
        show(evt, {});
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

    provide("visible", readonly(visible));
    provide("show", show);
    provide("hide", hide);
    provide("toggle", toggle);

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
