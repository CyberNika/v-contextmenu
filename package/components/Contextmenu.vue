<template>
  <ul
    ref="contextmenu"
    :class="cls"
    v-show="visible"
    :style="style">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { is } from "../utils";

@Component
export default class VContextmenu extends Vue {
  @Prop({ default: "default" }) private theme!: string;
  @Prop({ default: "contextmenu" }) private eventType!: string;
  @Prop({ default: true }) private autoPlacement!: boolean;
  @Prop({ default: false }) private disabled!: boolean;

  private visible: boolean = false;

  private position: {
    top: number, left: number,
  } = {
    top: 0, left: 0,
  };

  get cls() {
    return [
      "v-contextmenu",
      `v-contextmenu--${this.theme}`,
    ];
  }

  get style() {
    const { left, top } = this.position;

    return {
      left: is.number(left) ? `${left}px` : left,
      top: is.number(top) ? `${top}px` : top,
    };
  }
}
</script>
