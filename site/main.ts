import { createApp } from "vue";

import {
  GithubOutlined,
  GitlabOutlined,
  CodepenOutlined,
  AlipayOutlined,
  WechatOutlined,
  GlobalOutlined,
  BugFilled,
  RocketFilled,
} from "@ant-design/icons-vue";

import App from "./App.vue";

import contextmenu from "../src";

import "../src/themes/default/index.less";
import "./styles/index.less";

const app = createApp(App);

app.use(contextmenu);

app.component(GithubOutlined.name, GithubOutlined);
app.component(CodepenOutlined.name, CodepenOutlined);
app.component(GitlabOutlined.name, GitlabOutlined);
app.component(AlipayOutlined.name, AlipayOutlined);
app.component(WechatOutlined.name, WechatOutlined);
app.component(GlobalOutlined.name, GlobalOutlined);
app.component(BugFilled.name, BugFilled);
app.component(RocketFilled.name, RocketFilled);

app.mount("#app");
