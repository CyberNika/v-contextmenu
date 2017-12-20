<template>
  <div class="example">
    <v-contextmenu ref="contextmenu" :theme="theme">
      <v-contextmenu-item @click="handleClick">菜单1-1</v-contextmenu-item>
      <v-contextmenu-item @click="handleClick">菜单1-2</v-contextmenu-item>

      <v-contextmenu-item divider></v-contextmenu-item>

      <v-contextmenu-item @click="handleClick">菜单2-1</v-contextmenu-item>
      <v-contextmenu-item @click="handleClick">菜单2-2</v-contextmenu-item>

      <v-contextmenu-item divider></v-contextmenu-item>

      <v-contextmenu-item @click="handleClick">菜单3-1</v-contextmenu-item>
    </v-contextmenu>

    <div :class="['box', theme]" v-contextmenu:contextmenu>
      右键点击此区域
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Divider',

    props: {
      theme: String,
    },

    methods: {
      handleClick (vm, event) {
        console.log(vm, event)
      },
    },
  }
</script>

<style scoped>
  .box {
    width: 100%;
  }
</style>
