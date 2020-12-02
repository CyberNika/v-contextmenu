<template>
  <header v-contextmenu:contextmenu class="header">
    <nav class="nav container">
      <div class="nav-left">
        <span class="logo">
          <bug-filled />
        </span>

        <span class="nav-item">
          <a href="https://github.com/heynext/v-contextmenu">文档</a>
        </span>

        <span class="nav-item">
          <a href="https://github.com/heynext/v-contextmenu">API</a>
        </span>

        <span class="nav-item">
          <a href="https://github.com/heynext/v-contextmenu">主题</a>
        </span>

        <span class="nav-item">
          <a href="https://github.com/heynext/v-contextmenu">关于</a>
        </span>
      </div>

      <div class="nav-right">
        <span class="nav-item">
          <a href="https://github.com/heynext/v-contextmenu">
            <github-outlined />
          </a>
        </span>

        <span class="nav-item">
          <global-outlined />
          简体中文
        </span>
      </div>
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
        <button class="setup-button">
          文档
          <span class="setup-button-doc-icon">
            <rocket-filled />
          </span>
        </button>
      </div>

      <div class="setup">
        <code>
          <span class="setup-label">NPM</span>
          <span class="setup-content">
            npm i v-contextmenu
          </span>
        </code>
      </div>

      <div class="setup">
        <code>
          <span class="setup-label">CDN</span>
          <span class="setup-content">
            https://unpkg.com/v-contextmenu@next
          </span>
        </code>
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
  background-color: #2b93d1;
  background-image: linear-gradient(205deg, #2b93d1 0%, #519e96 100%);
  text-align: center;
  color: #fff;
}

.nav {
  display: flex;
  height: 64px;
  justify-content: space-between;
  color: #fff;
  line-height: $height;

  .logo {
    margin-right: 24px;
    font-size: 24px;
    vertical-align: middle;
  }

  &-item {
    vertical-align: middle;

    a {
      opacity: 0.85;

      &:hover {
        opacity: 1;
      }

      &:active {
        opacity: 0.9;
      }
    }

    & + & {
      margin-left: 16px;
    }
  }
}

.title {
  margin: 40px 0 0;
  font-family: 'Texturina', serif;
  font-size: 56px;
}

.description {
  font-size: 18px;
  margin: 50px 0 0;
}

.badge {
  display: inline-block;

  &s {
    margin-top: 30px;
  }

  & + & {
    margin-left: 8px;
  }
}

.action {
  &s {
    margin-top: 26px;
  }

  & + & {
    margin-left: 8px;
  }
}

.setup {
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  font-weight: 600;

  @height: 30px;

  &s {
    padding: 12px 0;
    margin-top: 30px;
    background-color: rgba(#333, 0.1);
  }

  & + & {
    margin-left: 8px;
  }

  &-button {
    padding: 0 12px;
    height: @height;
    line-height: $height;
    border-radius: 4px;
    color: #fff;
    background-color: rgba(#4fa8b6, 0.8);
    font-weight: 600;

    &:hover {
      background-color: #4fa8b6;
    }

    &-doc-icon {
      display: inline-block;
      transform: rotate(45deg);
    }
  }

  &-label {
    display: inline-block;
    padding: 0 10px;
    height: @height;
    line-height: $height;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    color: #fff;
    background-color: #4fa8b6;
  }

  &-content {
    display: inline-block;
    padding: 0 12px;
    height: @height;
    line-height: $height;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    color: rgba(#fff, 0.7);
    background-color: rgba(#4fa8b6, 0.6);
  }
}
</style>
