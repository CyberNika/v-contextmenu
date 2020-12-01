<template>
  <div
    v-contextmenu:contextmenu="{ trigger: 'contextmenu' }"
    :style="{
      width: '100%',
      height: '100%',
    }"
  >
    rightclick me
  </div>

  <v-contextmenu ref="contextmenu">
    <v-contextmenu-item>
      <span class="feather icon-github" />
      GitHub
    </v-contextmenu-item>
    <v-contextmenu-item>
      <span class="feather icon-gitlab" />
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

const ExampleSimple = defineComponent({
  name: "ExampleSimple",
});

export default ExampleSimple;
</script>
