import { defineComponent, computed } from 'vue';
import type { PropType } from 'vue';

import styles from './index.module.less';

const Example = defineComponent({
  name: 'SiteExample',

  props: {
    codepens: {
      type: [String, Array] as PropType<string | string[]>,
      required: true,
    },
    title: {
      type: String,
      default: undefined,
    },
    description: {
      type: String,
      default: undefined,
    },
    hideDemo: Boolean,
    mirror: Boolean,
    codepenDefaultTab: {
      type: Array as PropType<string[]>,
      default: () => ['html', 'vue', 'result'],
    },
  },

  setup(props, { slots }) {
    const codepenIds = computed(() =>
      Array.isArray(props.codepens) ? props.codepens : [props.codepens],
    );

    return () => (
      <div class={[styles.example, 'container']}>
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
                title={item}
                src={`https://codepen.io/CyberNika/embed/${item}?height=265&theme-id=light&default-tab=${props.codepenDefaultTab.join(
                  ',',
                )}`}
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
