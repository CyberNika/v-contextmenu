<template>
  <div class="example">
    <contextmenu ref="contextmenu" :theme="theme">
      <contextmenu-item>菜单1</contextmenu-item>
      <contextmenu-item>菜单2</contextmenu-item>
      <contextmenu-item>菜单3</contextmenu-item>

      <contextmenu-submenu title="子菜单">
        <contextmenu-item>菜单4</contextmenu-item>

        <contextmenu-item divider></contextmenu-item>

        <contextmenu-submenu title="子菜单">
          <contextmenu-item >菜单5</contextmenu-item>
        </contextmenu-submenu>
      </contextmenu-submenu>
    </contextmenu>

    <div :class="['box', theme]" v-contextmenu:contextmenu>
      右键点击此区域
    </div>
  </div>
</template>

<script>
  import {
    directive,
    Contextmenu,
    ContextmenuItem,
    ContextmenuSubmenu,
    ContextmenuGroup,
  } from '../src'
  export default {
    name: 'Stoneless',
    directives: {
      contextmenu: directive,
    },
    components: {
      Contextmenu,
      ContextmenuItem,
      ContextmenuSubmenu,
      ContextmenuGroup,
    },
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
