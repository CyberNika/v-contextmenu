> WIP! See https://github.com/CyberNika/v-contextmenu/blob/2.x/docs/usage.md for Vue 2.0

# v-contextmenu

[![NPM version][badge-npm-version]][url-npm]
[![NPM download][badge-npm-download]][url-npm]
[![NPM version][badge-language]][url-github]
![License][badge-license]
[![Node version][badge-node-version]][url-npm]

[![NPM][image-npm]][url-npm]

**ContextMenu** component for **Vue 3.0**.

**English | [简体中文](./README.md)**

## Installation

### NPM (Recommend)

```bash
$ npm i -S v-contextmenu # yarn add v-contextmenu
```

### CDN

Get the latest version from [unpkg.com/v-contextmenu](https://unpkg.com/v-contextmenu/), and then import JavaScript and CSS file in your page.

```html
<!-- import Vue -->
<script src="https://unpkg.com/vue"></script>

<!-- import VContextmenu component -->
<script src="https://unpkg.com/v-contextmenu/dist/index.js"></script>

<!-- import VContextmenu styles -->
<link
  rel="stylesheet"
  href="https://unpkg.com/v-contextmenu/dist/themes/default.css"
/>
```

```javascript
// global
Vue.use(window.contextmenu);

// or as needed
const { directive, Contextmenu, ContextmenuItem } = window.contextmenu;

export default {
  directives: {
    contextmenu: directive,
  },

  components: {
    [Contextmenu.name]: Contextmenu,
    [ContextmenuItem.name]: ContextmenuItem,
  },
};
```

## 🏖 Gallery

[Go online examples](https://CyberNika.github.io/v-contextmenu)

![gallery](./docs/images/gallery.jpg)

## 🎏 Usage

### Global register

```javascript
import contextmenu from "v-contextmenu";
import "v-contextmenu/dist/themes/default.css";

Vue.use(contextmenu);
```

```html
<template>
  <v-contextmenu ref="contextmenu">
    <v-contextmenu-item>Menu Item 1</v-contextmenu-item>
    <v-contextmenu-item>Menu Item 2</v-contextmenu-item>
    <v-contextmenu-item>Menu Item 3</v-contextmenu-item>
  </v-contextmenu>

  <div v-contextmenu:contextmenu>right click here</div>
</template>
```

### Register as needed

```HTML
<template>
  <v-contextmenu ref="contextmenu">
    <v-contextmenu-item>Menu Item 1</v-contextmenu-item>
    <v-contextmenu-item>Menu Item 2</v-contextmenu-item>
    <v-contextmenu-item>Menu Item 3</v-contextmenu-item>
  </v-contextmenu>

  <div v-contextmenu:contextmenu>right click here</div>
</template>

<script>
import { directive, Contextmenu, ContextmenuItem } from "v-contextmenu";
import "v-contextmenu/dist/themes/default.css";

export default {
  directives: {
    contextmenu: directive,
  },

  components: {
    [Contextmenu.name]: Contextmenu,
    [ContextmenuItem.name]: ContextmenuItem,
  }
}
</script>
```

See [online site][url-homepage] & [document](./docs/usage.md) for more details.

## 🎨 Theme

**Default**

`v-contextmenu/dist/themes/default.css`

![default](./docs/images/default.jpg)

**Bright**

`v-contextmenu/dist/themes/bright.css`

![bright](./docs/images/bright.jpg)

**Dark**

`v-contextmenu/dist/themes/dark.css`

![dark](./docs/images/dark.jpg)

## 🛠 Develop

```bash
$ pnpm install # install dependencies
$ pnpm dev # start dev server
```

## 🤖 Build

```bash
$ pnpm build # Build for npm
$ pnpm build:site # Build for site
```

## 🛎 Changelog

See [releases][url-releases]

[badge-npm-version]: https://img.shields.io/npm/v/v-contextmenu/next
[badge-language]: https://img.shields.io/github/languages/top/CyberNika/v-contextmenu
[badge-node-version]: https://img.shields.io/node/v/v-contextmenu/next
[badge-npm-download]: https://img.shields.io/npm/dt/v-contextmenu
[badge-license]: https://img.shields.io/github/license/CyberNika/v-contextmenu.svg
[url-npm]: https://npmjs.org/package/v-contextmenu
[url-dependencies]: https://david-dm.org/vkbansal/v-contextmenu
[url-releases]: https://github.com/CyberNika/v-contextmenu/releases
[url-github]: https://github.com/CyberNika/v-contextmenu
[url-homepage]: https://CyberNika.github.io/v-contextmenu
[image-npm]: https://nodei.co/npm/v-contextmenu.png
