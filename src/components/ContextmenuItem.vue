<template>
  <li
    v-if="divider"
    class="v-contextmenu-divider"
  />

  <li
    v-else
    :class="classname"
    @click="handleClick"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
  >
    <slot />
  </li>
</template>

<script>
  export default {
    name: 'VContextmenuItem',

    inject: ['$$contextmenu'],

    props: {
      divider: Boolean,
      disabled: Boolean,
      autoHide: {
        type: Boolean,
        default: true,
      },
    },

    data () {
      return {
        hover: false,
      }
    },
    computed: {
      classname () {
        return {
          'v-contextmenu-item': !this.divider,
          'v-contextmenu-item--hover': this.hover,
          'v-contextmenu-item--disabled': this.disabled,
        }
      },
    },

    methods: {
      handleMouseenter (event) {
        if (this.disabled) return

        this.hover = true

        this.$emit('mouseenter', this, event)
      },
      handleMouseleave (event) {
        if (this.disabled) return

        this.hover = false

        this.$emit('mouseleave', this, event)
      },

      handleClick (event) {
        if (this.disabled) return

        this.$emit('click', this, event)

        this.autoHide && this.$$contextmenu.hide()
      },
    },
  }
</script>
