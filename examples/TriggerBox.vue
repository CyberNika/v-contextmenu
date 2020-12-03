<template>
  <div class="box">
    <slot>{{ title }}</slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TriggerBox",
});
</script>

<style lang="less" scoped>
.box {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
