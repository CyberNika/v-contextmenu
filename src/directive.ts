import { isRef, type Directive } from 'vue';

import type {
  ContextmenuDirectiveValue,
  ContextmenuDirectiveEl,
  ContextmenuDirectiveBinding,
  ContextmenuInstance,
} from './types';

const bind = (
  el: ContextmenuDirectiveEl,
  binding: ContextmenuDirectiveBinding,
): void => {
  const contextmenuKey = binding.arg;

  if (!contextmenuKey) {
    console.error('参数有误');
    return;
  }

  const contextmenuOptions = binding.value;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const contextmenuInstance: any = isRef(contextmenuKey)
    ? contextmenuKey.value
    : binding.instance?.$refs[contextmenuKey];

  if (!contextmenuInstance) {
    console.error(`没有找到 ${contextmenuKey} 对应的实例`);
    return;
  }

  if (typeof contextmenuInstance.addReference !== 'function') {
    console.error(`${contextmenuKey} 对应的实例不是 VContextmenu`);
    return;
  }

  el.$contextmenuKey = contextmenuKey;

  (contextmenuInstance as ContextmenuInstance).addReference(
    el,
    contextmenuOptions,
  );
};

const unbind = (
  el: ContextmenuDirectiveEl,
  binding: ContextmenuDirectiveBinding,
): void => {
  const contextmenuKey = el.$contextmenuKey;

  if (!contextmenuKey) return;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const contextmenuInstance: any = isRef(contextmenuKey)
    ? contextmenuKey.value
    : binding.instance?.$refs[contextmenuKey];

  if (!contextmenuInstance) {
    console.error(`没有找到 ${contextmenuKey} 对应的实例`);
    return;
  }

  if (typeof contextmenuInstance.removeReference !== 'function') {
    console.error(`${contextmenuKey} 对应的实例不是 VContextmenu`);
    return;
  }

  (contextmenuInstance as ContextmenuInstance).removeReference(el);
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
