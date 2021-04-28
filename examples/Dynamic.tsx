import { defineComponent } from "vue";

import TriggerBox from "./TriggerBox";
import { Contextmenu, ContextmenuItem, ContextmenuGroup } from "../src";

const ExampleDynamic = defineComponent({
  name: "ExampleDynamic",

  setup() {
    return () => (
      <>
        <div
          v-contextmenu={[{ trigger: "contextmenu" }, "contextmenu"]}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <TriggerBox>
            <code>rightclick here</code>
          </TriggerBox>
        </div>

        <Contextmenu ref="contextmenu">
          <ContextmenuItem>菜单</ContextmenuItem>

          <Contextmenu-divider />

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

export default ExampleDynamic;
