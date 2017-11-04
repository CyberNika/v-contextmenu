<template>
  <div id="app">
    <header>
      <h1>v-contextmenu</h1>

      <p>适用于 Vue 2.0 的 ContextMenu 组件。</p>
    </header>

    <nav>
      <h3>示例</h3>
      <ul class="nav-list">
        <li
          :key="item.id"
          :class="{
            'nav-item': true,
            'active': item.id === currentExample,
          }"
          @click="changeExample(item.id)"
          v-for="item of examples">
          {{ item.label }}
        </li>
      </ul>
    </nav>

    <main class="showground">
      <div class="example-title">
        「{{ exampleTitle }}」示例
      </div>
      <component :is="currentExample"></component>
    </main>
  </div>
</template>

<script>
  import Simple from './Simple.vue'
  import Submenu from './Submenu.vue'
  import Divider from './Divider.vue'
  import CustomerShow from './CustomerShow.vue'
  import CustomerEvent from './CustomerEvent.vue'

  export default {
    name: 'app',

    components: {
      Simple,
      Submenu,
      Divider,
      CustomerShow,
      CustomerEvent,
    },

    computed: {
      exampleTitle () {
        return this.examples.find(item => item.id === this.currentExample).label
      },
    },

    data () {
      return {
        currentExample: window.location.hash.slice(1) || 'simple',

        examples: [{
          id: 'simple',
          label: '基础菜单',
        }, {
          id: 'divider',
          label: '分割线',
        }, {
          id: 'submenu',
          label: '子菜单',
        }, {
          id: 'customerEvent',
          label: '自定义事件',
        }, {
          id: 'customerShow',
          label: '手动显示',
        }],
      }
    },

    methods: {
      changeExample (value) {
        this.currentExample = value
        window.location.hash = value
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

  .nav-list {
    padding: 0 8px;
    margin: 0;
    border-radius: 2px;
    background-color: #ef5350;
    white-space: nowrap;
    overflow-x: auto;
    list-style: none;
  }

  .nav-item {
    position: relative;
    display: inline-block;
    padding: 8px;
    color: rgba(255, 255, 255, 0.75);
    cursor: pointer;
  }

  .nav-item:hover,
  .nav-item.active {
    font-weight: normal;
    color: #fff;
  }

  .nav-item + .nav-item::before {
    content: "";
    position: absolute;
    top: 12px;
    left: 0;
    width: 0;
    height: 18px;
    border-left: 1px solid rgba(222, 222, 222, 0.5);
  }

  .showground {
    margin-top: 20px;
    border-radius: 2px;
    overflow: hidden;
  }

  .example-title {
    height: 36px;
    border-bottom: 1px solid #e2e2e2;
    line-height: 36px;
    text-align: center;
    background-color: #e8e8e8;
  }
</style>

<style>
  body {
    color: #333;
    font-weight: lighter;
    font-size: 16px;
    line-height: 1.5;
  }

  ::selection {
    color: #fff;
    background-color: #ef5350;
  }

  .box {
    background-color: #f2f2f2;
    /*border-radius: 2px;*/
    height: 80px;
    line-height: 80px;
    text-align: center;
  }

  .box + .box {
    border-top: 1px solid #e2e2e2;
  }
</style>
