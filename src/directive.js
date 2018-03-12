/* eslint-disable no-param-reassign */
export default {
  bind (el, binding, vnode) {
    const contextmenu = vnode.context.$refs[binding.arg]

    if (Array.isArray(contextmenu.$refs.reference)) {
      contextmenu.$refs.reference.push(el)
    } else {
      contextmenu.$refs.reference = [el]
    }

    contextmenu.$contextmenuId = el.id || contextmenu._uid // eslint-disable-line no-underscore-dangle
  },
}
