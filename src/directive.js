/* eslint-disable no-param-reassign */
export default {
  bind (el, binding, vnode) {
    const contextmenu = vnode.context.$refs[binding.arg]
    contextmenu.$refs.reference = el
    contextmenu.$contextmenuId = binding.arg
  },
}
