# v-contextmenu

## 目录

- [v-contextmenu](#v-contextmenu)
  - [目录](#目录)
  - [类型](#类型)
  - [指令](#指令)
    - [`v-contextmenu:ref`](#v-contextmenuref)
  - [组件](#组件)
    - [`VContextmenu`](#vcontextmenu)
    - [`VContextmenuItem`](#vcontextmenuitem)
    - [`VContextmenuDivider`](#vcontextmenudivider)
    - [`VContextmenuSubmenu`](#vcontextmenusubmenu)
    - [`VContextmenuGroup`](#vcontextmenugroup)
  - [主题](#主题)

## 类型

```typescript
type TriggerEventType = "contextmenu" | "click" | "dblclick";
```

## 指令

### `v-contextmenu:ref`

其中 `ref` 为一个 `VContextmenu` 的实例，例如

```html
<v-contextmenu ref="contextmenu">
  <v-contextmenu-item>菜单</v-contextmenu-item>
</v-contextmenu>

<div v-contextmenu:contextmenu></div>
```

指令也支持传入参数，用法如下：

```html
<div v-contextmenu:contextmenu="{ trigger: ['contextmenu', 'click'] }"></div>
```

| 参数    | 类型                                                    | 可选 | 默认值 | 说明           |
| ------- | ------------------------------------------------------- | ---- | ------ | -------------- |
| trigger | <code>TriggerEventType &#124; TriggerEventType[]</code> | 可选 | -      | 触发的事件类型 |

## 组件

### `VContextmenu`

根组件

**Attributes**

| 参数                  | 类型                               | 可选 | 默认值   | 说明                                                                     |
| --------------------- | ---------------------------------- | ---- | -------- | ------------------------------------------------------------------------ |
| model-value / v-model | `boolean`                          | 可选 | `false`  | 是否显示                                                                 |
| autoAjustPlacement    | `boolean`                          | 可选 | `true`   | 是否自动切换方位，即当菜单显示时溢出浏览器窗口可视区域，自动切换显示方位 |
| disabled              | `boolean`                          | 可选 | `false`  | 是否禁用菜单（菜单不会出现）                                             |
| teleport              | <code>string &#124; Element</code> | 可选 | `"body"` | 使用 Teleport                                                            |

**Methods**

| 方法名称 | 说明     | 参数                                                                        |
| -------- | -------- | --------------------------------------------------------------------------- |
| show     | 显示菜单 | `{ top: number, left: number }`，`top` 和 `left` 均为菜单相对浏览器窗口的值 |
| hide     | 隐藏菜单 | --                                                                          |

**Events**

| 事件名称 | 说明                 | 回调参数        |
| -------- | -------------------- | --------------- |
| show     | 菜单显示时触发的事件 | -- |
| hide     | 菜单隐藏时触发的事件 | -- |

### `VContextmenuItem`

单个菜单，只能在 `VContextmenu`, `VContextmenuSubmenu` 和 `VContextmenuGroup` 下使用

**Attributes**

| 参数        | 类型      | 可选 | 默认值  | 说明                     |
| ----------- | --------- | ---- | ------- | ------------------------ |
| disabled    | `boolean` | 可选 | `false` | 是否禁用               |
| hideOnClick | `boolean` | 可选 | `true`  | 被点击后菜单是否自动隐藏 |

**Events**

| 事件名称   | 说明                         | 回调参数                                        |
| ---------- | ---------------------------- | ----------------------------------------------- |
| click      | 菜单被点击时触发的事件       | 事件 `event` |
| mouseenter | 鼠标移动到菜单上时触发的事件 | 事件 `event` |
| mouseleave | 鼠标从菜单上离开时触发的事件 | 事件 `event` |

### `VContextmenuDivider`

分割线

### `VContextmenuSubmenu`

子菜单，可嵌套使用

**Attributes**

| 参数     | 说明     | 类型    | 可选值       | 默认值 |
| -------- | -------- | ------- | ------------ | ------ |
| title    | 菜单名   | String  | --           | --     |
| disabled | 是否禁用 | Boolean | true / false | false  |

**Events**

| 事件名称   | 说明                         | 回调参数                                        |
| ---------- | ---------------------------- | ----------------------------------------------- |
| mouseenter | 鼠标移动到菜单上时触发的事件 | 事件 `event` |
| mouseleave | 鼠标从菜单上离开时触发的事件 | 事件 `event` |

**Slots**

| Slot 名 | 说明                          |
| ------- | ----------------------------- |
| title   | 菜单名，和 `title` 属性二选一 |

### `VContextmenuGroup`

菜组单，嵌套 `VContextmenuItem` 使用

**Attributes**

| 参数     | 说明     | 类型            | 可选值 | 默认值 |
| -------- | -------- | --------------- | ------ | ------ |
| title    | 标题名   | String          | --     | --     |
| maxWidth | 最大宽度 | Number / String | --     | --     |

**Slots**

| Slot 名 | 说明   |
| ------- | ------ |
| title   | 标题名 |

## 主题

提供三种主题

**默认**

![default](./images/default.jpg)

**亮色**

![bright](./images/bright.jpg)

**暗色**

![dark](./images/dark.jpg)

另外可自行根据 [`classnames`](../src/constants/classes.ts) 进行样式覆盖

- `v-contextmenu`：根元素
- `v-contextmenu-icon`：icon
- `v-contextmenu-inner`：菜单根元素
- `v-contextmenu-divider`：分割线
- `v-contextmenu-item`：单个菜单
- `v-contextmenu-item--hover`：单个菜单激活状态
- `v-contextmenu-item--disabled`：单个菜单禁用状态
- `v-contextmenu-group`：按钮组根元素
- `v-contextmenu-group__title`：按钮组标题
- `v-contextmenu-group__menus`：按钮组按钮容器
- `v-contextmenu-submenu`：子菜单容器
- `v-contextmenu-submenu__title`：子菜单标题
- `v-contextmenu-submenu__menus`：子菜单
- `v-contextmenu-submenu__menus--top`：子菜单 Top
- `v-contextmenu-submenu__menus--right`：子菜单 Right
- `v-contextmenu-submenu__menus--bottom`：子菜 Bottom单
- `v-contextmenu-submenu__menus--left`：子菜单 Left
- `v-contextmenu-submenu__arrow`：子菜单标题 icon
