# v-contextmenu

[![NPM version][badge-npm-version]][url-npm]
[![Node version][badge-node-version]][url-npm]
[![NPM download][badge-npm-download]][url-npm]
![Dependencies][badge-dependencies]
![License][badge-license]

[![NPM][image-npm]][url-npm]

适用于 Vue 2.0 的 ContextMenu 组件。

**中文 | [English](./README_en.md)**

## 安装

```bash
$ yarn add v-contextmenu # npm i -S v-contextmenu
```

## 概览

![概览](./docs/images/gallery.jpg)

[访问在线示例](https://xbt1.github.io/v-contextmenu) 或 [查看在线示例 GIF](./docs/images/example.gif)

## 使用

一个简单的例子

```javascript
import contentmenu from 'v-contextmenu'
import 'v-contextmenu/dist/index.css'

Vue.use(contentmenu)
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

详细使用方法见 [文档](./docs/usage.md) & [例子](./examples)

> 如果你需要单独引入组件使用，请查看[单独引用](./examples/Stoneless.vue)

## 主题

提供两种主题，使用方法见 [VContextmenu](./docs/usage.md#vcontextmenu)

**默认**

![default](./docs/images/default.jpg)

**亮色**

![bright](./docs/images/bright.jpg)

## 开发

```bash
$ yarn install
$ yarn dev
```

## 构建

```bash
$ yarn build:package # 构建 npm 包
$ yarn build:example # 构建示例站点
$ yarn build # build:package & build:example
```

## 更新日志

详见 [releases][url-releases]


[badge-npm-version]: https://img.shields.io/npm/v/v-contextmenu.svg
[badge-node-version]: https://img.shields.io/node/v/v-contextmenu.svg
[badge-npm-download]: https://img.shields.io/npm/dt/v-contextmenu.svg
[badge-license]: https://img.shields.io/github/license/xbt1/v-contextmenu.svg
[badge-dependencies]: https://img.shields.io/david/dev/xbt1/v-contextmenu.svg

[url-npm]: https://npmjs.org/package/v-contextmenu
[url-dependencies]: https://david-dm.org/vkbansal/v-contextmenu
[url-releases]: https://github.com/XBT1/v-contextmenu/releases

[image-npm]: https://nodei.co/npm/v-contextmenu.png
