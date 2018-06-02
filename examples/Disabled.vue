<template>
  <div class="example">
    <v-contextmenu ref="contextmenu" :theme="theme" :disabled="disabled">
      <v-contextmenu-item @click="handleClick">菜单1</v-contextmenu-item>
      <v-contextmenu-item disabled @click="handleClick">菜单2</v-contextmenu-item>

      <v-contextmenu-item divider></v-contextmenu-item>

      <v-contextmenu-submenu title="子菜单">
        <v-contextmenu-item @click="handleClick">菜单3</v-contextmenu-item>

        <v-contextmenu-item divider></v-contextmenu-item>

        <v-contextmenu-submenu disabled title="子菜单">
          <v-contextmenu-item @click="handleClick">菜单5</v-contextmenu-item>
        </v-contextmenu-submenu>

        <v-contextmenu-item @click="handleClick">菜单4</v-contextmenu-item>
      </v-contextmenu-submenu>
    </v-contextmenu>

    <div :class="['box', theme]" v-contextmenu:contextmenu @click="handleSwitchDisabled">
      左键点击切换禁用状态，右键点击打开菜单
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Disabled',

    props: {
      theme: String,
    },

    data () {
      return {
        disabled: false,
      }
    },

    methods: {
      handleClick (vm, event) {
        console.log(vm, event)
      },
      handleSwitchDisabled () {
        this.disabled = !this.disabled
      },
    },
  }
</script>

<style scoped>
  .box {
    width: 100%;
  }
</style>
