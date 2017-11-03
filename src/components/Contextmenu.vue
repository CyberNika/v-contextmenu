<template>
  <ul
    ref="contextmenu"
    class="v-contextmenu"
    v-click-outside="hide"
    v-show="visible"
    :style="style">
    <slot></slot>
  </ul>
</template>

<script>
  import ClickOutside from 'vue-click-outside'

  export default {
    name: 'VContextmenu',

    directives: {
      ClickOutside
    },

    props: {
      eventType: {
        type: String,
        default: 'contextmenu',
      },
      reference: {},
    },

    data () {
      return {
        visible: false,
        style: {
          top: 0,
          left: 0,
        },
      }
    },

    mounted () {
      const reference = this.$refs.reference

      reference.addEventListener(this.eventType, this.handleReferenceContextmenu)
    },
    destroyed () {
      const reference = this.$refs.reference

      reference.removeEventListener(this.eventType, this.handleReferenceContextmenu)
    },

    methods: {
      handleReferenceContextmenu (event) {
        event.preventDefault()

        const eventX = event.clientX
        const eventY = event.clientY

        this.$nextTick(() => {
          const contextmenuWidth = this.$refs.contextmenu.clientWidth
          const contextmenuHeight = this.$refs.contextmenu.clientHeight
          const contextmenuPosition = {
            top: eventY,
            left: eventX,
          }

          if (contextmenuHeight + eventY >= window.innerHeight) {
            contextmenuPosition.top -= contextmenuHeight
          }

          if (contextmenuWidth + eventX >= window.innerWidth) {
            contextmenuPosition.left -= contextmenuWidth
          }

          this.style = {
            top: `${contextmenuPosition.top}px`,
            left: `${contextmenuPosition.left}px`,
          }
        })

        this.show()
      },
      show () {
        this.visible = true
      },
      hide () {
        this.visible = false
      },
    },
  }
</script>
