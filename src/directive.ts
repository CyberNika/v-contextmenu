import { Directive, DirectiveBinding } from "vue";

import { TriggerEventType } from "./types";
interface ContextmenuDirectiveValue {
  trigger?: TriggerEventType | TriggerEventType[];
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
  // TODO: https://github.com/vuejs/jsx-next/issues/404
  const contextmenuKey = binding.arg || binding.value?.[1];

  if (!contextmenuKey) {
    console.error("参数有误");
    return;
  }

  // const contextmenuOptions = binding.value;
  const contextmenuOptions = binding.value?.[0];
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