/* eslint-disable no-param-reassign */
export default {
  bind (el, binding, vnode) {
    vnode.context.$refs[binding.arg].$refs.reference = el
  },
}
