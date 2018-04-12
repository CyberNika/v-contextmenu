/* eslint-disable no-param-reassign */
export default {
  bind (el, binding, vnode) {
    const contextmenu = vnode.context.$refs[binding.arg]

    if (Array.isArray(contextmenu.$refs.references)) {
      contextmenu.$refs.references.push({ el, vnode })
    } else {
      contextmenu.$refs.references = [{ el, vnode }]
    }

    contextmenu.$contextmenuId = el.id || contextmenu._uid // eslint-disable-line no-underscore-dangle
  },
}
