import { Directive, DirectiveBinding } from "vue";

type Trigger = "contextmenu" | "click";
interface ContextmenuDirectiveValue {
  trigger?: Trigger | Trigger[];
}

interface ContextmenuDirectiveEl extends Element {
  $contextmenuKey?: string;
}
type ContextmenuDirectiveBinding = DirectiveBinding<ContextmenuDirectiveValue>;

// FIXME
type ContextmenuRef = any;

const bind = (
  el: ContextmenuDirectiveEl,
  binding: ContextmenuDirectiveBinding,
): void => {
  const contextmenuKey = binding.arg;

  if (!contextmenuKey) {
    throw Error("参数有误");
  }

  const contextmenuOptions = binding.value;
  const contextmenuRef: ContextmenuRef =
    binding.instance?.$refs[contextmenuKey];

  if (!contextmenuRef) {
    throw Error(`没有找到 ${contextmenuKey} 对应的实例`);
  }

  el.$contextmenuKey = contextmenuKey;

  contextmenuRef.addReference(el, contextmenuOptions);
};

const unbind = (
  el: ContextmenuDirectiveEl,
  binding: ContextmenuDirectiveBinding,
): void => {
  const contextmenuKey = el.$contextmenuKey;

  if (!contextmenuKey) return;

  const contextmenuRef: ContextmenuRef =
    binding.instance?.$refs[contextmenuKey];

  contextmenuRef?.removeReference(el);
};

const rebind = (
  el: ContextmenuDirectiveEl,
  binding: ContextmenuDirectiveBinding,
): void => {
  unbind(el, binding);
  bind(el, binding);
};

const contextmenuDirective: Directive<
  ContextmenuDirectiveEl,
  ContextmenuDirectiveValue
> = {
  mounted: bind,
  updated: rebind,
  beforeUnmount: unbind,
};

export default contextmenuDirective;
