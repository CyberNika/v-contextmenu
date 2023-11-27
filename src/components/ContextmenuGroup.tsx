import { computed, defineComponent } from 'vue';
import type { CSSProperties } from 'vue';

import { CLASSES } from '../constants';

const ContextmenuGroup = defineComponent({
  name: 'VContextmenuGroup',

  props: {
    title: {
      type: String,
      default: undefined,
    },
    maxWidth: {
      type: [Number, String],
      default: undefined,
    },
  },

  setup(props) {
    const style = computed(() => {
      if (!props.maxWidth) return;

      return {
        'max-width':
          typeof props.maxWidth === 'number'
            ? `${props.maxWidth}px`
            : props.maxWidth,
        'overflow-x': 'auto',
      } as CSSProperties;
    });

    return {
      style,
    };
  },

  methods: {
    renderTitle() {
      const content = this.$slots.title?.() || this.title;

      return content ? (
        <div class={CLASSES.contextmenuGroupTitle}>{content}</div>
      ) : null;
    },
  },

  render() {
    return (
      <li class={CLASSES.contextmenuGroup}>
        {this.renderTitle()}

        <ul style={this.style} class={CLASSES.contextmenuGroupMenus}>
          {this.$slots.default?.()}
        </ul>
      </li>
    );
  },
});

export default ContextmenuGroup;
