# v-contextmenu

## 概览

包含如下组件：

- [`VContextmenu`](#vcontextmenu)
- [`VContextmenuItem`](#vcontextmenuitem)
- [`VContextmenuSubmenu`](#vcontextmenusubmenu)
- [`VContextmenuGroup`](#vcontextmenugroup)

和如下指令：

- [`v-contextmenu`](#v-contextmenuref)

## 指令

### `v-contextmenu:ref`

其中 `ref` 为一个 `VContextmenu` 的实例，例如

```html
<v-contextmenu ref="contextmenu">
  <v-contextmenu-item>菜单</v-contextmenu-item>
</v-contextmenu>

<div v-contextmenu:contextmenu></div>
```

## 组件

### `VContextmenu`

根组件

**Attributes**

| 参数        | 说明              | 类型    | 可选值 | 默认值      |
| ---------- | ----------------- | ------ | ----- | ---------- |
| eventType  | 触发其显示的事件类型 | String | 事件名 | contextmenu |
| theme      | 主题              | String | default / bright / dark | default |
| disabled   | 是否禁用菜单（菜单不会出现）  | Boolean | true / false | false |
| autoPlacement  | 是否自动切换方位，即当菜单显示时溢出浏览器窗口可视区域，自动切换显示方位 | Boolean | true / false | true |

**Methods**

| 方法名称   | 说明         | 参数     |
| --------- | ----------- | ----------- |
| show      | 显示菜单     | `{ top: number, left: number }`，`top` 和 `left` 均为菜单相对浏览器窗口的值 |
| hide      | 隐藏菜单     | -- |
| hideAll   | 隐藏所有菜单  | -- |

**Events**

| 事件名称     | 说明                     | 回调参数     |
| ----------- | ----------------------- | ----------- |
| show        | 菜单显示时触发的事件       | 菜单组件的 `vm` |
| hide        | 菜单隐藏时触发的事件       | 菜单组件的 `vm` |
| contextmenu | `contextmenu` 事件被触发  | 触发 `contextmenu` 事件区域的 `vnode` |

> 查看[vnode 文档](https://cn.vuejs.org/v2/api/#VNode-%E6%8E%A5%E5%8F%A3)

### `VContextmenuItem`

单个菜单，只能在 `VContextmenu`, `VContextmenuSubmenu` 和 `VContextmenuGroup` 下使用

**Attributes**

| 参数      | 说明        | 类型    | 可选值        | 默认值 |
| ---------| ---------- | ------- | ------------ | ----- |
| divider  | 是否为分隔符 | Boolean | true / false | false |
| disabled | 是否禁用    | Boolean | true / false | false |
| autoHide | 被点击后菜单是否自动隐藏 | Boolean | true / false | true |

**Events**

| 事件名称    | 说明                     | 回调参数     |
| ---------- | ----------------------- | ----------- |
| click      | 菜单被点击时触发的事件      | 第一个参数是 `vm`, 第二个参数是该菜单的 `event` |
| mouseenter | 鼠标移动到菜单上时触发的事件 | 第一个参数是 `vm`, 第二个参数是该菜单的 `event` |
| mouseleave | 鼠标从菜单上离开时触发的事件 | 第一个参数是 `vm`, 第二个参数是该菜单的 `event` |

### `VContextmenuSubmenu`

子菜单，可嵌套使用

**Attributes**

| 参数      | 说明     | 类型    | 可选值   | 默认值 |
| -------- | -------- | ------ | ------- | ----- |
| title    | 菜单名    | String | --      | --    |
| disabled | 是否禁用  | Boolean | true / false | false |

**Events**

| 事件名称    | 说明                     | 回调参数     |
| ---------- | ----------------------- | ----------- |
| mouseenter | 鼠标移动到菜单上时触发的事件 | 第一个参数是 `vm`, 第二个参数是该菜单的 `event` |
| mouseleave | 鼠标从菜单上离开时触发的事件 | 第一个参数是 `vm`, 第二个参数是该菜单的 `event` |

**Slots**

| Slot 名  | 说明                |
| -------- | ------------------ |
| title    | 菜单名，和 `title` 属性二选一 |

### `VContextmenuGroup`

菜组单，嵌套 `VContextmenuItem` 使用

**Attributes**

| 参数      | 说明     | 类型             | 可选值   | 默认值 |
| -------- | -------- | --------------- | ------- | ----- |
| maxWidth | 最大宽度  | Number / String | --      | --    |

## 主题

提供三种主题

**默认**

![default](./images/default.jpg)

**亮色**

![bright](./images/bright.jpg)

**暗色**

![dark](./images/dark.jpg)

另外可自行根据 `classnames` 进行样式覆盖

- `v-contextmenu`: 根元素
- `v-contextmenu--default`: 根元素-默认主题
- `v-contextmenu--bright`: 根元素-亮色主题
- `v-contextmenu--dark`: 根元素-暗色主题
- `v-contextmenu-item`: 单个菜单
- `v-contextmenu-item--hover`: 单个菜单激活状态
- `v-contextmenu-item--disabled`: 单个菜单禁用状态
- `v-contextmenu-divider`: 分割线
- `v-contextmenu-group`: 按钮组根元素
- `v-contextmenu-group__menus`: 按钮组按钮容器
- `v-contextmenu-submenu`: 子菜单容器
- `v-contextmenu-submenu__title`: 子菜单标题
- `v-contextmenu-submenu__icon`: 子菜单标题 icon
