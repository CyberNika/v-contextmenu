import { defineComponent, computed, PropType } from "vue";

import styles from "./index.module.less";

const Example = defineComponent({
  name: "SiteExample",

  props: {
    codepens: {
      type: [String, Array] as PropType<string | string[]>,
      required: true,
    },
    title: String,
    description: String,
    hideDemo: Boolean,
    mirror: Boolean,
  },

  setup(props, { slots }) {
    const codepenIds = computed(() =>
      Array.isArray(props.codepens) ? props.codepens : [props.codepens],
    );

    return () => (
      <div class={[styles.example, "container"]}>
        {!props.hideDemo && !props.mirror && (
          <div class={styles.demo}>{slots.default?.()}</div>
        )}

        <div class={styles.content}>
          <div class={styles.title}>
            {slots.title ? slots.title() : props.title}
          </div>

          <div class={styles.description}>
            {slots.description ? slots.description() : props.description}
          </div>

          <div class={styles.codepens}>
            {codepenIds.value.map((item) => (
              <iframe
                key={item}
                class={styles.codepenIframe}
                scrolling="no"
                title={item}
                src={`https://codepen.io/heynext/embed/${item}?height=265&theme-id=light&default-tab=html,result`}
                frameborder="no"
              />
            ))}
          </div>
        </div>

        {!props.hideDemo && props.mirror && (
          <div class={styles.demo}>{slots.default?.()}</div>
        )}
      </div>
    );
  },
});

export default Example;
