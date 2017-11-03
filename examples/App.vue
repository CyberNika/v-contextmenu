<template>
  <div id="app">
    <v-contextmenu ref="contextmenu">
      <v-contextmenu-item @click="handleClick">菜单1</v-contextmenu-item>
      <v-contextmenu-item @click="handleClick">菜单2</v-contextmenu-item>

      <v-contextmenu-item divider></v-contextmenu-item>

      <v-contextmenu-submenu title="子菜单">
        <v-contextmenu-item @click="handleClick">菜单3</v-contextmenu-item>

        <v-contextmenu-item divider></v-contextmenu-item>

        <v-contextmenu-submenu title="子菜单">
          <v-contextmenu-item @click="handleClick">菜单5</v-contextmenu-item>
        </v-contextmenu-submenu>

        <v-contextmenu-item @click="handleClick">菜单4</v-contextmenu-item>
      </v-contextmenu-submenu>
    </v-contextmenu>

    <div class="box" v-contextmenu:contextmenu></div>
  </div>
</template>

<script>
  import '../dist'
  import '../dist/assets/styles/index.css'

  export default {
    name: 'app',

    methods: {
      handleClick (event, vm) {
        console.log(event, vm)
      },
    },
  }
</script>

<style scoped>
  .box {
    width: 100%;
    height: 200px;
    background-color: #f2f2f2;
    border: 1px solid #eee;
  }
</style>
