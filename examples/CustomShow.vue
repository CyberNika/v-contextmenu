<template>
  <div class="example">
    <div :class="['buttons', theme]">
      <button type="button" @click="handleShow">显示</button>
      <button type="button" @click="handleHide">隐藏</button>
    </div>
    <div :class="['box', theme]" ref="box">
      展示区域
      <v-contextmenu ref="contextmenu" :theme="theme">
        <v-contextmenu-item>菜单1</v-contextmenu-item>
        <v-contextmenu-item divider></v-contextmenu-item>
        <v-contextmenu-item>菜单2</v-contextmenu-item>
        <v-contextmenu-item>菜单3</v-contextmenu-item>
      </v-contextmenu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomShow',

  props: {
    theme: String,
  },

  methods: {
    handleShow() {
      const targetDimensions = this.$refs.box.getBoundingClientRect()
      const postition = {
        top: Math.random() * targetDimensions.height + targetDimensions.top,
        left: Math.random() * targetDimensions.width + targetDimensions.left,
      }
      debugger
      this.$refs.contextmenu.show(postition)
    },
    handleHide() {
      this.$refs.contextmenu.hide()
    },
  },
}
</script>

<style lang="stylus" scoped>
main-color = #46a0fc;
main-color-bright = #ef5350;

.buttons {
  padding: 5px 10px;
  border-left: 1px solid main-color;
  border-right: 1px solid main-color;
  background-color: #fff;

  &.bright {
    border-color: main-color-bright;
  }
}

.box {
  position: relative;
  width: 100%;
  height: 120px;
  line-height: 120px;
}
</style>
