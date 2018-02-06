<template>
  <div id="app">
    <header>
      <h1>v-contextmenu</h1>

      <p>
        <span class="description">适用于 Vue 2.0 的 ContextMenu 组件。</span>
        <iframe
          class="gh-star"
          scrolling="0"
          width="170px"
          height="20px"
          src="https://ghbtns.com/github-btn.html?user=XBT1&repo=v-contextmenu&type=star&count=true" frameborder="0" >
        </iframe>
      </p>
    </header>

    <div class="usage">
      <h3>用法</h3>
      <a :class="['usage-link', theme]" href="https://github.com/XBT1/v-contextmenu/blob/master/README.md">安装 &amp 使用 <i class="v-contextmenu-iconfont usage-icon"></i></a>
    </div>

    <nav>
      <h3>
        <span>示例</span>
        <button type="button" @click="changeTheme">切换主题</button>
      </h3>
      <ul :class="['nav-list', theme]">
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
      <div :class="['example-title', theme]">
        「{{ exampleTitle }}」示例
      </div>

      <component :is="currentExample" :theme="theme"></component>

      <p>查看源码：<a :href="currentExampleSourceUrl" target="_blank">{{ currentExampleFileName }}</a></p>
    </main>
  </div>
</template>

<script>
  import Simple from './Simple.vue'
  import Submenu from './Submenu.vue'
  import Divider from './Divider.vue'
  import Group from './Group.vue'
  import Disabled from './Disabled.vue'
  import CustomShow from './CustomShow.vue'
  import CustomTrigger from './CustomTrigger.vue'
  import Stoneless from './Stoneless.vue'

  const EXAMPLE_LIST = [{
    id: 'Simple',
    label: '基础菜单',
    source: '',
  }, {
    id: 'Divider',
    label: '分割线',
    source: '',
  }, {
    id: 'Group',
    label: '按钮组',
    source: '',
  }, {
    id: 'Submenu',
    label: '子菜单',
    source: '',
  }, {
    id: 'Disabled',
    label: '禁用',
    source: '',
  }, {
    id: 'CustomTrigger',
    label: '自定义事件',
    source: '',
  }, {
    id: 'CustomShow',
    label: '手动显示',
    source: '',
  }, {
    id: 'Stoneless',
    label: '单独引入',
    source: '',
  }]

  export default {
    name: 'app',

    components: {
      Simple,
      Submenu,
      Group,
      Divider,
      Disabled,
      CustomShow,
      CustomTrigger,
      Stoneless,
    },

    data () {
      return {
        currentExample: window.location.hash.slice(1) || EXAMPLE_LIST[0].id,
        theme: 'default',

        examples: EXAMPLE_LIST,
      }
    },
    computed: {
      exampleTitle () {
        return this.examples.find(item => item.id === this.currentExample).label
      },
      currentExampleFileName () {
        return `${this.currentExample}.vue`
      },
      currentExampleSourceUrl () {
        const baseUrl = 'https://github.com/XBT1/v-contextmenu/blob/master/examples'
        const fileName = this.currentExampleFileName

        return `${baseUrl}/${fileName}`
      },
    },

    methods: {
      changeExample (value) {
        this.currentExample = value
        window.location.hash = value
      },
      changeTheme () {
        this.theme = this.theme === 'default' ? 'bright' : 'default'
      },
    },
  }
</script>

<style scoped lang="stylus">
  main-color = #46a0fc
  main-color-bright = #ef5350

  #app
    max-width: 1000px
    margin: 0 auto

  .usage-link
    color: main-color
    border-bottom: 1px solid main-color
    text-decoration: none

    &.bright
      color: main-color-bright
      border-bottom: 1px solid main-color-bright

    &:hover
      opacity: 0.8

  .usage-icon::before
    content: "\e622"

  .description
    line-height: 20px
    vertical-align: middle

  .gh-star
    margin-left: 8px
    vertical-align: middle

  .nav-list
    padding: 0 8px
    margin: 0
    border-radius: 2px
    background-color: main-color
    white-space: nowrap
    overflow-x: auto
    list-style: none

    &.bright
      background-color: main-color-bright

  .nav-item
    position: relative
    display: inline-block
    padding: 8px
    color: rgba(255, 255, 255, 0.55)
    cursor: pointer

  .nav-item:hover,
  .nav-item.active
    font-weight: normal
    color: #fff

  .nav-item + .nav-item::before
    content: ""
    position: absolute
    top: 12px
    left: 0
    width: 0
    height: 18px
    border-left: 1px solid rgba(222, 222, 222, 0.5)

  .showground
    margin-top: 20px
    border-radius: 2px
    overflow: hidden

  .example-title
    height: 36px
    background-color: main-color
    line-height: 36px
    text-align: center
    color: #fff

    &.bright
      background-color: main-color-bright
</style>

<style lang="stylus">
  main-color = #46a0fc
  main-color-bright = #ef5350

  @font-face
    font-family: "feather"
    src: url("https://at-ui.github.io/at-ui/static/fonts/feather.eot")
    src: url("https://at-ui.github.io/at-ui/static/fonts/feather.eot#iefix") format("embedded-opentype"),
        url("https://at-ui.github.io/at-ui/static/fonts/feather.ttf") format("truetype"),
        url("https://at-ui.github.io/at-ui/static/fonts/feather.woff") format("woff"),
        url("https://at-ui.github.io/at-ui/static/fonts/feather.svg#feather") format("svg")

  html
    height: 100%

  body
    height: 100%
    color: #333
    font-size: 16px
    line-height: 1.5

  ::selection
    color: #fff
    background-color: main-color

  .box
    height: 80px
    border: 1px solid main-color
    background-color: #fff
    line-height: 80px
    color: #666
    text-align: center
    box-sizing: border-box

    &.bright
      border-color: main-color-bright

    & + .box
      border-top: none

  .iconfont
    display: inline-block
    font-family: "feather" !important
    font-size: inherit
    font-weight: normal
    text-rendering: auto

    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale

  .icon-github:before { content: "\e87b" }
  .icon-thumbs-up:before { content: "\e8d6" }
  .icon-search:before { content: "\e8bd" }
  .icon-star:before { content: "\e8cd" }
</style>
