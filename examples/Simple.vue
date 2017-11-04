<template>
  <div class="example">
    <v-contextmenu ref="contextmenu">
      <v-contextmenu-item @click="handleClick">菜单1</v-contextmenu-item>
      <v-contextmenu-item @click="handleClick">菜单2</v-contextmenu-item>
      <v-contextmenu-item disabled @click="handleClick">菜单3</v-contextmenu-item>
    </v-contextmenu>

    <div class="box" v-contextmenu:contextmenu>
      右键点击此区域
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Simple',

    methods: {
      handleClick (event, vm) {
        alert(`「${vm.$slots.default[0].text}」被点击啦！`)
      },
    },
  }
</script>

<style scoped>
  .box {
    width: 100%;
  }
</style>
