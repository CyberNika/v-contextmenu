import { defineComponent, onMounted, getCurrentInstance, PropType } from "vue";

import { TriggerEventTypeOption } from "../types";

const ContextmenuTrigger = defineComponent({
  name: "VContextmenuTrigger",

  props: {
    trigger: {
      type: [String, Array] as PropType<TriggerEventTypeOption>,
      default: "contextmenu",
    },
    target: {
      type: String,
      default: "contextmenu",
    },
  },

  setup(props) {
    onMounted(() => {
      const instance = getCurrentInstance();
      const contextmenuRef = instance?.parent?.refs?.[props.target];

      if (!contextmenuRef) {
        throw Error(`没有找到 ${props.target} 对应的实例`);
      }

      console.log(contextmenuRef);
    });

    return {
      a: 1,
    };
  },

  render() {
    return this.$slots.default?.();
  },
});

export default ContextmenuTrigger;
