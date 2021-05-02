import { defineComponent } from "vue";
import { GithubOutlined, GitlabOutlined } from "@ant-design/icons-vue";

import TriggerBox from "./TriggerBox";
import { Contextmenu, ContextmenuItem, ContextmenuSubmenu } from "../src";

const ExampleMultiple = defineComponent({
  name: "ExampleMultiple",

  setup() {
    return () => (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
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

          <div
            v-contextmenu={[null, "contextmenu"]}
            style={{
              marginTop: "12px",
              height: "100%",
            }}
          >
            <TriggerBox>
              <code>右键点击此区域</code>
            </TriggerBox>
          </div>

          <div
            v-contextmenu={[null, "contextmenu1"]}
            style={{
              marginTop: "12px",
              height: "100%",
            }}
          >
            <TriggerBox>
              <code>右键点击此区域</code>
            </TriggerBox>
          </div>
        </div>

        <Contextmenu ref="contextmenu">
          <ContextmenuItem>
            <GithubOutlined />
            &nbsp;GitHub
          </ContextmenuItem>

          <ContextmenuItem>
            <GitlabOutlined />
            &nbsp;GitLab
          </ContextmenuItem>
        </Contextmenu>

        <Contextmenu ref="contextmenu1">
          <ContextmenuSubmenu title="蔬菜菜">
            <ContextmenuItem>土豆</ContextmenuItem>
            <ContextmenuItem>黄瓜</ContextmenuItem>

            <ContextmenuSubmenu title="青菜">
              <ContextmenuItem>小油菜</ContextmenuItem>
              <ContextmenuItem>空心菜</ContextmenuItem>
              <ContextmenuItem>紫罗兰</ContextmenuItem>
            </ContextmenuSubmenu>
          </ContextmenuSubmenu>
        </Contextmenu>
      </>
    );
  },
});

export default ExampleMultiple;
