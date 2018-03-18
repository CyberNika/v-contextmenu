<template>
  <div class="example">
    <v-contextmenu ref="contextmenu" :theme="theme">
      <v-contextmenu-item
        @click="handleClick"
        v-for="item of list"
        :key="item.id">
        {{ item.label }}
      </v-contextmenu-item>
    </v-contextmenu>

    <div :class="['box', theme]" v-contextmenu:contextmenu>
      右键点击此区域（点击菜单动态改变）
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Simple',

    props: {
      theme: String,
    },

    data () {
      return {
        list: [{
          id: 0,
          label: 'Menu 0',
          onClick: this.handleClick,
        }, {
          id: 1,
          label: 'Menu 1',
          onClick: this.handleClick,
        }, {
          id: 2,
          label: 'Menu 2',
          onClick: this.handleClick,
        }],
      }
    },

    methods: {
      handleClick (vm, event) {
        if (this.list.length === 3) {
          this.list.push({
            id: 3,
            label: 'Menu 3',
            onClick: this.handleClick,
          })
        } else {
          this.list.pop()
        }
      },
    },
  }
</script>

<style scoped>
  .box {
    width: 100%;
  }
</style>
