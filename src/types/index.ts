import type { DirectiveBinding } from 'vue';

import Contextmenu from '../components/Contextmenu';

/**
 * common
 */
export type TriggerEventType = 'contextmenu' | 'click';
export type TriggerEventTypeOption = TriggerEventType | TriggerEventType[];

export interface ReferenceOptions {
  triggers: TriggerEventType[];
  handler: (evt: Event) => void;
}

/**
 * directive
 */
export interface ContextmenuDirectiveValue {
  trigger?: TriggerEventType | TriggerEventType[];
}

export interface ContextmenuDirectiveEl extends Element {
  $contextmenuKey?: string;
}
export type ContextmenuDirectiveBinding =
  DirectiveBinding<ContextmenuDirectiveValue>;

export type ContextmenuInstance = InstanceType<typeof Contextmenu>;

/**
 * ContextMenu
 */
export interface ShowOptions {
  top?: number;
  left?: number;
  autoAdjustPlacement?: boolean;
}

export interface AddReferenceOptions {
  trigger?: TriggerEventTypeOption;
}
