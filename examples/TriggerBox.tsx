import { defineComponent } from 'vue';

const boxStyle = {
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  border: '3px dashed rgba(90, 167, 164, 0.9)',
  borderRadius: '8px',
  backgroundColor: 'rgba(90, 167, 164, 0.2)',
};

const TriggerBox = defineComponent({
  name: 'TriggerBox',

  setup(props, { slots }) {
    return () => <div style={boxStyle}>{slots.default?.()}</div>;
  },
});

export default TriggerBox;
