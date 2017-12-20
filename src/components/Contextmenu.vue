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

    provide() {
      return {
        $$contextmenu: this,
      }
    },

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

    watch: {
      visible (value) {
        if (value) {
          document.body.addEventListener('click', this.handleBodyClick)
        } else {
          document.body.removeEventListener('click', this.handleBodyClick)
        }
      },
    },
    mounted () {
      document.body.appendChild(this.$el)

      if (this.$refs.reference) {
        this.$refs.reference.addEventListener(this.eventType, this.handleReferenceContextmenu)
      }
    },
    destroyed () {
      document.body.removeChild(this.$el)

      if (this.$refs.reference) {
        this.$refs.reference.removeEventListener(this.eventType, this.handleReferenceContextmenu)
      }

      document.body.removeEventListener('click', this.handleBodyClick)
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
</script>]
