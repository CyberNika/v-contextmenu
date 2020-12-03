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
    <v-contextmenu-item> 菜单 </v-contextmenu-item>

    <v-contextmenu-group>
      <v-contextmenu-item>
        <github-outlined />
      </v-contextmenu-item>
      <v-contextmenu-item>
        <codepen-outlined />
      </v-contextmenu-item>
      <v-contextmenu-item disabled>
        <alipay-outlined />
      </v-contextmenu-item>
      <v-contextmenu-item>
        <wechat-outlined />
      </v-contextmenu-item>
    </v-contextmenu-group>

    <v-contextmenu-divider />

    <v-contextmenu-group title="按钮组">
      <v-contextmenu-item>菜单1</v-contextmenu-item>
      <v-contextmenu-item>菜单2</v-contextmenu-item>
      <v-contextmenu-item disabled>菜单3</v-contextmenu-item>
    </v-contextmenu-group>
  </v-contextmenu>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TriggerBox from "./TriggerBox.vue";

const ExampleGroup = defineComponent({
  name: "ExampleGroup",

  components: {
    TriggerBox,
  },
});

export default ExampleGroup;
</script>
