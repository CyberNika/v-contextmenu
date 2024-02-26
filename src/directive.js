/* eslint-disable no-param-reassign */
export default {
  // 在组件 mount 前，设置 $contextmenuId，修复内存泄漏的问题
  bind (el, binding, vnode) {
    const node = vnode.context.$refs[binding.arg] || vnode.context.$refs[binding.value]
    const contextmenu = Object.prototype.toString.call(node) === '[object Array]' ? node[0] : node
    if (contextmenu) {
      contextmenu.$contextmenuId = el.id || contextmenu._uid // eslint-disable-line no-underscore-dangle
    }
  },
  // 之所以用 inserted 而不是 bind，是需要确保 contentmenu mounted 后才进行 addRef 操作
  inserted (el, binding, vnode) {
    const node = vnode.context.$refs[binding.arg] || vnode.context.$refs[binding.value]
    const contextmenu = Object.prototype.toString.call(node) === '[object Array]' ? node[0] : node
    if (contextmenu) {
      contextmenu.addRef({ el, vnode })
    }
  },
}
