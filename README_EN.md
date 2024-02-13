# v-contextmenu

[![NPM version][badge-npm-version]][url-npm]
[![NPM download][badge-npm-download]][url-npm]
[![NPM version][badge-language]][url-github]
![License][badge-license]
[![Node version][badge-node-version]][url-npm]

[![NPM][image-npm]][url-npm]

ContextMenu component for Vue 2.0.

**English | [中文](./README.md)**

## Installation

### CDN

Get the latest version from [unpkg.com/v-contextmenu@2](https://unpkg.com/v-contextmenu@2/), and then import JavaScript and CSS file in your page.

``` html
<!-- import Vue -->
<script src="https://unpkg.com/vue@2/dist/vue.js"></script>

<!-- import JavaScript -->
<script src="https://unpkg.com/v-contextmenu@2/dist/index.js"></script>

<!-- import CSS -->
<link rel="stylesheet" href="https://unpkg.com/v-contextmenu@2/dist/index.css">
```

> NPM is recommended.

### NPM

```bash
$ npm i -S v-contextmenu@2 # yarn add v-contextmenu@2
```

## Gallery

![gallery](./docs/images/gallery.jpg)

[Go online examples](https://cybernika.github.io/v-contextmenu/v2) or [see online examples' GIF](./docs/images/example.gif)

## Usage

A simple example

```javascript
import contentmenu from 'v-contextmenu'
import 'v-contextmenu/dist/index.css'

Vue.use(contentmenu)
```

```html
<template>
  <v-contextmenu ref="contextmenu">
    <v-contextmenu-item>Menu Item 1</v-contextmenu-item>
    <v-contextmenu-item>Menu Item 2</v-contextmenu-item>
    <v-contextmenu-item>Menu Item 3</v-contextmenu-item>
  </v-contextmenu>

  <div v-contextmenu:contextmenu>Right click here</div>
</template>
```

See [usage](./docs/usage-en.md) & [examples](./examples) for more details.

> See [Stoneless](./examples/Stoneless.vue) to manually import.

## Theme

There are three themes，see [VContextmenu](./docs/usage-en.md#vcontextmenu) for more details.

**Default**

![default](./docs/images/default.jpg)

**Bright**

![bright](./docs/images/bright.jpg)

**Dark**

![dark](./docs/images/dark.jpg)

## Develop

```bash
$ npm install
$ npm run dev
```

## Build

```bash
$ npm run build:package # Build for npm
$ npm run build:example # Build for site
$ npm run build # build:package & build:example
```

## Changelog

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
