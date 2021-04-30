import { defineComponent, ref } from "vue";

import TriggerBox from "./TriggerBox";
import {
  Contextmenu,
  ContextmenuItem,
  ContextmenuDivider,
  ContextmenuGroup,
  ContextmenuSubmenu,
} from "../src";

const ExampleCustomShow = defineComponent({
  name: "ExampleCustomShow",

  setup() {
    const contextmenuRef = ref<typeof Contextmenu>();
    const boxRef = ref<HTMLDivElement>();

    const show = () => {
      if (!boxRef.value) return;

      const targetDimensions = boxRef.value.getBoundingClientRect();

      const postition = {
        top:
          Math.random() * targetDimensions.height +
          targetDimensions.top +
          window.scrollY,
        left:
          Math.random() * targetDimensions.width +
          targetDimensions.left +
          window.scrollX,
      };

      contextmenuRef.value?.show(postition);
    };

    const hide = () => {
      contextmenuRef.value?.hide();
    };

    return () => (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <div>
            <button type="button" onClick={show}>
              显示
            </button>
            <button type="button" onClick={hide} style={{ marginLeft: "6px" }}>
              隐藏
            </button>
          </div>

          <div
            ref={boxRef}
            style={{
              flex: 1,
              marginTop: "12px",
            }}
          >
            <TriggerBox>
              <code>显示区域</code>
            </TriggerBox>
          </div>
        </div>

        <Contextmenu ref={contextmenuRef}>
          <ContextmenuItem>菜单</ContextmenuItem>

          <ContextmenuSubmenu title="蔬菜菜">
            <ContextmenuItem>土豆</ContextmenuItem>
            <ContextmenuItem>黄瓜</ContextmenuItem>

            <ContextmenuSubmenu title="青菜">
              <ContextmenuItem>小油菜</ContextmenuItem>
              <ContextmenuItem>空心菜</ContextmenuItem>
              <ContextmenuItem>紫罗兰</ContextmenuItem>
            </ContextmenuSubmenu>
          </ContextmenuSubmenu>

          <ContextmenuDivider />

          <ContextmenuGroup title="按钮组">
            <ContextmenuItem>菜单1</ContextmenuItem>
            <ContextmenuItem>菜单2</ContextmenuItem>
            <ContextmenuItem disabled>菜单3</ContextmenuItem>
          </ContextmenuGroup>
        </Contextmenu>
      </>
    );
  },
});

export default ExampleCustomShow;
