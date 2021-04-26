# v-contextmenu@next

[![NPM version][badge-npm-version]][url-npm]
[![NPM download][badge-npm-download]][url-npm]
[![NPM version][badge-language]][url-github]
![License][badge-license]
[![Node version][badge-node-version]][url-npm]

[![NPM][image-npm]][url-npm]

**[WIP]** 适用于 **Vue 3.0** 的 **ContextMenu** 组件。

**简体中文 | [English](./README_EN.md)**

## 🚀 安装

### NPM 安装（推荐）

```bash
$ npm i -S v-contextmenu@next # yarn add v-contextmenu@next
```

### CDN 引入

可通过 [unpkg.com/v-contextmenu](https://unpkg.com/v-contextmenu@next/) 获取最新版本的资源，在页面中引入相应 js 和 css 文件即可。

```html
<!-- 引入 Vue -->
<script src="https://unpkg.com/vue@next"></script>

<!-- 引入 VContextmenu 组件 -->
<script src="https://unpkg.com/v-contextmenu@next/dist/index.js"></script>

<!-- 引入 VContextmenu 组件样式 -->
<link
  rel="stylesheet"
  href="https://unpkg.com/v-contextmenu@next/dist/themes/default.css"
/>
```

## 🏖 概览

![概览](./docs/images/gallery.jpg)

[访问在线示例](https://heynext.github.io/v-contextmenu) 或 [查看在线示例 GIF](./docs/images/example.gif)

## 🎏 使用

一个简单的例子

```javascript
import contentmenu from "v-contextmenu";
import "v-contextmenu/dist/themes/default.css";

Vue.use(contentmenu);
```

```html
<template>
  <v-contextmenu ref="contextmenu">
    <v-contextmenu-item>菜单1</v-contextmenu-item>
    <v-contextmenu-item>菜单2</v-contextmenu-item>
    <v-contextmenu-item>菜单3</v-contextmenu-item>
  </v-contextmenu>

  <div v-contextmenu:contextmenu>右键点击此区域</div>
</template>
```

详细使用方法见 [在线站点][url-homepage] & [文档](./docs/usage.md)

> 如果你需要单独引入组件使用，请查看[单独引用](./examples/Stoneless.vue)

## 🎨 主题

提供三种主题，使用方法见 [VContextmenu](./docs/usage.md#vcontextmenu)

**默认**

![default](./docs/images/default.jpg)

**亮色**

![bright](./docs/images/bright.jpg)

**暗色**

![dark](./docs/images/dark.jpg)

## 🛠 开发

```bash
$ npm install # 安装依赖
$ npm run dev # 启动开发服务
```

## 🤖 构建

```bash
$ npm run build # 构建 npm 包
$ npm run build:site # 构建站点
```

## 🛎 更新日志

详见 [releases][url-releases]

[badge-npm-version]: https://img.shields.io/npm/v/v-contextmenu/next
[badge-language]: https://img.shields.io/github/languages/top/heynext/v-contextmenu
[badge-node-version]: https://img.shields.io/node/v/v-contextmenu/next
[badge-npm-download]: https://img.shields.io/npm/dt/v-contextmenu
[badge-license]: https://img.shields.io/github/license/heynext/v-contextmenu.svg
[url-npm]: https://npmjs.org/package/v-contextmenu
[url-dependencies]: https://david-dm.org/vkbansal/v-contextmenu
[url-releases]: https://github.com/heynext/v-contextmenu/releases
[url-github]: https://github.com/heynext/v-contextmenu
[url-homepage]: https://heynext.github.io/v-contextmenu
[image-npm]: https://nodei.co/npm/v-contextmenu.png
