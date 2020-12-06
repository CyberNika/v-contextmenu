<template>
  <div
    v-contextmenu:contextmenu="{ trigger: 'contextmenu' }"
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
      <v-contextmenu-item>黄瓜</v-contextmenu-item>

      <v-contextmenu-submenu title="青菜">
        <v-contextmenu-item>小油菜</v-contextmenu-item>
        <v-contextmenu-item>空心菜</v-contextmenu-item>
        <v-contextmenu-item>紫罗兰</v-contextmenu-item>
      </v-contextmenu-submenu>
    </v-contextmenu-submenu>

    <v-contextmenu-item disabled>菠萝蜜</v-contextmenu-item>

    <v-contextmenu-divider />

    <v-contextmenu-item>哈密瓜</v-contextmenu-item>
  </v-contextmenu>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TriggerBox from "./TriggerBox.vue";

const ExampleSimple = defineComponent({
  name: "ExampleSimple",

  components: {
    TriggerBox,
  },
});

export default ExampleSimple;
</script>
