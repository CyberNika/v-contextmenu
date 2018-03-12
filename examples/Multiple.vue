<template>
  <div class="example">
    <v-contextmenu ref="contextmenu1" :theme="theme">
      <v-contextmenu-item>菜单1</v-contextmenu-item>
      <v-contextmenu-item>菜单2</v-contextmenu-item>
      <v-contextmenu-item>菜单3</v-contextmenu-item>
    </v-contextmenu>

    <v-contextmenu ref="contextmenu2" :theme="theme">
      <v-contextmenu-item>菜单2-1</v-contextmenu-item>
      <v-contextmenu-item>菜单2-2</v-contextmenu-item>
      <v-contextmenu-item>菜单2-3</v-contextmenu-item>
      <v-contextmenu-item>菜单2-4</v-contextmenu-item>
    </v-contextmenu>

    <div :class="['box', theme]" v-contextmenu:contextmenu1>
      右键点击此区域（ContextMenu1）
    </div>

    <div :class="['box', theme]" v-contextmenu:contextmenu1>
      右键点击此区域（ContextMenu1）
    </div>

    <div :class="['box', theme]" v-contextmenu:contextmenu2>
      右键点击此区域（ContextMenu2）
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Multiple',

    props: {
      theme: String,
    },

    methods: {},
  }
</script>

<style scoped>
  .box {
    width: 100%;
  }
</style>
