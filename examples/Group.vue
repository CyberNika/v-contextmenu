<template>
  <div class="example">
    <v-contextmenu ref="contextmenu" :theme="theme">
      <v-contextmenu-group :max-width="240">
        <v-contextmenu-item :auto-hide="false">菜单1</v-contextmenu-item>
        <v-contextmenu-item>菜单2</v-contextmenu-item>
        <v-contextmenu-item>菜单3</v-contextmenu-item>
      </v-contextmenu-group>

      <v-contextmenu-item divider></v-contextmenu-item>

      <v-contextmenu-group max-width="240px" style="font-size: 18px;">
        <v-contextmenu-item @click="handleClick">
          <span class="iconfont icon-github"></span>
        </v-contextmenu-item>
        <v-contextmenu-item @click="handleClick">
          <span class="iconfont icon-thumbs-up"></span>
        </v-contextmenu-item>
        <v-contextmenu-item @click="handleClick">
          <span class="iconfont icon-search"></span>
        </v-contextmenu-item>
        <v-contextmenu-item @click="handleClick">
          <span class="iconfont icon-star"></span>
        </v-contextmenu-item>
      </v-contextmenu-group>

      <v-contextmenu-item divider></v-contextmenu-item>

      <v-contextmenu-item>菜单4</v-contextmenu-item>
      <v-contextmenu-item>菜单5</v-contextmenu-item>
    </v-contextmenu>

    <div :class="['box', theme]" v-contextmenu:contextmenu>
      右键点击此区域
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Group',

    props: {
      theme: String,
    },

    methods: {
      handleClick (vm, event) {
        window.open('https://github.com/CyberNika/v-contextmenu/tree/2.x')
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .box
    width: 100%
</style>
