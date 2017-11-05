# v-contextmenu

## 概览

包含如下组件：

- `VContextmenu`
- `VContextmenuItem`
- `VContextmenuSubmenu`

和如下指令：

- `v-contextmenu`

## 指令

#### `v-contextmenu:ref`

其中 `ref` 为一个 `VContextmenu` 的实例，例如

```html
<v-contextmenu ref="contextmenu">
  <v-contextmenu-item>菜单</v-contextmenu-item>
</v-contextmenu>

<div v-contextmenu:contextmenu></div>
```

## 组件

#### `VContextmenu`

根组件

**Attributes**

| 参数        | 说明              | 类型    | 可选值 | 默认值      |
| ---------- | ----------------- | ------ | ----- | ---------- |
| eventType  | 触发其显示的事件类型 | String | 事件名 | contextmenu |

**Methods**

| 方法名称  | 说明             | 参数     |
| -------- | --------------- | ----------- |
| show     | 显示菜单 | `{ top: number, left: number }`，`top` 和 `left` 均为菜单相对浏览器窗口的值 |
| hide     | 隐藏菜单 | -- |

**Events**

| 事件名称  | 说明               | 回调参数     |
| -------- | ----------------- | ----------- |
| show     | 菜单显示时触发的事件 | 菜单组件的 `vm` |
| hide     | 菜单隐藏时触发的事件 | 菜单组件的 `vm` |

#### `VContextmenuItem`

单个菜单，只能在 `VContextmenu` 和 `VContextmenuSubmenu` 下使用

**Attributes**

| 参数      | 说明        | 类型    | 可选值        | 默认值 |
| ---------| ---------- | ------- | ------------ | ----- |
| divider  | 是否为分隔符 | Boolean | true / false | false |
| disabled | 是否禁用    | Boolean | true / false | false |

**Events**

| 事件名称  | 说明                | 回调参数     |
| -------- | ------------------ | ----------- |
| click    | 菜单被点击时触发的事件 | 第一个参数是 `event`, 第二个参数是该菜单的 `vm` |

#### `VContextmenuSubmenu`

子菜单，可嵌套使用

**Attributes**

| 参数      | 说明     | 类型    | 可选值   | 默认值 |
| -------- | -------- | ------ | ------- | ----- |
| title    | 菜单名    | String | --      | --    |
| disabled | 是否禁用  | Boolean | true / false | false |

**Slots**

| Slot 名  | 说明                |
| -------- | ------------------ |
| title    | 菜单名，和 `title` 属性二选一 |

## 主题

可根据 `classname` 进行样式覆盖

- `v-contextmenu`: 根元素
- `v-contextmenu-item`: 单个菜单
- `v-contextmenu-item--hover`: 单个菜单激活状态
- `v-contextmenu-item--disabled`: 单个菜单禁用状态
- `v-contextmenu-divider`: 分割线
- `v-contextmenu-submenu`: 子菜单容器
- `v-contextmenu-submenu__title`: 子菜单标题
- `.v-contextmenu-submenu__icon`: 子菜单标题 icon
