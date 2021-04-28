import { defineComponent } from "vue";
import {
  GithubOutlined,
  CodepenOutlined,
  AlipayOutlined,
  WechatOutlined,
} from "@ant-design/icons-vue";

import TriggerBox from "./TriggerBox";
import { Contextmenu, ContextmenuItem, ContextmenuGroup } from "../src";

const ExampleGroup = defineComponent({
  name: "ExampleGroup",

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

          <ContextmenuGroup>
            <ContextmenuItem>
              <GithubOutlined />
            </ContextmenuItem>
            <ContextmenuItem>
              <CodepenOutlined />
            </ContextmenuItem>
            <ContextmenuItem disabled>
              <AlipayOutlined />
            </ContextmenuItem>
            <ContextmenuItem>
              <WechatOutlined />
            </ContextmenuItem>
          </ContextmenuGroup>

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

export default ExampleGroup;