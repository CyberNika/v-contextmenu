import { defineComponent } from 'vue'

const Component = defineComponent({
  props: {
    message: {
      type: String,
      required: true,
      default: ''
    }
  },

  setup(props) {
    const result = props.message.split('') // 正确, 'message' 被声明为字符串
  },

  render() {
    return <div>xxxx</div>
  }
})

export default Component
