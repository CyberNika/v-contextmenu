<template>
  <li
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
          'v-contextmenu-divider': this.divider,
        }
      },
    },

    methods: {
      handleMouseenter (event) {
        this.hover = true
      },
      handleMouseleave (event) {
        this.hover = false
      },

      handleClick (event) {
        this.$emit('click', event, this)
      },
    },
  }
</script>
