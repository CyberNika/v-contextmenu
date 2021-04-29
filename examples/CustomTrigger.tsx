import { defineComponent } from "vue";

import TriggerBox from "./TriggerBox";
import {
  Contextmenu,
  ContextmenuItem,
  ContextmenuDivider,
  ContextmenuGroup,
} from "../src";

const ExampleCustomTrigger = defineComponent({
  name: "ExampleCustomTrigger",

  setup() {
    return () => (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            v-contextmenu={[{ trigger: "click" }, "contextmenu"]}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <TriggerBox>
              <code>左键点击此区域</code>
            </TriggerBox>
          </div>

          <div
            v-contextmenu={[
              { trigger: ["click", "contextmenu"] },
              "contextmenu",
            ]}
            style={{
              marginTop: "12px",
              width: "100%",
              height: "100%",
            }}
          >
            <TriggerBox>
              <code>左键或右键点击此区域</code>
            </TriggerBox>
          </div>

          <div
            v-contextmenu={[{ trigger: "dblclick" }, "contextmenu"]}
            style={{
              marginTop: "12px",
              width: "100%",
              height: "100%",
            }}
          >
            <TriggerBox>
              <code>左键双击此区域</code>
            </TriggerBox>
          </div>
        </div>

        <Contextmenu ref="contextmenu">
          <ContextmenuItem>菜单</ContextmenuItem>

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

export default ExampleCustomTrigger;
