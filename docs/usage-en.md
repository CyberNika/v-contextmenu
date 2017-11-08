# v-contextmenu

## Startup

All components as follows：

- `VContextmenu`
- `VContextmenuItem`
- `VContextmenuSubmenu`

and a directive：

- `v-contextmenu`

## Directive：

#### `v-contextmenu:ref`

`ref` is an instance of `VContextmenu`，for example:

```html
<v-contextmenu ref="contextmenu">
  <v-contextmenu-item>Menu</v-contextmenu-item>
</v-contextmenu>

<div v-contextmenu:contextmenu></div>
```

## Components

#### `VContextmenu`

Base Contextmenu Component

**Attributes**

| Attribute  | Description   | Type   | Options    | Default       |
| ---------- | ------------- | ------ | ---------- | ------------- |
| eventType  | event to bind | String | any events | contextmenu   |
| theme      | theme         | String | default / bright | default |

**Methods**

| Method Name | Description   | Arguments     |
| ----------- | ------------- | ------------- |
| show        | show the Menu | `{ top: number, left: number }`，both `top` & `left` are the relative value to browser |
| hide        | hide the Menu | -- |

**Events**

| Event Name  | Description                  | Parameters       |
| ----------- | ---------------------------- | ---------------- |
| show        | triggers when the Menu shows | `vm` of the Menu |
| hide        | triggers when the Menu hides | `vm` of the Menu |

#### `VContextmenuItem`

Component for menu items，only used within `VContextmenu` or `VContextmenuSubmenu`

**Attributes**

| Attribute  | Description            | Type    | Options      | Default |
| ---------- | ---------------------- | ------- | ------------ | ------- |
| divider    | whether a divider menu | Boolean | true / false | false   |
| disabled   | whether disabled       | Boolean | true / false | false   |

**Events**

| Event Name | Description        | Parameters     |
| ---------- | ------------------ | -------------- |
| click      | triggers when the Menuitem clicked  | the first parameter is `event`, the second is `vm` |

#### `VContextmenuSubmenu`

Component for submenus，able to be nested

**Attributes**

| Attribute | Description      | Type    | Options | Default |
| --------- | ---------------- | ------- | ------- | ------- |
| title     | submenu's title  | String  | --      | --      |
| disabled  | whether disabled | Boolean | true / false | false |

**Slots**

| Slot Name | Description                                |
| --------- | ------------------------------------------ |
| title     | submenu's title，same as `title` attribute |

## Themes

There are two themes as follows:

**Default**

![default](./images/default.jpg)

**Bright**

![bright](./images/bright.jpg)

Furthermore, you can cover the default styles using following `classnames`

- `v-contextmenu`: Root element
- `v-contextmenu--default`: Root element - default theme
- `v-contextmenu--bright`: Root element - bright theme
- `v-contextmenu-item`: Menu item
- `v-contextmenu-item--hover`: Menu item when hover
- `v-contextmenu-item--disabled`: Menu item when disabled
- `v-contextmenu-divider`: Menu item with the `divider` attribute
- `v-contextmenu-submenu`: Submenu's wrapper
- `v-contextmenu-submenu__title`: Title of submenu
- `v-contextmenu-submenu__icon`: Icon of submenu
