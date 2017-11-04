<template>
  <div class="example">
    <div class="buttons">
      <button type="button" @click="handleShow">显示</button>
      <button type="button" @click="handleHide">隐藏</button>
    </div>
    <div class="box" ref="box">
      展示区域

      <v-contextmenu ref="contextmenu">
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
    name: 'CustomerShow',

    methods: {
      handleShow () {
        const targetDimensions = this.$refs.box.getBoundingClientRect()
        const postition = {
          top: Math.random() * targetDimensions.height + targetDimensions.top,
          left: Math.random() * targetDimensions.width + targetDimensions.left,
        }
        this.$refs.contextmenu.show(postition)
      },
      handleHide() {
        this.$refs.contextmenu.hide()
      },
    },
  }
</script>

<style scoped>
  .buttons {
    padding: 5px 10px;
    background-color: #f2f2f2;
  }

  .box {
    position: relative;
    width: 100%;
    height: 120px;
    line-height: 120px;
  }
</style>
