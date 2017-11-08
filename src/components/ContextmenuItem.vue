<template>
  <li class="v-contextmenu-divider" v-if="divider"></li>

  <li
    v-else
    :class="classname"
    @click="handleClick"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave">
    <slot></slot>
  </li>
</template>

<script>
  export default {
    name: 'VContextmenuItem',

    props: {
      divider: Boolean,
      disabled: Boolean,
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
      },
      handleMouseleave (event) {
        if (this.disabled) return

        this.hover = false
      },

      handleClick (event) {
        if (this.disabled) return

        this.$emit('click', event, this)
      },
    },
  }
</script>
