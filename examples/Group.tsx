import { defineComponent } from "vue";
import {
  GithubOutlined,
  CodepenOutlined,
  AlipayOutlined,
  WechatOutlined,
} from "@ant-design/icons-vue";

import TriggerBox from "./TriggerBox";
import {
  Contextmenu,
  ContextmenuItem,
  ContextmenuDivider,
  ContextmenuGroup,
} from "../src";

const ExampleGroup = defineComponent({
  name: "ExampleGroup",

  setup() {
    return () => (
      <>
        <div
          v-contextmenu={[null, "contextmenu"]}
          style={{
            height: "100%",
          }}
        >
          <TriggerBox>
            <code>右键点击此区域</code>
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

export default ExampleGroup;
