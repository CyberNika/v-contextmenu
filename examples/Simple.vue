<template>
  <div
    v-contextmenu="[{ trigger: 'contextmenu' }, 'contextmenu']"
    :style="{
      width: '100%',
      height: '100%',
    }"
  >
    <trigger-box>
      <code>rightclick here</code>
    </trigger-box>
  </div>

  <v-contextmenu ref="contextmenu">
    <v-contextmenu-item>
      <github-outlined />
      GitHub
    </v-contextmenu-item>
    <v-contextmenu-item>
      <gitlab-outlined />
      GitLab
    </v-contextmenu-item>

    <v-contextmenu-divider />

    <v-contextmenu-submenu title="蔬菜菜">
      <v-contextmenu-item>土豆</v-contextmenu-item>

      <v-contextmenu-submenu title="青菜">
        <v-contextmenu-item>小油菜</v-contextmenu-item>
        <v-contextmenu-item>空心菜</v-contextmenu-item>
      </v-contextmenu-submenu>

      <v-contextmenu-item>黄瓜</v-contextmenu-item>
    </v-contextmenu-submenu>

    <v-contextmenu-item disabled>菠萝蜜</v-contextmenu-item>

    <v-contextmenu-divider />

    <v-contextmenu-item>哈密瓜</v-contextmenu-item>
  </v-contextmenu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { GithubOutlined, GitlabOutlined } from "@ant-design/icons-vue";

import TriggerBox from "./TriggerBox";

const ExampleSFC = defineComponent({
  name: "ExampleSFC",

  components: {
    GithubOutlined,
    GitlabOutlined,
    TriggerBox,
  },
});

export default ExampleSFC;
</script>

<style scoped></style>
