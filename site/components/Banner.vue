<template>
  <header v-contextmenu:contextmenu class="header">
    <nav class="nav">
      <span class="nav-item">
        <a href="https://github.com/heynext/v-contextmenu">GitHub</a>
      </span>
    </nav>

    <h1 class="title">VContextmenu</h1>

    <p class="description">适用于 Vue 3.0 的 Contextmenu 组件。</p>

    <div class="badges">
      <a
        v-for="(item, index) of badges"
        :key="index"
        :href="item.link"
        :title="item.title"
        class="badge"
      >
        <img class="badge-image" :src="item.url" :alt="item.title" />
      </a>
    </div>

    <div class="setups">
      <div class="setup">
        <button class="setup-button">>_ 文档</button>
      </div>
      <div class="setup">
        <span class="setup-label">NPM</span>
        <span class="setup-content">npm i v-contextmenu</span>
      </div>
      <div class="setup">
        <span class="setup-label">CDN</span>
        <span class="setup-content">https://unpkg.com/v-contextmenu@next</span>
      </div>
    </div>
  </header>

  <v-contextmenu ref="contextmenu">
    <v-contextmenu-item>GitHub</v-contextmenu-item>
    <v-contextmenu-item>NPM</v-contextmenu-item>
    <v-contextmenu-item>Document</v-contextmenu-item>
  </v-contextmenu>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const badges = [
  {
    url:
      "https://img.shields.io/github/stars/heynext/v-contextmenu?logo=github&style=flat",
    link: "https://github.com/heynext/v-contextmenu",
    title: "stars",
  },
  {
    url:
      "https://img.shields.io/github/forks/heynext/v-contextmenu?logo=github&style=flat",
    link: "https://github.com/heynext/v-contextmenu",
    title: "fork",
  },
  {
    url: "https://img.shields.io/npm/dw/v-contextmenu?logo=npm&style=flat",
    link: "https://www.npmjs.com/package/v-contextmenu",
    title: "downloads",
  },
];

export default defineComponent({
  name: "SiteBanner",

  setup() {
    return { badges };
  },
});
</script>

<style lang="less" scoped>
.header {
  background-color: #80419b;
  text-align: center;
  color: #fff;
}

.nav {
  padding: 8px 0;
}

.title {
  margin: 32px 0 0;
}

.description {
  margin: 20px 0 0;
}

.badge {
  display: inline-block;

  &s {
    margin-top: 12px;
  }

  & + & {
    margin-left: 8px;
  }
}

.setup {
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;

  @height: 30px;

  &s {
    padding: 12px 0;
    margin-top: 24px;
    background-color: #9db0c0;
  }

  & + & {
    margin-left: 8px;
  }

  &-button {
    padding: 0 8px;
    height: @height;
    line-height: $height;
    border-radius: 4px;
    color: #fff;
    background-color: #2a7979;

    &:hover {
      background-color: #478d8d;
    }
  }

  &-label {
    display: inline-block;
    padding: 0 8px;
    height: @height;
    line-height: $height;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    color: #fff;
    background-color: #2a7979;
  }

  &-content {
    display: inline-block;
    padding: 0 8px;
    height: @height;
    line-height: $height;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    color: rgba(#c1e3e7, 0.8);
    background-color: #478d8d;
  }
}
</style>
