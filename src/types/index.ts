export type TriggerEventType = "contextmenu" | "click";
export type TriggerEventTypeOption = TriggerEventType | TriggerEventType[];

export interface ReferenceOptions {
  triggers: TriggerEventType[];
  handler: (evt: Event) => void;
}
