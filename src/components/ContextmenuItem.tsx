import { computed, defineComponent, inject, ref } from 'vue';

import { CLASSES } from '../constants';

const ContextmenuItem = defineComponent({
  name: 'VContextmenuItem',

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    hideOnClick: {
      type: Boolean,
      default: true,
    },
    contextmenuAsClick: {
      type: Boolean,
      default: true,
    },
  },

  emits: ['click', 'contextmenu', 'mouseenter', 'mouseleave'],

  setup(props, { emit }) {
    const rootHide = inject<() => void>('hide');

    const hover = ref(false);
    const classes = computed(() => ({
      [CLASSES.contextmenuItem]: true,
      [CLASSES.contextmenuItemDisabled]: props.disabled,
      [CLASSES.contextmenuItemHover]: hover.value,
    }));

    const handleClick = (evt: Event) => {
      emit('click', evt);

      if (props.disabled) return;

      props.hideOnClick && rootHide?.();
    };
    const handleContextmenu = (evt: Event) => {
      emit('contextmenu', evt);

      if (props.contextmenuAsClick) {
        if (props.disabled) return;

        props.hideOnClick && rootHide?.();
      }
    };

    const handleMouseenter = (evt: Event) => {
      emit('mouseenter', evt);

      if (props.disabled) return;

      hover.value = true;
    };

    const handleMouseleave = (evt: Event) => {
      emit('mouseleave', evt);

      if (props.disabled) return;

      hover.value = false;
    };

    return {
      classes,

      handleClick,
      handleContextmenu,

      handleMouseenter,
      handleMouseleave,
    };
  },

  render() {
    return (
      <li
        class={this.classes}
        onClick={this.handleClick}
        onContextmenu={this.handleContextmenu}
        onMouseenter={this.handleMouseenter}
        onMouseleave={this.handleMouseleave}
      >
        {this.$slots.default?.()}
      </li>
    );
  },
});

export default ContextmenuItem;
