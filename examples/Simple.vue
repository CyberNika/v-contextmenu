<template>
  <example-box>
    <div v-contextmenu:contextmenu="{ trigger: 'contextmenu' }">
      rightclick me
    </div>
  </example-box>

  <v-contextmenu ref="contextmenu">
    <v-contextmenu-item>菜单1</v-contextmenu-item>
    <v-contextmenu-item>菜单2</v-contextmenu-item>
    <v-contextmenu-item disabled>菜单3</v-contextmenu-item>

    <v-contextmenu-divider />

    <v-contextmenu-group class="xxxx" title="菜单组">
      <v-contextmenu-item>菜单</v-contextmenu-item>
      <v-contextmenu-item>菜单</v-contextmenu-item>
      <v-contextmenu-item>菜单</v-contextmenu-item>
    </v-contextmenu-group>

    <v-contextmenu-divider />

    <v-contextmenu-item>菜单</v-contextmenu-item>

    <v-contextmenu-divider />

    <v-contextmenu-item>菜单</v-contextmenu-item>

    <v-contextmenu-group class="xxxx" title="菜单组">
      <v-contextmenu-item>菜单</v-contextmenu-item>
      <v-contextmenu-item>菜单</v-contextmenu-item>
      <v-contextmenu-item>菜单</v-contextmenu-item>
    </v-contextmenu-group>

    <v-contextmenu-submenu title="子菜单">
      <v-contextmenu-item>菜单4</v-contextmenu-item>

      <v-contextmenu-divider />

      <v-contextmenu-item>菜单5</v-contextmenu-item>
      <v-contextmenu-item>菜单6</v-contextmenu-item>

      <v-contextmenu-group class="xxxx">
        <v-contextmenu-item>菜单</v-contextmenu-item>
        <v-contextmenu-item>菜单</v-contextmenu-item>
        <v-contextmenu-item>菜单</v-contextmenu-item>
      </v-contextmenu-group>

      <v-contextmenu-submenu title="子菜单">
        <v-contextmenu-item>菜单</v-contextmenu-item>
      </v-contextmenu-submenu>
    </v-contextmenu-submenu>
  </v-contextmenu>

  <example-box>
    <div v-contextmenu:contextmenu1="{ trigger: ['contextmenu', 'click'] }">
      click me
    </div>
  </example-box>

  <v-contextmenu ref="contextmenu1">
    <div>xx</div>
    <v-contextmenu-item>
      <div>xxxxx</div>
    </v-contextmenu-item>
  </v-contextmenu>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ExampleBox from "./Box.vue";

const SimpleExample = defineComponent({
  components: {
    ExampleBox,
  },

  setup() {
    return {};
  },
});

export default SimpleExample;
</script>
