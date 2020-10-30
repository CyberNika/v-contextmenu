import { Directive } from 'vue'

const contextmenuDirective: Directive = {
  beforeMount(el, binding, vnode) {
    // const node =
    //   vnode.context.$refs[binding.arg] || vnode.context.$refs[binding.value]
    // const contextmenu =
    //   Object.prototype.toString.call(node) === '[object Array]' ? node[0] : node
    // contextmenu.addRef({ el, vnode })
    // contextmenu.$contextmenuId = el.id || contextmenu._uid // eslint-disable-line no-underscore-dangle
  }
}

export default contextmenuDirective
