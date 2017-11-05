<template>
  <div class="example">
    <v-contextmenu ref="contextmenu" event-type="click" :theme="theme">
      <v-contextmenu-item @click="handleClick">菜单1</v-contextmenu-item>
      <v-contextmenu-item @click="handleClick">菜单2</v-contextmenu-item>

      <v-contextmenu-item divider></v-contextmenu-item>

      <v-contextmenu-submenu title="子菜单">
        <v-contextmenu-item disabled @click="handleClick">菜单4</v-contextmenu-item>
        <v-contextmenu-item @click="handleClick">菜单5</v-contextmenu-item>

        <v-contextmenu-submenu title="子菜单的子菜单">
          <v-contextmenu-item @click="handleClick">菜单6</v-contextmenu-item>
          <v-contextmenu-item @click="handleClick">菜单7</v-contextmenu-item>
        </v-contextmenu-submenu>
      </v-contextmenu-submenu>

      <v-contextmenu-item @click="handleClick">菜单3</v-contextmenu-item>
    </v-contextmenu>

    <v-contextmenu ref="dbContextmenu" event-type="dblclick" :theme="theme">
      <v-contextmenu-item @click="handleClick">菜单1</v-contextmenu-item>
      <v-contextmenu-item divider></v-contextmenu-item>
      <v-contextmenu-item @click="handleClick">菜单2</v-contextmenu-item>
      <v-contextmenu-item @click="handleClick">菜单3</v-contextmenu-item>
    </v-contextmenu>

    <!-- <v-contextmenu ref="touchContextmenu" event-type="touchstart">
      <v-contextmenu-item>菜单1</v-contextmenu-item>
      <v-contextmenu-item @click="handleClick">菜单2</v-contextmenu-item>
      <v-contextmenu-item @click="handleClick">菜单3</v-contextmenu-item>
    </v-contextmenu> -->

    <div :class="['box', theme]" v-contextmenu:contextmenu>
      左键点击此区域
    </div>

    <div :class="['box', theme]" v-contextmenu:dbContextmenu>
      左键双击此区域
    </div>

    <!-- <div :class="['box', theme]" v-contextmenu:touchContextmenu>
      触摸此区域
    </div> -->
  </div>
</template>

<script>
  export default {
    name: 'CustomerEvent',

    props: {
      theme: String,
    },

    methods: {
      handleClick (event, vm) {
        alert(`「${vm.$slots.default[0].text}」被点击啦！`)
      },
      handleShow () {
        console.log('show')
      },
    },
  }
</script>

<style scoped>
  .box {
    width: 100%;
  }
</style>
