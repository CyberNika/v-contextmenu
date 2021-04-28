import { defineComponent } from "vue";

const boxStyle = {
  display: "flex",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
};

const TriggerBox = defineComponent({
  name: "TriggerBox",

  setup(props, { slots }) {
    return () => <div style={boxStyle}>{slots.default?.()}</div>;
  },
});

export default TriggerBox;
