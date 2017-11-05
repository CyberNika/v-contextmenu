<template>
  <ul
    ref="contextmenu"
    :class="contextmenuCls"
    v-show="visible"
    :style="style">
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    name: 'VContextmenu',

    props: {
      eventType: {
        type: String,
        default: 'contextmenu',
      },
      theme: {
        type: String,
        default: 'default',
      },
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
    computed: {
      clickOutsideHandler () {
        return this.visible ? this.hide : () => {}
      },
      isClick () {
        return this.eventType === 'click'
      },
      contextmenuCls () {
        return [
          'v-contextmenu',
          `v-contextmenu--${this.theme}`,
        ]
      },
    },

    mounted () {
      const reference = this.$refs.reference

      document.body.appendChild(this.$el)
      reference && reference.addEventListener(this.eventType, this.handleReferenceContextmenu)
      reference && document.body.addEventListener('click', this.handleBodyClick)
    },
    destroyed () {
      const reference = this.$refs.reference

      document.body.removeChild(this.$el)
      reference && reference.removeEventListener(this.eventType, this.handleReferenceContextmenu)
      reference && document.body.removeEventListener('click', this.handleBodyClick)
    },

    methods: {
      handleReferenceContextmenu (event) {
        event.preventDefault()

        const eventX = event.pageX
        const eventY = event.pageY

        this.show()

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
      },
      handleBodyClick (event) {
        const notOutside = this.$el.contains(event.target) || (
          this.isClick && this.$refs.reference.contains(event.target)
        )

        if (!notOutside) {
          this.visible = false
        }
      },
      show (position) {
        if (position) {
          this.style = {
            top: `${position.top}px`,
            left: `${position.left}px`,
          }
        }

        this.visible = true
        this.$emit('show', this)
      },
      hide () {
        this.visible = false
        this.$emit('hide', this)
      },
    },
  }
</script>
